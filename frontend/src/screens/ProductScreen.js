import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Listgroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Helmet } from 'react-helmet-async';
import { Store } from '../Store';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Maximum Limit Reached');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
    navigate(`/cart`);
  };

  return loading ? (
    <div> Loading ... </div>
  ) : error ? (
    <div> {error} </div>
  ) : (
    <div>
      <Row>
        <Col md={4}>
          <img
            className="img-large"
            src={product.image}
            alt={product.name}
          ></img>
        </Col>
        <Col md={5}>
          <Listgroup variant="flush">
            <Listgroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
            </Listgroup.Item>
            <Listgroup.Item>
              <h4>${product.price}</h4>
            </Listgroup.Item>
            <Listgroup.Item>
              <p>{product.description}</p>
            </Listgroup.Item>
          </Listgroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Listgroup variant="flush">
                <Listgroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success"> In stock </Badge>
                      ) : (
                        <Badge bg="danger"> out of stock </Badge>
                      )}
                    </Col>
                  </Row>
                </Listgroup.Item>
                {product.countInStock > 0 && (
                  <Listgroup.Item>
                    <div className="d-grid">
                      <Button onClick={addToCartHandler} variant="dark">
                        Add to cart
                      </Button>
                    </div>
                  </Listgroup.Item>
                )}
              </Listgroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
