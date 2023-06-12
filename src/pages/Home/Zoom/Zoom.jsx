import zoom from '../../../images/swimming1.jpg'

import ReactImageZoom from 'react-image-zoom';


const Zoom = () => {

    const imageProps = {
        width: 4000,
        height: 250,
        zoomWidth: 500,
        img: `${zoom}`,
      };
    return (
        <div className='w-50'>
            <ReactImageZoom {...imageProps}/>
        </div>
    );
};

export default Zoom;