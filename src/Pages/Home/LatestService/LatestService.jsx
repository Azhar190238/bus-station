import ServiceCard from '../../Card/ServiceCard';
import card1 from '../../../assets/service/card1.png';
import card2 from '../../../assets/service/card2.png';
import SectionHeader from '../../Shared-file/SectionHeader';
const serviceData = [
    {
        _id: 1,
        restTime: '11 Hours',
        availableSeat: 30,
        image: card1
    },
    {
        _id: 2,
        restTime: '6 Hours',
        availableSeat: 40,
        image: card2
    },

];

const LatestService = () => {
    return (
        <section className='bus-container'>
            <SectionHeader
                heading="BRTC Bus Service"
                description="BRTC Paribahan delivers reliable bus services with a focus on comfort and safety, ensuring seamless travel to your destinations"
            />
            <div className='section-gap'>
                {serviceData.length == 2 ?
                    <div className='flex flex-col md:flex-row w-full gap-10'>
                        {
                            serviceData.map((service) => (
                                <ServiceCard key={service._id} restTime={service.restTime} availableSeat={service.availableSeat} img={service.image} />
                            ))
                        }
                    </div> :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-20 w-full gap-8'>
                        {
                            serviceData.map((service) => (
                                <ServiceCard key={service._id} restTime={service.restTime} availableSeat={service.availableSeat} img={service.image} />
                            ))
                        }
                    </div>
                }
            </div>

        </section>
    );
};

export default LatestService;
