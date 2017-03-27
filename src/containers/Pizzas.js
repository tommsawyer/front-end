import React, { Component } from 'react';
import { connect } from 'react-redux';

import CircularProgress from 'material-ui/CircularProgress';

import Filter from '../containers/Filter';
import { applyFilter } from '../reducers/filter';

import ItemList from '../components/ItemsList/';

const style = {
  display: 'inline-block',
  verticalAlign: 'top',
  width: '70%'
}



class Pizzas extends Component {
  renderPreloader() {
    return <CircularProgress size={80} thickness={7}/>
  }

  renderPizzas() {
    return (
      <div >
        <div style={style}>
          <ItemList items={this.props.pizzas}/>
        </div>
        <Filter/>
      </div>
    );
  }

  render() {
    if (this.props.isFetching) {
      return this.renderPreloader();
    }

    return this.renderPizzas();
  }
}

export default connect(
  (state) => ({
    isFetching: state.pizzas.isFetching,
    pizzas: applyFilter(state.pizzas.items, state.filter)
  }),
)(Pizzas);
