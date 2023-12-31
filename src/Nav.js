import React, {useEffect, useState} from 'react';
import './Nav.css';
function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

        useEffect(() => {
            window.addEventListener("scroll", transitionNavBar);
            return () => window.removeEventListener("scroll", transitionNavBar);
        }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
            <img
                className="nav_logo"
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="">
            </img>

            <img
                className="nav_avatar"
                src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.jpg"
                alt="">
            </img>
            </div>
        </div>
    );
}

export default Nav;