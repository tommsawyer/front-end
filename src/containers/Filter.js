import React, { Component } from 'react';
import { connect } from 'react-redux';

import AutoComplete from 'material-ui/AutoComplete';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import SortType from '../components/filter/SortType';
import Vendor from '../components/filter/Vendor';
import Prices from '../components/filter/Prices';
import { applyFilter } from '../reducers/filter';

import {
  setMaxPrice,
  setMinPrice,
  setSearchItemName,
  setSortingType,
  setVendor
} from '../actions/filter';

let styles = {
  width     : '300px',
  padding   : '20px',
  marginTop : '20px',
  display   : 'inline-block',
  position: 'fixed'
}

const headerStyle = {
  marginBottom: '0px'
}

class Filter extends Component {
  constructor() {
    super(...arguments);
    this.searchPatternChanged = this.searchPatternChanged.bind(this);
    this.maxPriceChanged = this.maxPriceChanged.bind(this);
    this.minPriceChanged = this.minPriceChanged.bind(this);
    this.sortingTypeChanged = this.sortingTypeChanged.bind(this);
    this.vendorChanged = this.vendorChanged.bind(this);
  }

  vendorChanged(event, key, value) { 
    this.props.setVendor(value);
  }

  sortingTypeChanged(event, sortingType) {
    this.props.setSortingType(sortingType);
  }

  searchPatternChanged(value) {
    this.props.setSearchItemName(value);
  }

  maxPriceChanged(event, value) {
    this.props.setMaxPrice(value);
  }

  minPriceChanged(event, value) {
    this.props.setMinPrice(value);
  }

  render() {
    return (
      <Paper zDepth={2} style={styles}>
        <h3 style={headerStyle}> Фильтрация </h3>

        <AutoComplete
          hintText="Название"
          floatingLabelText="Название"
          dataSource={this.props.names}
          onUpdateInput={this.searchPatternChanged}
        />

        <Vendor
          value={this.props.filter.vendor}
          onChange={this.vendorChanged}
        />

        <Prices
          minPrice={this.props.filter.price.min}
          maxPrice={this.props.filter.price.max}
          onMinPriceChanged={this.minPriceChanged}
          onMaxPriceChanged={this.maxPriceChanged}
        />

        <Divider />

        <SortType checked={this.props.sort} onChange={this.sortingTypeChanged}/>

      </Paper>
    )
  }
}

export default connect(
  state => ({
    filter: state.filter.options,
    sort: state.filter.sort,
    names: applyFilter(state.pizzas.items, state.filter).map(pizza => pizza.name)
  }),
  {
    setMaxPrice,
    setMinPrice,
    setVendor,
    setSearchItemName,
    setSortingType
  }
)(Filter);
