import React,{Component} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button,Container,Row,Col
} from 'reactstrap';
import axios from 'axios';
import {Item} from '../context/createItem.js';

class Products extends Component {
    constructor(){
        super();
        this.state = {
          products : []
        }
    }
    componentDidMount(){
      axios({
        method : 'GET',
        url : 'http://localhost:8080/products/',
        data : null
      }).then(res => {
        this.setState({
          products : res.data
        });
      }).catch(err => {
        console.log(err);
      });
    }
    render(){
        const {products} = this.state;
        return (
            <Container>
                <h2 className='pro'>Products</h2>
                <Row>
                    {products.map((product) => (
                      <Col sm={4}>
                        <Card>
                            <CardImg top width="100%" src={product.imageUrl} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">{product.name}</CardTitle>
                                <CardText>{product.description}</CardText>
                                <Item.Consumer>
                                  {({addToCard}) => <Button onClick={() => addToCard(product)}>Add to card</Button>}
                                </Item.Consumer>
                            </CardBody>
                        </Card>
                      </Col> 
                    ))}
                </Row>
            </Container>
        
        );
    }
}
export default Products;