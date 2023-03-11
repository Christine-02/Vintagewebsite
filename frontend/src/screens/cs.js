import { useContext } from 'react';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import { Store } from '../Store';

function CartScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);

  return (
    <div>
      <ListGroup>
        {state.cart.cartItems.map((item) => (
          <ListGroup.Item key={item._id}>
            <h1>{item.name}</h1>
            <img className="imgsml" src={item.image} alt="shirt"></img>
            <h6> {item.quantity} </h6>
          </ListGroup.Item>
        ))}
        {console.log(state.cart.cartItems)}
      </ListGroup>
    </div>
  );
}
