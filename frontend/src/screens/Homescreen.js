import { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
//import data from '../data';
import axios from 'axios';
import Vid from '../components/Vid/Vid.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/product.jsx';
import Container from 'react-bootstrap/esm/Container.js';
import { Helmet } from 'react-helmet-async';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });
  //const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      // setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>The Vintage Vault</title>
      </Helmet>
      <Container>
        <Vid></Vid>
      </Container>
      <h1 className="hs">Featured Products </h1>
      <Container>
        <div className="products">
          {loading ? (
            <div> Loading ... </div>
          ) : error ? (
            <div> {error} </div>
          ) : (
            <Row>
              {products.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                  <Product product={product}></Product>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
    </div>
  );
}

export default HomeScreen;
