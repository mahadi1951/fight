import React from 'react';
import { NavLink } from 'react-router-dom';

const MyLink = ({to, className, children}) => {
    return (
       <NavLink to={to} className={({ isActive }) => isActive ? "text-blue-500" : `text-gray-500 font-semibold ${className}`}>
            {children}
       </NavLink>
    );
};

export default MyLink;