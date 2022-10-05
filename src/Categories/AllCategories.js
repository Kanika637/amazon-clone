import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./AllCategories.css"

function AllCategories() {
  return (
    <>
      <div class="shop-by-category-heading">
        <h1>Shop By Category</h1>
      </div>

      <Row className='rows'>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/G/31/media/Jupiter_2022/toys._SS420_QL85_.jpg" />
            <Card.Body>
              <Card.Title>Books & Toys</Card.Title>
              <Card.Text>
                Upto 70% off
                Books, Toys, Gromming, and More.
              </Card.Text>
              <Link to="/books-toys">

                <Button variant="primary">Shop Now</Button>
              </Link>

            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/G/31/img22/Fashion/Event/Jupiter22/Eventpage/Phase2/Stealdeals/Women._SS400_QL85_.png" />
            <Card.Body>
              <Card.Title>Fashion & Beauty</Card.Title>
              <Card.Text>
                50-80-%  off
                Fashion and Beauty.Mens and Womens Wear
              </Card.Text>
              <Link to="/fashion-beauty">

                <Button variant="primary">Shop Now</Button>
              </Link>

            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/G/31/img22/CEPC/Jup22/ATF-Cat_shovlers/Unrec/1_Desktopshoveler_400x400._CB610725966_.gif" />
            <Card.Body>
              <Card.Title>Electronics</Card.Title>
              <Card.Text>
                Upto 75% off
                Electronics and Accesories.
              </Card.Text>
              <Link to="/electronics">

                <Button variant="primary">Shop Now</Button>
              </Link>

            </Card.Body>
          </Card>
        </Col>
      </Row>

    </>
  )
}

export default AllCategories