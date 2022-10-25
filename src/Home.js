import React from "react";
import "./Home.css";
import Product from "./Product";
import Slider from "./Carousel";

const Home = () => {
    let data = [
        {
            id: 1,
            title: "2021 Apple 10.2-inch iPad (Wi-Fi, 64GB)- Space Gray",
            price: 95000,
            image: "https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL480_QL65_.jpg",
            rating: 3,
            reviews: 910,
        },

        {
            id: 2,
            title: "Amazon Basics 48 Pack AA High-Performance Alkaline Batteries, 10-year Shelf Life,Easy to Open Value Pack",
            price: 1038,
            image: "https://m.media-amazon.com/images/I/71IdKRlm8+L._AC_UL480_QL65_.jpg",
            rating: 4,
            reviews: 567,
        },

        {
            id: 3,
            title: "Apple Watch SE (GPS + Cellular, 40mm) - Space Grey Aluminium Case with Midnight Sport Band - Regular",
            price: 269,
            image: "https://m.media-amazon.com/images/I/61dkl5iDzsL._UX679_.jpg",
            rating: 4,
            reviews: 269,
        },

        {
            id: 4,
            title: "Hanes Women's EcoSmart Crewneck Sweatshirt",
            price: 1500,
            image: "https://m.media-amazon.com/images/I/91JTWDmaK3L._AC_UL480_FMwebp_QL65_.jpg",
            rating: 5,
            reviews: 239,
        },

        {
            id: 5,
            title: "REVETRO Womens V Neck Long Sleeve Henley Shirts Button Down",
            price: 2000,
            image: "https://m.media-amazon.com/images/I/71kUh2-TdBL._AC_UL480_FMwebp_QL65_.jpg",
            rating: 4,
            reviews: 891,
        },

        {
            id: 6,
            title: "Amazon Essentials Women's Studio Terry Relaxed-Fit",
            price: 1700,
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg",
            rating: 5,
            reviews: 114,
        },

        {
            id: 7,
            title: "Cozy Line Home Fashions Ryleigh Floral Print Real Plaid Patchwork, 100% Cotton Reversible Coverlet",
            price: 3000,
            image: "https://m.media-amazon.com/images/I/81CF2AiJ8JL._AC_UL480_FMwebp_QL65_.jpg",
            rating: 4,
            reviews: 42,
        },

        {
            id: 8,
            title: "DRUNKEN Men and Women Baseball Cap for Hunting, Fishing, Outdoor Activities Freesize",
            price: 209,
            image: "https://m.media-amazon.com/images/I/71pF+7RS-QL._SX679_.jpg",
            rating: 4,
            reviews: 600,
        },
        {
            id: 9,
            title: "crocs unisex-adult Bayaband 10 UK Slate Grey/Lime Punch Clog 207018-0GX",
            price: 1547,
            image: "https://m.media-amazon.com/images/I/71-IRy6dV0L._AC_UL640_FMwebp_QL65_.jpg",
            rating: 3,
            reviews: 45,
        },
        {
            id: 10,
            title: "Deniklo Men's Polyester Round Neck Sweatshirt (DKAW11-3XL_Green_3XL_Green_3XL) ",
            price: 479,
            image: "https://m.media-amazon.com/images/I/81gSKxKWAcL._AC_UL640_FMwebp_QL65_.jpg",
            rating: 3,
            reviews: 62,
        },
        {
            id: 11,
            title: "Noise Pulse Go Buzz Smart Watch with Smart Call & Advanced Bluetooth Tech",
            price: 1799,
            image: "https://m.media-amazon.com/images/I/61akt30bJsL._SX679_.jpg",
            rating: 4,
            reviews: 660,
        },
        {
            id: 12,
            title: "New Designer Top And Bottom Set For Women Orange",
            price: 399,
            image: "https://m.media-amazon.com/images/I/41tUFl54V1L.jpg",
            rating: 3,
            reviews: 90,
        },
        {
            id: 13,
            title: "Wedani Women's Casual Puff Sleeves Ruffled Collor Foral Top",
            price: 399,
            image: "https://m.media-amazon.com/images/I/71sm8MRnZ2L._AC_UL640_FMwebp_QL65_.jpg",
            rating: 4,
            reviews: 589,
        },
        {
            id: 14,
            title: "Dennis Lingo Men Casual Shirts",
            price: 699,
            image: "https://m.media-amazon.com/images/I/61YQd1wdQBL._UY879_.jpg",
            rating: 4,
            reviews: 450,
        },
        {
            id: 15,
            title: "Apple iPhone 12 (64GB) - Purple",
            price: 47999,
            image: "https://m.media-amazon.com/images/I/31jQ91XUDhS._SY445_SX342_QL70_FMwebp_.jpg",
            rating: 5,
            reviews: 800000,
        },
        {
            id: 16,
            title: "Campus Men's Barley Running Shoes",
            price: 899,
            image: "https://m.media-amazon.com/images/I/61X+P5oExWL._AC_UL640_FMwebp_QL65_.jpg",
            rating: 4,
            reviews: 568,
        },
        {
            id: 17,
            title: "United Colors of Benetton mens 22p8cffpm018i Slipper",
            price: 399,
            image: "https://m.media-amazon.com/images/I/81kn32tbqUL._AC_UL640_FMwebp_QL65_.jpg",
            rating: 4,
            reviews: 1200,
        },
        {
            id: 18,
            title: "Liddu Strap Belt Used with Fire Bolt Ring BSW005 Smart Watch - Air (Black Grey)",
            price: 499,
            image: "https://m.media-amazon.com/images/I/517JbO-4lOL._SX679_.jpg",
            rating: 3,
            reviews: 97,
        },
        {
            id: 19,
            title: "Life's Amazing Secrets: How to Find Balance and Purpose in Your Life",
            price: 158,
            image: "https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_UY436_FMwebp_QL65_.jpg",
            rating: 4,
            reviews: 589,
        },
        {
            id: 20,
            title: "Nova NHP 8100 Silky Shine 1200 Watts Hot and Cold Foldable Hair Dryer- Black",
            price: 299,
            image: "https://m.media-amazon.com/images/I/51I6PFb67-L._SX679_.jpg",
            rating: 4,
            reviews: 900,
        },
    ];
    const renderProducts = () => {
        const products = data.map((product) => {
            return (
                <Product
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                    reviews={product.reviews}
                />
            );
        });
        return products;
    };

    return (
        <div className='home'>
            <Slider className='home__slider' />
            <div className='home__itemsContainer'>{renderProducts(data)}</div>
        </div>
    );
};

export default Home;
