import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default ({onChange, value}) => {
  return (
    <SelectField
      floatingLabelText='Поставщик'
      onChange={onChange}
      value={value}
      >

     <MenuItem value='Все' primaryText='Все'/>
     <MenuItem value='Саюри' primaryText='Саюри'/>
     <MenuItem value='Фарфор' primaryText='Фарфор'/>
     <MenuItem value='Voodoo-pizza' primaryText='Voodoo-pizza'/>

    </SelectField>
  )
}
