import "./Menu.css";
import brownies from './MenuItems/Brownies.jpg';
import cookies from './MenuItems/cookies.jpg';
import cupcakes from './MenuItems/cupcakes.jpg';
import icecream from './MenuItems/icecream.jpg';
import pastry from './MenuItems/pastry.jpg';
import pieslices from './MenuItems/pieslices.jpg';
import { myCart } from "../../App";
import { useContext, useEffect } from "react";

const MenuItem = (props) => {
    return (
        <>
            <div className="clicktoadd">Click to order</div>
            <div className="menu__item__details">
                <div className="item__name">{props.name}</div>
                <div className="item__price">{props.price}</div>
            </div>
        </>
    );
};

export const Menu = () => {
    useEffect(() => { //to scroll to the top of the page when this component is mounted.
        window.scrollTo(0, 0);
    }, []);
    // Menuitems
    const menuItems = [
        { "name": "Brownies", "price": "$2.99", "bg": brownies },
        { "name": "Cookies", "price": "$3.99", "bg": cookies },
        { "name": "Cupcakes", "price": "$4.99", "bg": cupcakes },
        { "name": "Ice-Cream", "price": "$5.99", "bg": icecream },
        { "name": "Pastry", "price": "$6.99", "bg": pastry },
        { "name": "Pieslices", "price": "$7.99", "bg": pieslices },
    ]


    // onClick Event
    const { cart, setCart } = useContext(myCart);


    const handleClick = (event) => {
        try {
            event.target.style.borderColor = 'lime';
            setTimeout(() => { event.target.style.borderColor = "#a800a8"}, 750);
            const addedItemName = event.target.lastChild.children[0].textContent;
            const addedItemPrice = event.target.lastChild.children[1].textContent;
            const newItem = [addedItemName, addedItemPrice];
            setCart([...cart, newItem]);
        }
        catch {
            // for those webbrowswer that doesnot use "pointer-events" styling in css
            alert("Try Clicking on the image while ordering");
        }
    };
    return (
        <div className="menu__container">
            <h1>MENU</h1>
            <div className="menu__items">
                {menuItems.map((menuItem, index) => {
                    return (
                        <div key={index} onClick={handleClick} className="menu__item" style={{ "backgroundImage": `url(${menuItem.bg})` }}>
                            <MenuItem name={menuItem.name} price={menuItem.price} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
};