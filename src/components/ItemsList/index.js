import React from 'react';
import Item from '../items/Item';

import './styles.css';

export default ({ items }) => {
  let renderedItems = items.map(item => <Item key={item._id} {...item}/>);

  return (
    <div className='items-container'>
      { renderedItems }
    </div>
  );
}
