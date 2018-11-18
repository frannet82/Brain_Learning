import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ image_detected, box }) => {
    return (
      <div className='center ma'>
        <div className='absolute mt2'>
          <img id='inputimage' src={image_detected} width='500px' heigh='auto' alt=''/>
          <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
        <div className='absolute mt2 pa7'>
        <br/>
        </div>
      </div>
    );
  }
  
export default FaceRecognition;