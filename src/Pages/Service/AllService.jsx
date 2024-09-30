/* eslint-disable react/prop-types */

import { useState } from "react";
import { LuBus } from "react-icons/lu";
import { TbArmchair, TbCoinTakaFilled } from "react-icons/tb";
import SectionHeader from "../Shared-file/SectionHeader";
import Service from "../Service/Service";
import BasicHeader from "../Shared-file/BasicHeader";

const AllService = ({ 
  heading = 'Bus No: A30562', 
  description = 'The latest Koyra to Dhaka bus offers comfortable seating, air conditioning, and Wi-Fi, ensuring a smooth ride with daily departures for all travelers!', 
  availableSeat = '45', 
  routes = ['Koyra - Dhaka', 'Dhaka - Khulna', 'Jessore - Dhaka', 'Kushtia - Dhaka', 'Barisal - Dhaka'], 
  departureTime = '9:00 AM', 
  estimateTime = '11 Hours', 
  startingPoint = 'Koyra' 
}) => {
  const priceList = {
    'Koyra - Dhaka': 900,
    'Dhaka - Khulna': 1000,
    'Jessore - Dhaka': 850,
    'Kushtia - Dhaka': 950,
    'Barisal - Dhaka': 920
  };

  const [selectedRoute, setSelectedRoute] = useState(routes[0]);
  const [ticketPrice, setTicketPrice] = useState(priceList[selectedRoute]);

  const handleRouteChange = (e) => {
    const newRoute = e.target.value;
    setSelectedRoute(newRoute);
    setTicketPrice(priceList[newRoute]); 
  };

  return (
    <section >
      <BasicHeader heading='Service'  />
      <div  className='pt-10'><SectionHeader heading={heading} description={description} /></div>
      <div className="section-gap flex flex-col items-center md:flex-row space-x-0 md:space-x-24 bus-container">
        <div className="w-full md:w-[75%]">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex space-x-4 justify-center items-center heading2">
              <LuBus />
              <p>BRTC BUS</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4 justify-center items-center heading2 p-3 rounded-lg !text-[#E67529] bg-[#E675291A]">
              <TbArmchair />
              <p>{availableSeat} Seat Available</p>
            </div>
          </div>
          <div className="bg-[#F7F8F8] rounded-2xl mt-10 px-8">
            <div className="py-6 flex items-center justify-between border-b border-dashed border-[#03071233]">
              <p className="description">Route</p>
              <select
                value={selectedRoute}
                onChange={handleRouteChange}
                className="custom-select !text-[#030712] !text-right p-2 border rounded-lg"
              >
                {routes.map((route, index) => (
                  <option key={index} value={route}>{route}</option>
                ))}
              </select>
            </div>
            <div className="py-6 flex items-center justify-between border-b border-dashed border-[#03071233]">
              <p className="description">Departure Time</p>
              <p className="description !text-[#030712] !text-right">{departureTime}</p>
            </div>
            <div className="py-6 flex items-center justify-between flex-col md:flex-row">
              <p className="description !text-center bg-[#0307120D] w-full md:w-1/4 px-3 py-4 rounded-xl">
                Starting Point - {startingPoint}
              </p>
              <p className="description mt-6 md:mt-0 !text-center bg-[#0307120D] w-full md:w-1/4 px-3 py-4 rounded-xl">
                Est. Time {estimateTime}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[25%] border-none md:border-dashed border-primary border-l-[3px] py-0 md:py-28">
          <div className="text-[#E67529] bg-[#E675291A] md:bg-white mt-6 md:mt-0 rounded-2xl py-5 md:py-0">
            <TbCoinTakaFilled className="text-primary text-5xl text-center mx-auto" />
            <p className="text-center mt-3 heading2 !text-primary md:!text-black">
              {ticketPrice} Taka
            </p>
            <p className="text-center mt-2 !text-primary md:!text-black">
              Per Ticket
            </p>
          </div>
        </div>
      </div>
      <Service seatPrice ={ticketPrice} />
    </section>
  );
};



export default AllService;
