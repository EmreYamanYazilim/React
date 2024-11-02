import Navi from './Components/Navi';
import CategoryList from './Components/CategoryList';
import ProductList from './Components/ProductList';
import { Container, Row,Col } from "reactstrap";

let productInfo = {titleDeneme:"Product deneme1111",baskaBirsey:"baskaaa birseyyy"}
let CategoryInfo = {categoryDeneme : "Category baslık"}
function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
          <CategoryList info = {CategoryInfo} />
          </Col>
          <Col xs="9">
          <ProductList info = {productInfo} />
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default App;
