import React from "react";
import { NavLink } from "react-router-dom";

const LeftSideBarNav = () => {
    return (
        <div className='left-nav'>
            <h1>LOTR<br /> Quotes</h1>
            <NavLink to='/'>
                <button className='btn' type='button'>View LOTR Quotes</button>
            </NavLink>
            <NavLink to='/api/posts/create' >
                <button className='btn' type='button'>+ Create New Quote</button>
            </NavLink>
        </div>
    );
}


export default LeftSideBarNav;