/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ProtectedAdmin = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAdminAccess = async () => {
            try {
                const token = localStorage.getItem('token'); 
                
                if (!token) {
                    navigate('/login'); // No token, redirect to login
                    return;
                }

                // Verify token from server
                const response = await axios.get('http://localhost:5000/auth-status', {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Pass the token correctly
                    }
                });

                if (response.data.role === 'admin') {
                    setLoading(false);
                    // Allow access
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'You are not Admin',
                        text: 'You do not have access to the Dashboard'
                    });
                    navigate('/'); // Not an admin, redirect to home
                }
            } catch (error) {
                console.error('Error checking admin access:', error);
                navigate('/login'); // If any error, redirect to login
            }
        };

        checkAdminAccess();
    }, [navigate]);

    if (loading) return <div>Loading...</div>;

    return children;
};

export default ProtectedAdmin;
