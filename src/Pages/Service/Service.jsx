/* eslint-disable react/prop-types */
import { TbArmchair } from "react-icons/tb";
import { GiBusDoors } from "react-icons/gi";
import { LuChevronUpCircle } from "react-icons/lu";
import { useState } from "react";
import { Form, Input } from "antd";

const Service = ({seatPrice}) => {
    const [activeSeats, setActiveSeats] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [discount, setDiscount] = useState(0);
    const [form] = Form.useForm();

    const leftSeats = [
        'A1', 'A2',
        'B1', 'B2',
        'C1', 'C2',
        'D1', 'D2',
        'E1', 'E2',
        'F1', 'F2',
        'G1', 'G2',
        'H1', 'H2',
        'I1', 'I2',
        'J1', 'J2'
    ];
    const rightSeats = [
        'A3', 'A4',
        'B3', 'B4',
        'C3', 'C4',
        'D3', 'D4',
        'E3', 'E4',
        'F3', 'F4',
        'G3', 'G4',
        'H3', 'H4',
        'I3', 'I4',
        'J3', 'J4'
    ];

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClick = (value) => {
        if (activeSeats.includes(value)) {
            setActiveSeats(activeSeats.filter(seat => seat !== value));
        } else {
            setActiveSeats([...activeSeats, value]);
        }
    };

    const applyDiscount = () => {
        const discountValue = parseFloat(inputValue);
        if (!isNaN(discountValue) && discountValue > 0) {
            setDiscount(discountValue);
        } else {
            setDiscount(0); 
        }
        setInputValue('');
    };

    const totalPrice = activeSeats.length * seatPrice;
    const grandTotal = totalPrice - discount;

    const onFinish = (values) => {
        console.log(values, grandTotal, activeSeats);
        form.resetFields();
    };

    return (
        <div>
            
            <div className="mt-16 md:mt-32 bus-container">

            </div>
            <div className="bus-container mt-10 md:mt-20 flex flex-col gap-10 md:flex-row">
                <div className="w-full md:w-[60%]">
                    <h3 className="ticket-header">Select your seat</h3>
                    <div className="flex items-center justify-between font-medium text-[16px] md:text-2xl py-5 border-dashed border-b border-black">
                        <div className="select-seat space-x-2 md:space-x-4">
                            <TbArmchair />
                            <p>Available</p>
                        </div>
                        <div className="select-seat !bg-primary !text-white space-x-2 md:space-x-4">
                            <TbArmchair />
                            <p>Selected</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between py-5">
                        <div className="seat"> <GiBusDoors className="seat-text !text-2xl md:!text-3xl lg:!text-4xl" /></div>
                        <div className="seat"> <LuChevronUpCircle className="seat-text !text-4xl" /></div>
                    </div>
                    <div className="flex items-center justify-between mt-6 md:mt-10">
                        <div className="grid grid-cols-2 gap-3 md:gap-6">
                            {leftSeats.map((seat, index) => (
                                <button key={index} onClick={() => handleClick(seat)} className={`seat seat-text ${activeSeats.includes(seat) ? '!bg-primary !text-white' : ''}`}>
                                    {seat}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-3 md:gap-6">
                            {rightSeats.map((seat, index) => (
                                <button key={index} onClick={() => handleClick(seat)} className={`seat seat-text ${activeSeats.includes(seat) ? '!bg-primary !text-white' : ''}`}>
                                    {seat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[40%] border-none md:border-dashed border-primary border-l-[3px]">
                    <div className="px-0 md:px-10 ">
                        <h3 className="ticket-header">Selected Seats: <span className=" px-4 py-2 bg-primary text-white rounded-full">{activeSeats.length}</span></h3>
                        <div className="bg-[#F7F8F8] rounded-2xl mt-10 px-8">
                            <div className="py-6 flex items-center justify-between border-b border-dashed border-[#03071233]">
                                <p className="description !text-[#030712]">Seat</p>
                                <p className="description !text-[#030712] !text-right">Price</p>
                            </div>
                            {activeSeats.map((seat, index) => (
                                <div key={seat} className={`py-6 flex items-center justify-between ${index === activeSeats.length - 1 ? 'border-b border-dashed border-[#03071233]' : ''}`}>
                                    <p className="description">{seat}</p>
                                    <p className="description !text-right">{seatPrice}</p>
                                </div>
                            ))}
                            <div className="py-6 flex items-center justify-between">
                                <p className="description !text-[#030712]">Total</p>
                                <p className="description !text-[#030712] !text-right">{totalPrice} BDT</p>
                            </div>
                            <div className="flex items-center">
                                <input
                                    className="w-full bg-white text-black p-4 border rounded-l-xl"
                                    placeholder="Enter Discount price"
                                    type="number"
                                    value={inputValue}
                                    onChange={handleChange}
                                />
                                <button
                                    className={`p-4 bg-primary text-white rounded-r-xl ${!inputValue ? 'opacity-40 cursor-not-allowed' : ''}`}
                                    onClick={applyDiscount}
                                    disabled={!inputValue}
                                >
                                    Apply
                                </button>
                            </div>
                            {/* Grand Total */}
                            <div className="py-6 flex items-center justify-between">
                                <p className="description !text-[#030712]">Grand Total</p>
                                <p className="description !text-[#030712] !text-right">{grandTotal >= 0 ? grandTotal : 0} BDT</p>
                            </div>
                        </div>
                        <div className="login-form mt-4 md:mt-8">
                            <Form className="space-y-4" onFinish={onFinish} form={form}>
                                <Form.Item
                                    label="Name: "
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your Name!' }]}
                                >
                                    <Input placeholder='Input your Name' type="text" className="p-4" />
                                </Form.Item>
                                <Form.Item
                                    label="Phone Number: "
                                    name="phone"
                                    rules={[{ required: true, message: 'Please input your Phone Number!' }]}
                                >
                                    <Input placeholder='Input your Phone Number' type="number" className="p-4" />
                                </Form.Item>
                                <Form.Item
                                    label="Counter Location: "
                                    name="location"
                                    rules={[{ required: true, message: 'Please input your Counter Location!' }]}
                                >
                                    <Input placeholder='Input your Counter Location' type="text" className="p-4" />
                                </Form.Item>
                                <button type="submit" className="button w-full !mt-10 !rounded-md">Continue</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
