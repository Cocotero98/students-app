import React from 'react';
import '../css/testimony.css';

function Testimony(props){
  return(
    <div className='testimony'>
      <img className='img-testimony' src={require(`../images/${props.image}-Testimony.png`)} alt={props.name} />
      <div className='text-wrapper'>
        <p className='testimony-name'><strong>{props.name}</strong> in {props.country}</p>
        <p className='testimony-title'>{props.title} at <strong>{props.company}</strong></p>
        <p className='testimony-text'>"{props.testimony}"</p>
      </div>
    </div>
  )
}

export default Testimony;