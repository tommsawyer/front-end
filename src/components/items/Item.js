import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';

const styles = {
  width: '200px',
  marginTop : '20px'
}

const imageStyles = {
  maxHeight: '100%',
  maxWidth: '100%'
}

export default ({
  image,
  name,
  vendor
}) => {
  return (
    <Card zDepth={2} style={styles}>

      <CardMedia>
        <img style={imageStyles} src={image} alt={name} />
      </CardMedia>

      <CardTitle
        className="item-title" 
        title={name} 
        subtitle={vendor}
      />

    </Card>
  )
}
