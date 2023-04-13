import "./Special.css";
import { myCart } from "../../App";
import { useContext,useEffect } from "react";

// importing images
import seecandies from "./SpecialItems/SeesCandies.jpg";
import vosgeschocolate from "./SpecialItems/VosgesChocolate.jpg";
import icepuffles from "./SpecialItems/IcePuffles.jpg";
import sachertort from "./SpecialItems/Sachertort.jpeg";
import goldencupcake from "./SpecialItems/GoldenCupcake.jpg";
import sandre from "./SpecialItems/FrrozenHauteSandre.png";

const SpecialItem = (props) => {
    return (
        <>
            <div className="clicktoadd">Click to order</div>
            <div className="special__item__details">
                <div className="item__name">{props.name}</div>
                <div className="item__price">{props.price}</div>
            </div>
        </>
    );
};

export const Special = () => {
    useEffect(() => { //to scroll to the top of the page when this component is mounted.
        window.scrollTo(0,0);
    }, []);
    // special item
    const specialItems = [
        {"name" : "See's Candies" , "price" : "$29.99", "bg" : seecandies},
        {"name" : "Vosges Chocolate" , "price" : "$39.99", "bg" : vosgeschocolate},
        {"name" : "Ice Puffles" , "price" : "$49.99", "bg" : icepuffles},
        {"name" : "Sachertort" , "price" : "$99.99", "bg" : sachertort},
        {"name" : "Golden Cupcake" , "price" : "$129.99", "bg" : goldencupcake},
        {"name" : "Frrozen Haute Sandre" , "price" : "$149.99", "bg" : sandre},
    ]
    // on Click Event
    const { cart,setCart } = useContext(myCart);

    const handleClick = (event) => {
        try{
            event.target.style.borderColor = 'lime';
            event.target.style.transform = 'scale(.975)';
            setTimeout(() => { 
                event.target.style.borderColor = "#a800a8";
                event.target.style.transform = 'scale(1)';
            }, 250);
            const addedItemName = event.target.lastChild.children[0].textContent;
            const addedItemPrice = event.target.lastChild.children[1].textContent;
            const newItem = [addedItemName, addedItemPrice]
            setCart([...cart, newItem]);
        }
        catch{
            // for those chrome that doesnot use "pointer-events" styling in css
            alert("Try Clicking on the image while ordering");
        }
    };

    
    return (
        <div className="special__container">
            <h1>SPECIAL</h1>
            <div className="special__items">
                {specialItems.map((specialItem, index) => {
                    return(
                        <div onClick={handleClick} key={index} className="special__item" style={{"backgroundImage" : `url(${specialItem.bg})`}}>
                            <SpecialItem name={specialItem.name} price={specialItem.price}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};