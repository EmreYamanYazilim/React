import Navi from './Components/Navi';
import CategoryList from './Components/CategoryList';
import ProductList from './Components/ProductList';
import { Container, Row,Col } from "reactstrap";


function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
          <CategoryList />
          </Col>
          <Col xs="9">
          <ProductList />
          </Col>
        </Row>
      </Container>

    </div>
  )

}

export default App;
