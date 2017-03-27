import React from 'react';

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import {
  SORT_ALPHABETICAL,
  SORT_BY_PRICE_ASCENDING,
  SORT_BY_PRICE_DESCENDING
} from '../../constants';

const radioStyles = {
  marginTop: '10px'
}

const rootStyles = {
  margin: '20px 0px'
}

export default ({onChange, checked}) => {
  return (
    <div style={rootStyles}>
      <span> Сортировать по: </span>

      <RadioButtonGroup style={radioStyles} defaultSelected={checked} onChange={onChange}>
        <RadioButton
          value={SORT_ALPHABETICAL}
          label="Алфавиту"
        />

        <RadioButton
          value={SORT_BY_PRICE_ASCENDING}
          label="Цене (по возрастанию)"
        />

        <RadioButton
          value={SORT_BY_PRICE_DESCENDING}
          label="Цене (по убыванию)"
        />
      </RadioButtonGroup>
    </div>
  );
}
