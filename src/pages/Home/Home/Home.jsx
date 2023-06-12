import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import PopularClasses from "../PopularClasses/PopularClasses";
import { Helmet } from 'react-helmet-async';
import PopularInstractor from "../PopularInstractor/PopularInstractor";
import About from "../About/About";
import Zoom from "../Zoom/Zoom";


const Home = () => {

    
    return (
        <>
            <Helmet>
                <title>Shine On Summer | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <PopularClasses></PopularClasses>
                <PopularInstractor></PopularInstractor>
                <About></About>
                <Zoom></Zoom>
                <Gallary></Gallary>
            </div>
        </>
    );
};

export default Home;