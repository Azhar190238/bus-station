import { useState } from 'react';
import { Form, Input } from 'antd';
import login from '../../assets/service/card1.png';
import { Link } from 'react-router-dom';

const Login = () => {
    const [role, setRole] = useState('member');
    const [active, setActive] = useState('member');
    const [form] = Form.useForm();

    const handleClick = (value) => {
        setRole(value);
        setActive(value);
    };

    const onFinish = (values) => {
        console.log({ ...values, role });
        form.resetFields();
    };

    return (
        <div>
            <div className="bus-container">
                <div className="flex items-center flex-col md:flex-row space-x-0 md:space-x-14 lg:space-x-20 rounded">
                    <div className="flex-1">
                        <img src={login} alt="Login Visual" />
                    </div>
                    <div className="flex-1 pr-0 md:pr-16 lg:pr-[112px] py-10">
                        <div className="">
                            <p className="text-[32px] font-bold">Login as</p>
                            <div className="flex mt-4 space-x-2 md:space-x-6">
                                <button onClick={() => handleClick('member')} className={`p-4 text-sm border rounded-md ${active === 'member' ? 'bg-primary text-white' : ''}`}>
                                    General Member
                                </button>
                                <button onClick={() => handleClick('master')} className={`p-4 text-sm border rounded-md ${active === 'master' ? 'bg-primary text-white' : ''}`}>
                                    Counter Master
                                </button>
                            </div>
                            <div className="login-form mt-4 md:mt-8">
                                <Form className="space-y-4" onFinish={onFinish} form={form}>
                                    <Form.Item
                                        label="Phone Number: "
                                        name="phone"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Phone Number!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder='Input your Phone Number' type='number' className='p-4' />
                                    </Form.Item>
                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password placeholder='Input your Password' className='p-4' />
                                    </Form.Item>
                                    <button type="submit" className="button w-full !mt-10 !rounded-md"> Log In </button>
                                </Form>
                                <p className="mt-4 text-center "> Don not have an account? <Link to="/signup" className=" underline text-primary font-bold"> Sign Up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
