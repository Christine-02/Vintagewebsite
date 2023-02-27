//import logo from './logo.svg';
import './App.css';
//import data from './data';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Navbar className="h" variant="light">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>THE VINTAGE VAULT</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
      </div>
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
