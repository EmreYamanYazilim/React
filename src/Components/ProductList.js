import React, { Component } from 'react'

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h2>
            Product Listesi
        </h2>
        <h3>{this.props.info.titleDeneme}</h3>
        <h5>{this.props.info.baskaBirsey}</h5>
      </div>
    )
  }
}
