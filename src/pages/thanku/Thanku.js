import React from 'react'
import usePageMeta from '../../hooks/usePageMeta';
import "./Thanku.css";
function Thanku() {
usePageMeta("Thank you for shopping with us - Amazon Clone","");
    return (
        <div className="thanku">
            <h2>Thank You for shopping with us!</h2>
               <h2> We hope to see you back...</h2>
               
        </div>
    )
}

export default Thanku
