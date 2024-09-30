

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ img, restTime, availableSeat }) => {
    return (
        <div className='shadow-xl rounded-md w-full'>
            <img src={img} className='rounded-md' alt="BRTC Image 1" />
            <div className='my-8 space-y-6 px-6'>
                <div className='bg-[#0307120D] rounded-xl'>
                    <p className='card-description py-4 text-center mx-auto'>Rest Time - {restTime}</p>
                </div>
                <div className='bg-[#0307120D] rounded-xl '>
                    <p className='card-description py-4 text-center mx-auto'>Available Seat: {availableSeat}</p>
                </div>
                <button className='button w-full'>Buy Ticket</button>
            </div>
        </div>
    );
};

export default ServiceCard;