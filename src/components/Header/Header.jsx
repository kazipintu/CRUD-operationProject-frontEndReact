import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">CRUD Operation</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to={'/'}>Users</NavLink></li>
          <li><NavLink to={'/add-user'}>Add User</NavLink></li>
          <li><NavLink to={'/update-user'}>Update User</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;