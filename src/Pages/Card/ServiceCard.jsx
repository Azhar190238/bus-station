import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ img, startTime = "11:00 AM", availableSeat, _id }) => {
    const [remainingTime, setRemainingTime] = useState('');

    useEffect(() => {
        const calculateRemainingTime = () => {
            if (!startTime) {
                setRemainingTime('Invalid Start Time');
                return;
            }

            const currentTime = new Date();
            // Parse the startTime format "hh:mm AM/PM"
            const [time, modifier] = startTime.split(' ');
            let [startHours, startMinutes] = time.split(':').map(Number);

            // Convert to 24-hour format
            if (modifier === 'PM' && startHours < 12) {
                startHours += 12;
            } else if (modifier === 'AM' && startHours === 12) {
                startHours = 0;
            }

            const startDate = new Date();
            startDate.setHours(startHours);
            startDate.setMinutes(startMinutes);
            startDate.setSeconds(0);

            // If the start time has already passed today, set it for tomorrow
            if (currentTime > startDate) {
                startDate.setDate(startDate.getDate() + 1);
            }

            const diff = startDate - currentTime;
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

            setRemainingTime(`${hours} hours and ${minutes} minutes`);
        };

        // Calculate the remaining time initially
        calculateRemainingTime();

        // Set an interval to update the remaining time every minute
        const interval = setInterval(calculateRemainingTime, 60000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [startTime]);

    return (
        <div className='shadow-xl rounded-md w-full'>
            <img src={img} className='rounded-md' alt="BRTC Image 1" />
            <div className='my-8 space-y-6 px-6'>
                <div className='bg-[#0307120D] rounded-xl'>
                    <p className='card-description py-4 text-center mx-auto'>Rest Time - {remainingTime}</p>
                </div>
                <div className='bg-[#0307120D] rounded-xl'>
                    <p className='card-description py-4 text-center mx-auto'>Available Seat: {availableSeat}</p>
                </div>
                <Link to={`/service/${_id}`}>
                    <button className='button w-full'>Buy Ticket</button>
                </Link>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    img: PropTypes.string.isRequired,
    startTime: PropTypes.string,
    availableSeat: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired, // Ensure _id is required
};

export default ServiceCard;
