import React from 'react';

const FaceRecognition = ( {image_detected} ) => {
    return(
        <div className='flex'>
            <div className='center w-25 pa3 mr2 h4'>
                <img src={image_detected} alt=''/>
            </div>
        </div>
    );
}
export default FaceRecognition;