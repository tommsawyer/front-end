import React from 'react';

import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import { blue300 } from 'material-ui/styles/colors'

const appPanelStyles = {
  width: '100%',
  height: '120px',
  padding: '20px 50px',
  backgroundColor: blue300
}

const tabsStyles = {
  width: '70%',
  top: '24px',
  position: 'relative'
}

const backgroundColor = {
  backgroundColor: blue300
}

export default ({title}) => {
  return (
    <Paper zDepth={2} style={appPanelStyles}>
      <h2 className='site-header'> {title} </h2>
      <Tabs style={ tabsStyles }>
        <Tab style={backgroundColor} label="some text here"/>
        <Tab label="some text here"/>
        <Tab label="some text here"/>
        <Tab label="some text here"/>
      </Tabs>
    </Paper>

  )
}
