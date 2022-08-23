import React from 'react'
import "./Home.css";
import Product  from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                 <img className="home__image" 
                 src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"/>
                 <div className="home__row">
                     <Product title="2021 Apple 10.2-inch iPad (Wi-Fi, 64GB)- Space Gray"
                     price={95000}
                     image="https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL480_QL65_.jpg"
                     rating={3}
                     reviews={910}/>
                     <Product title="Amazon Basics 48 Pack AA High-Performance Alkaline Batteries, 10-year Shelf Life,Easy to Open Value Pack"
                     price={1038}
                     image="https://m.media-amazon.com/images/I/71IdKRlm8+L._AC_UL480_QL65_.jpg"
                     rating={4}
                     reviews={567}/>
                     
           
                 </div>
                 <div className="home__row">
                 <Product title="Hanes Women's EcoSmart Crewneck Sweatshirt"
                 price={1500}
                 image="https://m.media-amazon.com/images/I/91JTWDmaK3L._AC_UL480_FMwebp_QL65_.jpg"
                 rating={5}
                 reviews={239}/>
                 <Product title="REVETRO Womens V Neck Long Sleeve Henley Shirts Button Down"
                 price={2000}
                 image="https://m.media-amazon.com/images/I/71kUh2-TdBL._AC_UL480_FMwebp_QL65_.jpg"
                 rating={4}
                 reviews={891}/>
                 <Product title="Amazon Essentials Women's Studio Terry Relaxed-Fit"
                 price={1700}
                 image="https://m.media-amazon.com/images/I/71d9baOAapL._AC_UX342_.jpg"
                 rating={5}
                 reviews={114}/>
                     </div>
                     <div className="home__row">
                     <Product title="Cozy Line Home Fashions Ryleigh Floral Print Real Plaid Patchwork, 100% Cotton Reversible Coverlet"
                     price={3000}
                     image="https://m.media-amazon.com/images/I/81CF2AiJ8JL._AC_UL480_FMwebp_QL65_.jpg"
                     rating={4}
                     reviews={42}/>
                     </div>
            </div>
            
        </div>
    )
}

export default Home
