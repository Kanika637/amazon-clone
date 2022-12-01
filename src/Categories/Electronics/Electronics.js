import React from 'react'
import Product from '../../Product'
import "./Electronics.css"

function Electronics() {
  const products=[{
title:"boAt Airdopes 121v2 True Wireless Earbuds with Upto 14 Hours Playback, 8MM Drivers, Battery Indicators,",
price:999,
image:"https://m.media-amazon.com/images/I/510+wjzq-vL._AC_UL480_QL65_.jpg",
rating:4,
reviews:155214,
  },
  {
    title:"Fire-Boltt, Noise, Boat & more",
    price:999,
    image:"https://m.media-amazon.com/images/I/41qqmdUWnhL._AC_UF226,226_FMjpg_.jpg",
    rating:4,
    reviews:1648,
  },
  {
    title:"Redgear A-15 Wired Gaming Mouse with",
    price:389,
    image:"https://images-eu.ssl-images-amazon.com/images/I/31luFfya0kL._AC_SX184_.jpg",
    rating:5,
    reviews:13836,
  },
  {
    title:"Callas Multipurpose Foldable Laptop Table with Cup Holder | Drawer | Mac Holder | Table Holder Study Table, ",
    price:1350,
    image:"https://m.media-amazon.com/images/I/61GQUtqKIpS._SX355_.jpg",
    rating:5,
    reviews:18663,
  },
  {
    title:"HD FD236W 32GB",
    price:328,
    image:"https://images-eu.ssl-images-amazon.com/images/I/61aflcZgumL._AC._SR360,460.jpg",
    rating:4,
    reviews:57344,
  },
  {
    title:"SanDisk Ultra microSD UHS-I Card 64GB",
    price:599,
    image:"https://images-eu.ssl-images-amazon.com/images/I/7180ZAZmERL._AC._SR360,460.jpg",
    rating:5,
    reviews:58638,
  },
  {
    title:"1.9' Inch Screen|Amoled Smartwatche",
    price:4999,
    image:"https://m.media-amazon.com/images/I/41LW7In+1OL._AC_UF226,226_FMjpg_.jpg",
    rating:4,
    reviews:2408,
  },
  {
    title:"Trendy Bands and straps for your Smartwatch",
    price:359,
    image:"https://m.media-amazon.com/images/I/41bh654uCTL._AC_UF226,226_FMjpg_.jpg",
    rating:4,
    reviews:1360,
  },
  {
    title:"boAt Immortal IM1000D Dual Channel Wired O",
    price:1874,
    image:"https://images-eu.ssl-images-amazon.com/images/I/411zO-6GqjS._AC_SX184_.jpg",
    rating:4,
    reviews:2554 ,
  },
  {
    title:"Ant Esports KM500W Gaming Backlit Keyboard",
    price:1149,
    image:"https://images-eu.ssl-images-amazon.com/images/I/51vN1agHImL._AC_SX184_.jpg",
    rating:4,
    reviews:3854 ,
  },

  {
    title:"boAt Bassheads 242 in Ear Wired Earphones",
    price:499,
    image:"https://images-eu.ssl-images-amazon.com/images/I/31fu8Z2PwZL._AC_SX184_.jpg",
    rating:4,
    reviews:4891,
  },
  {
    title:"Apple Watch Series 3 (GPS, 38mm)",
    price:20900,
    image:"https://m.media-amazon.com/images/I/41-LTj7YbVL.jpg",
    rating:5,
    reviews:4156, 
  },
  {
    title:"Wacom One by CTL-472/K0-CX Digital Drawing Graphics Pen Tablet (Red & Black) Small (6-inch x 3.5-inch)(15x8cm)",
    price:2890,
    image:"https://m.media-amazon.com/images/I/61tGu66MHoL._SY450_.jpg",
    rating:5,
    reviews:13004,
  },
]
  return (
    <>
    <h1 className='electronic-category-heading'>Electronics</h1>
    
<div className='items-container'>
 {products.map((product,index)=>{
   return(
  <Product title={product.title} 
  price={product.price} 
  image={product.image} 
  rating={product.rating} 
  reviews={product.reviews}
  key={index}  />
);})}
</div>
    </>
  )
}

export default Electronics