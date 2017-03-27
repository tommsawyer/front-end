import React from 'react';
import Slider from 'material-ui/Slider';

const sliderStyles = {
  marginTop: '10px',
  marginBottom: '10px'
}

const rootStyles = {
  margin: '20px 0px'
}

export default ({
  minPrice,
  maxPrice,
  onMinPriceChanged,
  onMaxPriceChanged
}) => {
  return (
    <div style={rootStyles}>
      <span> Максимальная цена ({maxPrice}) </span>
      <Slider sliderStyle={sliderStyles}
        defaultValue={maxPrice} step={1}
        onChange={onMaxPriceChanged}
        max={1500}
      />

      <span> Минимальная цена ({minPrice}) </span>
      <Slider sliderStyle={sliderStyles}
        defaultValue={minPrice}
        step={1}
        onChange={onMinPriceChanged}
        max={1500}
      />
    </div>
  );
}
