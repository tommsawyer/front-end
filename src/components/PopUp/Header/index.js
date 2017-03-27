import React from 'react';
import CloseIcon from 'material-ui/svg-icons/content/clear';

import './styles.css';

export default ({title, onClose}) => {
  return (
    <div className='popup-header'>
      <h3> {title} </h3>
      <CloseIcon onClick={onClose}/>
      
    </div>
  );
}
