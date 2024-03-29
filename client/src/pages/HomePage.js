import React from 'react';
import Layout from '../components/Layout/Layout';
// import { useAuth } from '../context/auth';
import Carousel from 'react-bootstrap/Carousel';
import './HomePage.css';
import img1 from '../../src/images/img1.jpg';
import img2 from '../../src/images/img2.jpg';
import img3 from '../../src/images/img3.jpg';

const HomePage = () => {
  // const [auth, setAuth] = useAuth();
  return (
    <Layout>
      {/* <h1>HomePage</h1> */}
      {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: '70vh' }}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '70vh' }}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '70vh' }}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Layout>
  );
};

export default HomePage;
