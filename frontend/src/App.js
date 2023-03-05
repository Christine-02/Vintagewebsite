//import logo from './logo.svg';
import './App.css';
//import data from './data';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div>
        <header>
          <Navbar className="h" variant="light">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>THE VINTAGE VAULT</Navbar.Brand>
              </LinkContainer>
              <Nav className="ml-auto">
                <Link to="/cart" className="nav-link">
                  <h5>
                    🛒
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="dark">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </h5>
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <div className="container1">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </div>
        </main>
      </div>
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
