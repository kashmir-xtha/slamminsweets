import { useEffect } from "react";
import "./Home.css";
import { NavLink } from 'react-router-dom';

export const Home = () => {
    useEffect(() => { //to scroll to the top of the page when this component is mounted.
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="main">
                <h1>SLAMMIN' SWEETS</h1>
                <div className="description">
                    Just Slam It In !!! <br />
                    A Rip-off NOBODY asked for <br />
                    But here we are!!<br />
                    Nothing Better <br/> than a Sweet Sweet<br />
                    <strong>After a Long Rough Day</strong>
                </div>
            </div>

            <div className="main__items">
                <NavLink 
                to="/menu"
                className='main__nav__links'>
                    <span>MENU</span>
                </NavLink>
                <NavLink 
                to='/special'
                className='main__nav__links'>
                    <span>SPECIAL</span>
                </NavLink>
                <NavLink 
                to="https://www.google.com/maps/search/nowhere/@13.6391155,100.8363331,11.52z?shorturl=1"
                className='main__nav__links'>
                    <span>MAP</span>
                </NavLink>
            </div>
        </>
    )
};