import gallary1 from '../../../images/gallary1.jpg'
import gallary2 from '../../../images/gallary2.jpg'
import gallary3 from '../../../images/gallary3.jpg'
import gallary4 from '../../../images/gallary4.jpg'
import gallary5 from '../../../images/gallary5.jpg'
import gallary6 from '../../../images/gallary6.jpg'
import gallary7 from '../../../images/gallary7.jpg'
import gallary8 from '../../../images/gallary8.jpg'
import gallary11 from '../../../images/gallary11.jpg'

const Gallary = () => {
    return (
       
            <div className='max-w-7xl mx-auto'>
                <h3 className='text-center text-sky-600 text-4xl font-bold p-5 mt-40'>Photo Gallery</h3>
                <p className='text-center text-stone-400'>A group of joyful and enthusiastic students immerse themselves in the refreshing waters, <br /> radiating happiness with every stroke. Their smiles reflect their love for swimming as they <br /> embrace the waters embrace, enjoying the freedom, fun, and camaraderie that comes with their aquatic adventures. <br /> Their laughter echoes through the pool, embodying pure swimming bliss.</p>
                <div className='grid grid-cols-3 gap-2 bg-slate-100 p-5' >

                    <div data-aos="fade-up" className='h-3 mb-2'>
                        <img src={gallary11} alt="" />
                    </div>
                    <div className='col-span-2' data-aos="fade-left">
                        <img src={gallary4} alt="" />
                    </div>
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img src={gallary5} alt="" />
                    </div>
                    <div data-aos="fade-up">
                        <img src={gallary6} alt="" />
                    </div>
                    <div data-aos="fade-left">
                        <img src={gallary7} alt="" />
                    </div>
                    <div data-aos="fade-up" className='col-span-2'>
                        <img src={gallary3} alt="" />
                    </div>
                    <div className='h-full' data-aos="fade-left">
                        <img className='h-full' src={gallary8} alt="" />
                    </div>


                </div>
            </div>

      



    );
};

export default Gallary;