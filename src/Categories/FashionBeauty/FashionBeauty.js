import React from 'react'
import "./FashionBeauty.css"
import Product from '../../Product'

function FashionBeauty() {
  return (
    <>
      <h1 className='fashion-beauty-category-heading'>Fahion & Beauty</h1>
      <div className="home__row">
        <Product title="Men's Cotton Blend Full Sleeve Shirt | Stylish Printed Casual Wear Shirt for"
          price={359}
          image="https://m.media-amazon.com/images/I/61Tf7LKyE8L._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
          reviews={2956} />

        <Product title="Men's Poly Cotton Digital Printed Stitched Half Sleeve Shirt"
          price={348}
          image="https://m.media-amazon.com/images/I/71cFpnm0b6S._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
          reviews={1648} />

        <Product title="Women Rayon Casual Wear Western Maxi Dress Gown for"
          price={398}
          image="https://m.media-amazon.com/images/I/61sbFqt193S._AC_UL480_QL65_.jpg"
          rating={4}
          reviews={745} />
      </div>

      <div className="home__row">
        <Product title="Women Kurtas"
          price={389}
          image="https://m.media-amazon.com/images/I/81KTGOTzc+L._AC_UL480_FMwebp_QL65_.jpg"
          rating={3}
          reviews={12} />

        <Product title="Women Ladies Girls Winter Wear Round Neck Self Design Woolen Dori"
          price={819}
          image="https://m.media-amazon.com/images/I/71rmsbXSM2L._AC_UL480_QL65_.jpg"
          rating={4}
          reviews={27} />

        <Product title="Men's Lycra Printed Checkered Track Pants"
          price={439}
          image="https://m.media-amazon.com/images/I/81up7iN1y-L._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
          reviews={339} />
      </div>

      <div className="home__row">
        <Product title="Cotton Blend Solid Kurta for Men"
          price={224}
          image="https://m.media-amazon.com/images/I/51NG+s5cd0L._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
          reviews={24} />

        <Product title="Enmozz® Yellow Cotton Plain Men's Ethnic Simple Kurta Only"
          price={359}
          image="https://m.media-amazon.com/images/I/51Qrs3MqrHL._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
          reviews={136} />

        <Product title="Western Dresses for Women | Short A-Line Dress for Girls | Maxi Dress for"
          price={329}
          image="https://m.media-amazon.com/images/I/41maY1QF45L._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
          reviews={49} />
      </div>

      <div className="home__row">
        <Product title="Women's Sleeveless One Shoulder Neck Sequin Bodycon Casual Knee"
          price={356}
          image="https://m.media-amazon.com/images/I/71AkxekGS4L._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
          reviews={4} />

        <Product title="Floral Print V-neck Gown Dress with Bell Sleeves"
          price={1732}
          image="https://assets.ajio.com/medias/sys_master/root/20220817/aEGF/62fc174baeb26917617922ea/aspora_black_floral_print_v-neck_gown_dress_with_bell_sleeves.jpg"
          rating={4}
          reviews={544} />

        <Product title="US Polo Association Men's Polo"
          price={839}
          image="https://m.media-amazon.com/images/I/71CrnRF9JkL._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
          reviews={96} />
      </div>

      <div className="home__row">
        <Product title="Women's Synthetic a-line Knee-Long Dress"
          price={599}
          image="https://m.media-amazon.com/images/I/61qHZ25pJ-L._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
          reviews={1775} />
      </div>


    </>
  )
}

export default FashionBeauty