import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import Swal from 'sweetalert2';

const AllMaster = () => {
    const [users, setUsers] = useState([]);

    // Fetch users from the server when the component mounts
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Error fetching users:", error));
    }, []);

    // Handle deleting a user
    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be able to revert this! You are deleting ${user.name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: "DELETE",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  })
                    .then(response => response.json())
                    .then(result => {
                      console.log('Delete result:', result);  // Log result for debugging
                      if (result.deletedCount > 0) {
                        Swal.fire({
                          title: "Deleted!",
                          text: `${user.name} has been deleted.`,
                          icon: "success"
                        });
                        setUsers(prevUsers => prevUsers.filter(u => u._id !== user._id));
                      } else {
                        Swal.fire({
                          title: "Error!",
                          text: "Failed to delete user",
                          icon: "error"
                        });
                      }
                    })
                    .catch(error => console.error("Error deleting user:", error));                  
            }
        });
    };

    // Filter users to show only members
    const memberUsers = users.filter(user => user.role === "master");

    return (
        <>
            <div className="flex justify-center py-8">
                <h2 className="text-4xl font-bold">Manage Members</h2>
            </div>

            <div className="w-full px-4 lg:px-10">
                <h2 className="text-2xl lg:text-4xl mb-4 font-semibold">Total Members: {memberUsers.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full divide-y divide-gray-300 text-left text-sm lg:text-base">
                        <thead className="bg-slate-700 text-white">
                            <tr>
                                <th className="px-4 py-2">Sl No</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Phone Number</th>
                                <th className="px-4 py-2">Location</th>
                                <th className="px-4 py-2">Role</th>
                                <th className="px-4 py-2">Update</th>
                                <th className="px-4 py-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {memberUsers.map((user, index) => (
                                <tr key={user._id}>
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{user.name}</td>
                                    <td className="px-4 py-2">{user.phone}</td>
                                    <td className="px-4 py-2">{user.location}</td>
                                    <td className="px-4 py-2">{user.role}</td>
                                    <td className="pl-8 py-2"><MdOutlineSystemUpdateAlt className="text-xl text-primary " /></td>
                                    <td className="pl-8 py-2">
                                        <button
                                            onClick={() => handleDelete(user)}
                                            className="btn btn-ghost btn-sm"
                                        >
                                            <FaTrashAlt className="text-red-800 text-lg" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllMaster;
