/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';


const SignUp = () => {
    const navigate = useNavigate();
    const axiosSecurePublic = useAxiosPublic();


    // Individual states for each field
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [otp, setOtp] = useState(''); // State to store OTP input

    const [role, setRole] = useState('member');
    const [active, setActive] = useState('member');
    const [form] = Form.useForm();

    const handleClick = (value) => {
        setRole(value);
        setActive(value);
    };
    const newUser = {
        name: name,
        phone: phone,
        location: location,
        role: role,
        password: password
    }

    const onFinish = async () => {
        console.log('new User', newUser);
        try {
            const response = await axiosSecurePublic.post('/users', newUser);

            // Check for success status
            if (response.status === 200) {
                // Success message
                Swal.fire({
                    icon: 'success',
                    title: 'Registration successful',
                    showConfirmButton: false,
                    timer: 2000
                });
                // Navigate to home page or desired route
                navigate('/');
            }

        } catch (error) {
            // Check if the user already exists (status 409)
            if (error.response && error.response.status === 409) {
                Swal.fire({
                    icon: 'warning',
                    title: 'User already exists',
                    text: 'Please login.',
                    showConfirmButton: true
                });
            } else {
                // General error message
                Swal.fire({
                    icon: 'error',
                    title: 'Registration failed',
                    text: 'Please try again later.'
                });
            }

            console.error('Error:', error);
        }

        // Reset the form
        form.resetFields();
    };



    // Log phone number when 'Send OTP' button is clicked
    const handleSendOtp = () => {
        console.log('Phone:', phone);
    };

    // Log OTP when 'Verify OTP' button is clicked
    const handleVerifyOtp = () => {
        console.log('OTP:', otp); // Log the OTP value stored in the state
    };

    const onChange = (otpValue) => {
        setOtp(otpValue); // Update OTP state
        console.log('onChange:', otpValue); // Log OTP as it changes
    };

    const sharedProps = {
        onChange, // Handle OTP change here
    };


    return (
        <div>
            <div className="bus-container">
                <div className="flex items-center flex-col md:flex-row space-x-0 md:space-x-14 lg:space-x-20 rounded">
                    <div className="flex-1 login-form">
                        <img className='w-full rounded-full border-2 border-primary' src={logo} alt="logo " />
                    </div>
                    <div className="flex-1 pr-0 md:pr-16 lg:pr-[112px] py-10">
                        <div className="">
                            <p className="text-[32px] font-bold">Sign In</p>
                            <div className="flex mt-4 space-x-2 md:space-x-6">
                                <button onClick={() => handleClick('member')} className={`p-4 text-[18px] font-bold border rounded-md ${active === 'member' ? 'bg-primary text-white' : ''}`}>
                                    General Member
                                </button>
                                <button onClick={() => handleClick('master')} className={`p-4 text-[18px] font-bold border rounded-md ${active === 'master' ? 'bg-primary text-white' : ''}`}>
                                    Counter Master
                                </button>
                            </div>
                            <div className="login-form mt-4 md:mt-8">
                                <Form className="space-y-4" onFinish={onFinish} form={form}>
                                    <Form.Item
                                        label="Name: "
                                        name="name"
                                        rules={[{ required: true, message: 'Please input your Name!' }]}
                                    >
                                        <Input
                                            placeholder="Input your Name"
                                            type="text"
                                            className="p-4"
                                            onChange={(e) => {
                                                setName(e.target.value);
                                                console.log('Name:', e.target.value);
                                            }}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="Phone Number: "
                                        name="phone"
                                        rules={[{ required: true, message: 'Please input your Phone Number!' }]}
                                    >
                                        <Input
                                            placeholder="Input your Phone Number"
                                            type="number"
                                            className="p-4"
                                            onChange={(e) => {
                                                setPhone(e.target.value);
                                                console.log('Phone:', e.target.value);
                                            }}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="Counter Location: "
                                        name="location"
                                        rules={[{ required: true, message: 'Please input your Counter Location!' }]}
                                    >
                                        <Input
                                            placeholder="Input your Counter Location"
                                            type="text"
                                            className="p-4"
                                            onChange={(e) => {
                                                setLocation(e.target.value);
                                                console.log('Location:', e.target.value);
                                            }}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password
                                            placeholder="Input your password"
                                            type="password"
                                            className="p-4"
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                console.log('Password:', e.target.value);
                                            }}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="Re-Type Password"
                                        name="confirmPassword"
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please confirm your password!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('Passwords do not match!'));
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input.Password
                                            placeholder="Input your password again"
                                            type="password"
                                            className="p-4"
                                            onChange={(e) => {
                                                setConfirmPassword(e.target.value);
                                                console.log('Confirm Password:', e.target.value);
                                            }}
                                        />
                                    </Form.Item>
                                    <button type="submit" className="button w-full !mt-10 !rounded-md">Sign In</button>
                                </Form>
                                <p className="mt-4 text-center">Have an account? <Link to="/login" className="underline text-primary font-bold">Sign Up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
