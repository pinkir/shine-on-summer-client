import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import swimming from '../../../images/swimming1.jpg'
import swimming3 from '../../../images/swmming3.jpg'

import { Parallax, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide className="text-white p-8 pt-44 font-bold" style={{ backgroundImage: `url(${swimming})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '600px' }}>

                    <div className="subtitle text-4xl pb-4" data-swiper-parallax="-200">
                        Welcome <br /> to <br /> Shine<span className="text-amber-300">On</span>Summer
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Make a Splash this Summer! <br /> Join Our Swimming School for Fun and Fitness in the Sun! <br />

                            Dive into a refreshing and exciting summer experience at our swimming school. <br /> Whether you're a beginner or an experienced swimmer, our professional instructors <br /> are ready to guide you through a summer of aquatic adventure.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="text-white p-8 pt-44 font-bold" style={{
                    
                        backgroundImage: `url(${swimming3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',  height: '600px'
                }}>

                    <div className="subtitle text-4xl pb-4" data-swiper-parallax="-200">
                        Welcome <br /> to <br /> Shine<span className="text-amber-300">On</span>Summer
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Make a Splash this Summer! <br /> Join Our Swimming School for Fun and Fitness in the Sun! <br />

                            Dive into a refreshing and exciting summer experience at our swimming school. <br /> Whether you are a beginner or an experienced swimmer, our professional instructors <br /> are ready to guide you through a summer of aquatic adventure.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;