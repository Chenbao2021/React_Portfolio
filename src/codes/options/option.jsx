import React from 'react';
import './option.css';

function Option({name, image, path}) {
  return (
    <div className='activityContainer' >
        <div className='activityLogo' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}> 
        </div>
        <h3 className='activityText'>{name}</h3>
    </div>
  )
}

export default Option