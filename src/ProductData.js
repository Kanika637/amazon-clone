const products = [
  {
    title: '2021 Apple 10.2-inch iPad (Wi-Fi, 64GB)- Space Gray',
    visibility: true,
    price: 95000,
    image:
      'https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL480_QL65_.jpg',
    rating: 3,
    reviews: 910,
  },
  {
    title:
      'Amazon Basics 48 Pack AA High-Performance Alkaline Batteries, 10-year Shelf Life,Easy to Open Value Pack',
    visibility: true,

    price: 1038,
    image:
      'https://m.media-amazon.com/images/I/71IdKRlm8+L._AC_UL480_QL65_.jpg',
    rating: 4,
    reviews: 567,
  },
  {
    title:
      'JBL Flip 4 by Harman Portable Wireless Speaker with Powerful Bass & Mic (Black), Medium',
    visibility: true,

    price: 6299,
    image: 'https://m.media-amazon.com/images/I/61bwTIJQWXL._SL1500_.jpg',
    rating: 4,
    reviews: 133,
  },

  {
    title: "Hanes Women's EcoSmart Crewneck Sweatshirt",
    visibility: true,

    price: 1500,
    image:
      'https://m.media-amazon.com/images/I/91JTWDmaK3L._AC_UL480_FMwebp_QL65_.jpg',
    rating: 5,
    reviews: 239,
  },
  {
    title: 'REVETRO Womens V Neck Long Sleeve Henley Shirts Button Down',
    visibility: true,

    price: 2000,
    image:
      'https://m.media-amazon.com/images/I/71kUh2-TdBL._AC_UL480_FMwebp_QL65_.jpg',
    rating: 4,
    reviews: 891,
  },
  {
    title: "Amazon Essentials Women's Studio Terry Relaxed-Fit",
    visibility: true,

    price: 1700,
    image:
      'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg',
    rating: 5,
    reviews: 114,
  },

  {
    title:
      'Cozy Line Home Fashions Ryleigh Floral Print Real Plaid Patchwork, 100% Cotton Reversible Coverlet',
    visibility: true,
    price: 3000,
    image:
      'https://m.media-amazon.com/images/I/81CF2AiJ8JL._AC_UL480_FMwebp_QL65_.jpg',
    rating: 4,
    reviews: 42,
  },
  {
    title:
      'DRUNKEN Men and Women Baseball Cap for Hunting, Fishing, Outdoor Activities Freesize',
    visibility: true,
    price: 209,
    image: 'https://m.media-amazon.com/images/I/71pF+7RS-QL._SX679_.jpg',
    rating: 4,
    reviews: 600,
  },
  {
    title:
      'crocs unisex-adult Bayaband 10 UK Slate Grey/Lime Punch Clog 207018-0GX',
    visibility: true,
    price: 1547,
    image:
      'https://m.media-amazon.com/images/I/71-IRy6dV0L._AC_UL640_FMwebp_QL65_.jpg',
    rating: 3,
    reviews: 45,
  },

  {
    title:
      "Deniklo Men's Polyester Round Neck Sweatshirt (DKAW11-3XL_Green_3XL_Green_3XL) ",
    visibility: true,
    price: 479,
    image:
      'https://m.media-amazon.com/images/I/81gSKxKWAcL._AC_UL640_FMwebp_QL65_.jpg',
    rating: 3,
    reviews: 62,
  },
  {
    title:
      'Noise Pulse Go Buzz Smart Watch with Smart Call & Advanced Bluetooth Tech',
    visibility: true,
    price: 1799,
    image: 'https://m.media-amazon.com/images/I/61akt30bJsL._SX679_.jpg',
    rating: 4,
    reviews: 660,
  },
  {
    title: 'New Designer Top And Bottom Set For Women Orange',
    visibility: true,
    price: 399,
    image: 'https://m.media-amazon.com/images/I/41tUFl54V1L.jpg',
    rating: 3,
    reviews: 90,
  },

  {
    title: "Wedani Women's Casual Puff Sleeves Ruffled Collor Foral Top",
    visibility: true,
    price: 399,
    image:
      'https://m.media-amazon.com/images/I/71sm8MRnZ2L._AC_UL640_FMwebp_QL65_.jpg',
    rating: 4,
    reviews: 589,
  },
  {
    title: 'Dennis Lingo Men Casual Shirts',
    visibility: true,
    price: 699,
    image: 'https://m.media-amazon.com/images/I/61YQd1wdQBL._UY879_.jpg',
    rating: 4,
    reviews: 450,
  },
  {
    title: 'Apple iPhone 12 (64GB) - Purple',
    visibility: true,
    price: 47999,
    image:
      'https://m.media-amazon.com/images/I/31jQ91XUDhS._SY445_SX342_QL70_FMwebp_.jpg',
    rating: 5,
    reviews: 800000,
  },

  {
    title: "Campus Men's Barley Running Shoes",
    visibility: true,
    price: 899,
    image:
      'https://m.media-amazon.com/images/I/61X+P5oExWL._AC_UL640_FMwebp_QL65_.jpg',
    rating: 4,
    reviews: 568,
  },
  {
    title: 'United Colors of Benetton mens 22p8cffpm018i Slipper',
    visibility: true,

    price: 399,
    image:
      'https://m.media-amazon.com/images/I/81kn32tbqUL._AC_UL640_FMwebp_QL65_.jpg',
    rating: 4,
    reviews: 1200,
  },
  {
    title:
      'Liddu Strap Belt Used with Fire Bolt Ring BSW005 Smart Watch - Air (Black Grey)',
    visibility: true,

    price: 499,
    image: 'https://m.media-amazon.com/images/I/517JbO-4lOL._SX679_.jpg',
    rating: 3,
    reviews: 97,
  },

  {
    title:
      "Life's Amazing Secrets: How to Find Balance and Purpose in Your Life",
    visibility: false,
    price: 158,
    image:
      'https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_UY436_FMwebp_QL65_.jpg',
    rating: 4,
    reviews: 589,
  },

  {
    title:
      'Nova NHP 8100 Silky Shine 1200 Watts Hot and Cold Foldable Hair Dryer- Black',
    visibility: false,
    price: 299,
    image: 'https://m.media-amazon.com/images/I/51I6PFb67-L._SX679_.jpg',
    rating: 4,
    reviews: 900,
  },
  {
    title:
      'Dell MS116 1000Dpi USB Wired Optical Mouse, Led Tracking, Scrolling Wheel, Plug and Play.',
    visibility: false,
    price: 269,
    image:
      'https://m.media-amazon.com/images/I/61onAgKP5gL._AC_UY436_FMwebp_QL65_.jpg',
    rating: 4,
    reviews: 269,
  },

  {
    title: "VERO MODA Women's Regular Fit T-Shirt",
    visibility: false,

    price: 196.42,
    image: 'https://m.media-amazon.com/images/I/71oX2cE7t-L._UY879_.jpg',
    rating: 4,
    reviews: 18,
  },
  {
    title: "WORLD WEAR FOOTWEAR Men's Sport Sneakers Shoes",
    visibility: false,

    price: 299,
    image:
      'https://m.media-amazon.com/images/I/81S1E1Dr-BL._AC_UL480_QL65_.jpg',
    rating: 3,
    reviews: 131,
  },
  {
    title: 'THUTHO ENTERPRISE Stainless Steel Smart Vacuum',
    visibility: false,
    price: 399,
    image:
      'https://m.media-amazon.com/images/I/51IxM8ERzvL._AC_UL480_FMwebp_QL65_.jpg',
    rating: 1,
    reviews: 1,
  },

  {
    title: 'Samsung Galaxy M33 5G (Mystique Green, 8GB, 128GB Storage)',
    visibility: false,
    price: 16999,
    image: 'https://m.media-amazon.com/images/I/81I3w4J6yjL._SX522_.jpg',
    rating: 4,
    reviews: 14591,
  },
  {
    title: 'HP v236w USB 2.0 64GB Pen Drive, Metal',
    visibility: false,
    price: 429,
    image: 'https://m.media-amazon.com/images/I/61xNG4wjOuL._SY450_.jpg',
    rating: 4,
    reviews: 58125,
  },
  {
    title:
      'TCL 126 cm (50 inches) 4K Ultra HD Certified Android Smart LED TV 50P615 (Black)',
    visibility: false,
    price: 27990,
    image: 'https://m.media-amazon.com/images/I/71M-4svv9-L._SX355_.jpg',
    rating: 4,
    reviews: 2707,
  },
];

module.exports = products;
