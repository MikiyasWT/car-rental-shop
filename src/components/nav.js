import { useState } from "react";
import { Link,BrowserRouter as Router,Routes } from "react-router-dom";



const Nav = () => {
    const [fix,setFixed] = useState(false)

    const setNavFixed = () => {
        if(window.scrollY >= 392){
            setFixed(true)
        }else {
            setFixed(false)
        }
    }


    window.addEventListener("scroll",setNavFixed)

    return (
        <div className={fix ? 'navbarFixed':'navbar'}>
            <h1>Car Rental Shop</h1>

            <div className="menuContainer">
              <ul>
                <li><h2>Buy</h2></li>
                <li><h2>Rent</h2></li>
                <li><h2>Contact Us</h2></li>

             </ul>
            </div>

        </div>
    )
}



export default Nav;