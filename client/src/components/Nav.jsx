import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <ul className="nav">
            <li className="nav-link">
                <NavLink to="/btc" activeClassName="nav-active-link">Bitcoin</NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/eth" activeClassName="nav-active-link">Ethereum</NavLink>
            </li>
        </ul>
      );
}

export default Nav;