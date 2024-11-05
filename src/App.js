import React, { Component } from 'react';

import CategoryList from './Components/CategoryList';
import ProductList from './Components/ProductList';
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state= {
        currentCategory: "", products:[]
  }

  componentDidMount(){
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id)
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products"
    if (categoryId) {
      url+="?categoryId="+categoryId;
    }
    fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ products: data }))
}

  render() {
    let productInfo = { titleDeneme: "Product deneme1111", baskaBirsey: "baskaaa birseyyy" }
    let CategoryInfo = { categoryDeneme: "Category baslık" }
    return (
      <div>
        <Container>
          <Navi/>
          <Row>
            <Col xs="3">
              <CategoryList 
              currentCategory={this.state.currentCategory} 
              changeCategoryProps={this.changeCategory} 
              info={CategoryInfo} />
            </Col>
            <Col xs="9">
            <Switch>
              <Route
              exect path="/"
              render = {props=> (
                <ProductList 
                {...props}
                products={this.state.products}
                currentCategory={this.state.currentCategory} 
                info={productInfo} />
              )        
              }>                
              </Route>
            </Switch>
              <ProductList 
              products={this.state.products}
              currentCategory={this.state.currentCategory} 
              info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>)
  }
}



