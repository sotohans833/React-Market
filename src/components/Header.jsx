import React, {useState, useContext} from "react";
import "@styles/Header.scss";
import Menu from "@components/Menu.jsx";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo.svg";
import AppContext from "@context/AppContext.js"
import MyOrder from "@containers/MyOrder";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import MobileMenu from "@components/MobileMenu.jsx"

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const {state} = useContext(AppContext);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMobile, setToggleMobile] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }
    const handleToggleOrder = () => {
        setToggleOrders(!toggleOrders);
    }
    return (
        <nav>
            <img
            src={menu}
            alt="menu"
            className="menu"
            onClick={() => setToggleMobile(!toggleMobile)}
            />
            {toggleMobile && <MobileMenu />}
            <div className="navbar-left">
            <img
                src={logo}
                alt="logo"
                className="nav-logo"
                onClick={handleToggle}
            />
            <ul>
                <li>
                <a href="/">All</a>
                </li>
                <li>
                <a href="/">Clothes</a>
                </li>
                <li>
                <a href="/">Electronics</a>
                </li>
                <li>
                <a href="/">Furnitures</a>
                </li>
                <li>
                <a href="/">Toys</a>
                </li>
                <li>
                <a href="/">Others</a>
                </li>
            </ul>
            </div>
            <div className="navbar-right">
            <ul>
                <li className="navbar-email" onClick={handleToggle}>
                platzi@example.com
                </li>
                <li
                className="navbar-shopping-cart"
                onClick={handleToggleOrder}
                >
                <img
                    src={shoppingCart}
                    alt="shopping cart"
                    className="shoppingCartImage"
                />
                {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                </li>
            </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder handleMyOrder={handleToggleOrder}/>}
        </nav>
    );
};

export default Header;
