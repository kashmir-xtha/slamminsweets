import logo from "./logo.png";
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { myCart } from "../../App";
// be very much careful on how you import the files from the folders.
import { useContext, useState } from "react";


export const Navbar = () => {
    const {cart, setCart } = useContext(myCart);

    // to toggle cart
    const [isCartOpen, setIsCartOpen] = useState(false);
    const handleOpenCart = () => {
        setIsCartOpen(!isCartOpen);
    };
    const handleCloseCart = () => {
        setIsCartOpen(false);
    };
    const handleClearCart = () => {
        setCart([]);
        setTimeout(() => {
            setIsCartOpen(false);
        }, 3000);
    };
    let total = 0;
    cart.forEach((element) => {
        let price = element[1]; // taking the value of price;
        let stringPriceValue = price.split('').slice(1).join('');
        //method chaining. split converts to array, splice(1) removes first element;$ and join convert to string
        total += Number(stringPriceValue);
    });
    total = total.toFixed(2); // converting to $$.$$ format.
    return (
        <div className="container">
            <div className="brand">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="brand__name">Slammin' Sweets</div>
            </div>

            <div className="nav__items">
                <NavLink
                    onClick={handleCloseCart}
                    to='/'
                    end // to remove the active class when switched to the child routes 
                    // active is the className when the following tab is active.
                    className={(navData) => (navData.isActive ? 'active' : 'nav__item')}>
                    home
                </NavLink >

                <NavLink
                    onClick={handleCloseCart}
                    to='/menu'
                    className={(navData) => (navData.isActive ? 'active' : 'nav__item')}>
                    menu
                </NavLink >

                <NavLink
                    onClick={handleCloseCart}
                    to='/special'
                    className={(navData) => (navData.isActive ? 'active' : 'nav__item')}>
                    Special
                </NavLink >
            </div>

            <div className="cart" onClick={handleOpenCart}>
                <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                <span className="cart_after">{cart.length}</span>
            </div>

            {isCartOpen && 
            <div className="overlayContainer">
                <div className="cartOverlay" >
                    <div className="closeButton"  onClick={handleCloseCart}>
                        <button>X</button>
                    </div>
                    <div className="overlay_heading">Cart Items</div>
                    <hr />
                    {cart.length === 0 ? 
                        <div className="overlay_empty_cart">
                            Cart is empty!<br />
                            Click on items to order
                        </div>
                        :
                        <>
                            <div className="overlay_cart_items">
                                {cart.map((cartitem, index) => {
                                    return (
                                        <div className="overlay_cart_item" key={index}>
                                            <div className="overlay_cart_item_name">{cartitem[0]}</div>
                                            <div className="overlay_cart_item_price">{cartitem[1]}</div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="total_cost">
                                <span>Total</span>
                                <span>${total}</span>
                            </div>

                            <div className="clear_cart">
                                <button onClick={handleClearCart}>Clear Cart</button>
                            </div>
                        </>
                    }
                </div>
            </div>
            }
        </div>
    )
}