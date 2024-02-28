import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navbar">
        <Link to="/home">Home</Link>
        <h1 className="siteTitle">BS3206</h1>
    </div>

  )
};

export default Header
