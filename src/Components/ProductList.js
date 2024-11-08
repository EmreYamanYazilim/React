import React, { Component } from 'react'
import { Table,Button } from "reactstrap";

export default class ProductList extends Component {
addToCard = (product) => {
  alert(product.productName)
}

  render() {
    return (
      <div>
        <h2>
          Product Listesi / {this.props.currentCategory}
        </h2>
        <h3>{this.props.info.titleDeneme}</h3>
        <Table>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                productName
              </th>
              <th>
                quantity Per Unit
              </th>
              <th>
                unit Price
              </th>
              <th>
                units In Stock
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">
                  {product.id}
                </th>
                <td>
                  {product.productName}
                </td>
                <td>
                  {product.quantityPerUnit}
                </td>
                <td>
                  {product.unitPrice}
                </td>
                <td>
                  {product.unitsInStock}
                </td>
                <td>
                <Button 
                onClick={() => this.addToCard(product)}
                color="info">
                  Add
                </Button> 
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      </div>
    )
  }
}
