import { useEffect, useState } from "react";
import { FaBus, FaUserAstronaut, FaUsers } from "react-icons/fa";
import { GiPoliceOfficerHead } from "react-icons/gi";

const AdminHome = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [mastersCount, setMastersCount] = useState(0);
    const [normalUsersCount, setNormalUsersCount] = useState(0);
    const [totalBuses, setTotalBuses] = useState(0); // State for total number of buses

    // Fetch total users and filter based on role
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then((response) => response.json())
            .then((data) => {
                const allUsers = data.length;
                const masters = data.filter(user => user.role === 'master').length;
                const normalUsers = data.filter(user => user.role === 'member').length;

                setTotalUsers(allUsers);
                setMastersCount(masters);
                setNormalUsersCount(normalUsers);
            })
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    // Fetch total buses
    useEffect(() => {
        fetch('http://localhost:5000/buses')
            .then((response) => response.json())
            .then((data) => {
                setTotalBuses(data.length); // Set total number of buses
            })
            .catch((error) => console.error("Error fetching buses:", error));
    }, []);

    const dashboardItems = [
        {
            icon: FaUsers,
            count: totalUsers,
            text: 'Total Number of All Users',
        },
        {
            icon: GiPoliceOfficerHead,
            count: mastersCount,
            text: 'Number of Counter Masters',
        },
        {
            icon: FaUserAstronaut,
            count: normalUsersCount,
            text: 'Total Number of Normal Users',
        },
        {
            icon: FaBus,
            count: totalBuses, // Use the total number of buses here
            text: 'Total Number of Buses',
        },
    ];

    return (
        <div className="mx-10 my-12">
            {/* Dashboard content */}
            <div className="flex flex-wrap gap-6">
                {dashboardItems.map((item, index) => (
                    <div key={index} className="max-w-64 max-h-48 bg-purple-100 shadow-lg hover:scale-105 group rounded-lg ">
                        <item.icon className="mx-auto mt-6 text-4xl text-[#2b2b38] group-hover:text-primary " />
                        <h1 className="text-[#2b2b38] group-hover:text-primary font-bold p-6 py-2 text-2xl text-center">
                            {item.text}: {item.count}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminHome;
