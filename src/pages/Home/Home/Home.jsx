import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import PopularClasses from "../PopularClasses/PopularClasses";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Shine On Summer | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <PopularClasses></PopularClasses>
                <Gallary></Gallary>
            </div>
        </>
    );
};

export default Home;