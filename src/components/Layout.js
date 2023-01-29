import React from 'react';
import {Outlet} from "react-router";
import {NavLink} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav className="menu">
                <NavLink to="/"
                         className={({isActive}) => isActive ? "menu__item-active" : "menu__item"}
                >
                    Главная
                </NavLink>
                <NavLink to="/drift"
                         className={({isActive}) => isActive ? "menu__item-active" : "menu__item"}
                >
                    Дрифт-такси
                </NavLink>
                <NavLink to="/timeattack"
                         className={({isActive}) => isActive ? "menu__item-active" : "menu__item"}
                >
                    Time attack
                </NavLink>
                <NavLink to="/forza"
                         className={({isActive}) => isActive ? "menu__item-active" : "menu__item"}
                >
                    Forza karting
                </NavLink>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;