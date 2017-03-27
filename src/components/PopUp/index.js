import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import Header from './Header/';

import './styles.css';

export default ({children, title}) => {
  return (
    <Paper zDepth={5} className='popup'>
      <Header title={title} onClose={() => console.log('close')}/>
      <Divider/>
      {children}
    </Paper>
  );
}
