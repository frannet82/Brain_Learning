import React from 'react';

const ImageLinkForm = ( {onInputChange, onButtonSubmit} ) => {
    return(
        <div>
          <p className='f3 b white'>
          {'This Magic Brain will detect faces in your pictures. Git it a try.'}
          </p>
          <div>
              <input  className='tc f4 pa2 w-30 center' type='text' onChange={onInputChange}/>
              <button 
              className='tc w-30 grow f4-ns link ph4 pv2 ma2 white bg-light-purple'
              onClick={onButtonSubmit}>
              Detect</button>
          </div>
        </div>
    );
}
export default ImageLinkForm;
