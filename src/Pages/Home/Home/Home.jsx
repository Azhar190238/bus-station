import LatestBus from "../LatestBus/LatestBus";
import LatestService from "../LatestService/LatestService";
import AmenitiesCard from "./Aminities";
import Banner from "./Banner";
import Statistics from "./Statistics";

const Home = () => {

    return (
        <section>
             <Banner/>
             <Statistics/>
             <AmenitiesCard/>
            <LatestBus/>
            <LatestService/>
        </section>
    );
};

export default Home;