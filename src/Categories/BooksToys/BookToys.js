import React from 'react';
import Product from '../../components/product/Product';
import { useStateValue } from '../../StateProvider';
// import Product from '../../Product';
import './BookToys.css';

function BookToys(id, title, price, image, rating, reviews) {
  const products = [
    {
      title:
        'Storio Kids Toys LCD Writing Tablet 8.5Inch E-Note Pad Best Birthday Gift for Girls Boys',
      price: 225,
      image:
        'https://m.media-amazon.com/images/I/61Pg1H7U15L._AC_UL480_FMwebp_QL65_.jpg',
      rating: 4,
      reviews: 4534,
    },
    {
      title:
        'esnipe mart® 20 activities & games fun laptop notebook computer toy for kids-Blue',
      price: 1299,
      image:
        'https://m.media-amazon.com/images/I/7188KDb7UYL._AC_UL480_FMwebp_QL65_.jpg',
      rating: 4,
      reviews: 9476,
    },
    {
      title:
        'ToyTastic Pack of 6 Mini Metal Car for Kids, Small Mini Racing Cars Suitable',
      price: 539,
      image:
        'https://m.media-amazon.com/images/I/5105UNu17nL._AC_UL480_FMwebp_QL65_.jpg',
      rating: 4,
      reviews: 323,
    },
    {
      title: 'You Can',
      price: 98,
      image:
        'https://m.media-amazon.com/images/I/813uPMOnskL._AC_UY327_FMwebp_QL65_.jpg',
      rating: 5,
      reviews: 1749,
    },
    {
      title:
        'Tales of Mystery and Horror for Kids : illustrated Abridged Children Classics English Novel with Rev',
      price: 149,
      image:
        'https://m.media-amazon.com/images/I/81jJos1UCaL._AC_UY327_FMwebp_QL65_.jpg',
      rating: 4,
      reviews: 27,
    },
    {
      title:
        'Toyshine Foosball, Mini Football, 4 Rods, Indoor Sport Table Soccer Game for Adults and Kids',
      price: 1299,
      image:
        'https://m.media-amazon.com/images/I/71TM-qejV3L._AC_UL480_FMwebp_QL65_.jpg',
      rating: 4,
      reviews: 2234,
    },
    {
      title:
        'The Jungle Book: Illustrated Abridged Children Classics English Novel With Review Questions (Hardback)',
      price: 165,
      image:
        'https://m.media-amazon.com/images/I/81I6v6bGt1L._AC_UY327_FMwebp_QL65_.jpg',
      rating: 5,
      reviews: 96,
    },
    {
      title:
        'The Adventures of Robin Hood: Illustrated Abridged Children Classics English Novel With Review Questions (Hardback)',
      price: 148,
      image:
        'https://m.media-amazon.com/images/I/812IvcFEroL._AC_UY327_QL65_.jpg',
      rating: 5,
      reviews: 61,
    },
    {
      title: 'DO EPIC SHIT',
      price: 163,
      image:
        'https://m.media-amazon.com/images/I/61kRkfsIMUL._AC_UY327_FMwebp_QL65_.jpg',
      rating: 5,
      reviews: 6914,
    },
    {
      title: 'Jaspo Power Kids 26 inches Skateboard for Beginners Boys & Girls',
      price: 962,
      image:
        'https://m.media-amazon.com/images/I/81ogbrdtaQL._AC_UL480_QL65_.jpg',
      rating: 4,
      reviews: 635,
    },
    {
      title:
        'Noise Pulse Go Buzz Smart Watch with Smart Call & Advanced Bluetooth Tech',
      price: 128,
      image:
        'https://m.media-amazon.com/images/I/51uB7i1cw+L._AC_UL480_QL65_.jpg',
      rating: 5,
      reviews: 8266,
    },
    {
      title:
        'Do Epic Shit + The Subtle Art of Not Giving a Fuck Set of 2 Books with free Customize Bookmark',
      price: 265,
      image:
        'https://m.media-amazon.com/images/I/61U9xUcZy3L._AC_UY327_FMwebp_QL65_.jpg',
      rating: 5,
      reviews: 18,
    },
    {
      title:
        'Toyshine Wooden Memory Match Stick Chess Game Set, Funny Block Board Game Parent-Child Interaction',
      price: 579,
      image:
        'https://m.media-amazon.com/images/I/41PECrMEhOL._AC_UL480_QL65_.jpg',
      rating: 4,
      review: 92,
    },
  ];

  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        reviews: reviews,
      },
    });
  };
  return (
    <>
      <h1 className="toys-books-heading">Books & Toys</h1>

      <div className="items-container">
        {products.map((product) => {
          return (
            <Product
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
              reviews={product.reviews}
            />
          );
        })}
      </div>
    </>
  );
}

export default BookToys;
