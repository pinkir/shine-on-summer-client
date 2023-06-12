import zoom from '../../../images/sicon.png'

import { motion, useViewportScroll, useTransform } from 'framer-motion';


const Zoom = () => {

    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);


    return (
        <div style={{ height: '200vh' }}>
            <div style={{ height: '100vh' }} />
            <div
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <motion.img
                    src={zoom}
                    alt="Moving Image"
                    style={{
                        y: yRange,
                    }}
                />
            </div>
            <div style={{ height: '100vh' }} />
        </div>
    );
};

export default Zoom;