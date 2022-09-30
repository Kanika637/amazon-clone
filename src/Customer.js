import React from 'react'
import "./Customer.css";
// import HeaderSearchBar from './HeaderSearchBar';
import SearchIcon from "@material-ui/icons/Search";

function Customer() {
  return (
    <div className='custom-all'>
<div className='custom-in'>
   <h2> Hello. What can We help you with?</h2>
   <br/>
   <hr/>
<br/>
<h3>Some things you can do here</h3>
<div className='cover'>
        {
            Items.map((item)=>{
             return    <div className='box'>
                 <img src={item.img} style={{width:"50px" ,height:"50px"}}/>
                 <div className='text'>
                    <h5> {item.Head}</h5>
                     <span className='sub'>{item.subhead}</span>
                     <span className='sub'>
                         {item.s1}
                         </span>
                    
                 </div>


    </div>
            })
        }

        </div>
        <hr/>
        <p className='se'>Find more Solutions  type something like , "question about a charge"</p>
        <input type="search" placeholder="🔍"  className='search'/>
</div>
    </div>
  )
}

export default Customer


const Items =[
    {
img:"https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Box-t3.png",
Head:"Your Orders",
subhead:"Track Packages Edit or cancel orders",
s1:"Edit or cancel orders"
    },
    {
        img:"https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/returns-box-blue.png",
Head:"Return and Refunds",
subhead:"Return or Exchange Item",
s1:"Print return mailing labels"
    },
    {
        img:"https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/manage-address.png",
Head:"Manage Address",
subhead:"Update your address",
s1:"Add address ,landmark details"

    },
    {
        img:"https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Prime_clear-bg.png",
    Head:"Manage Prime",
    subhead:"View your benefits",
    s1:"membership details"

    },
    {
        img:"https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Payments_clear-bg-t3.png",
Head:"Payment Settings",
subhead:"Add or Edit payment method",
s1:"Change expired debit or credit card"
    },
    {
        img:"https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/IN-your-account.png",
Head:"Account Settings",
subhead:"change your email or password",
s1:"Update login information"
    },
    {
        img:"https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/faq.png",
Head:"Amazon and COVID-19",
subhead:"Impacts on Orders and Deliveries"
    },
    
    
    {
        img:"https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/family_device.png",
Head:"Digital Service and Device Support",
subhead:"Find device help and support",
s1:"troubleshoot device issues"
    }
   
   
]