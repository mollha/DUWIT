import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const navbarBrandImg = `${process.env.PUBLIC_URL}/navbar_brand.jpg`

    const navItems = {
        Home: '/',
        Exec: '/exec',
        Blog: '/blog'
    };

    const navigation = Object.entries(navItems).map(([key, value]) => (
        <li className="nav-item">
            <NavLink
                key={key}
                to={value}
                className="nav-link"
                activeClassName="active"
                exact
            >
                { key }
            </NavLink>
        </li>
    ));

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/"><img src={navbarBrandImg} style={{height: 40 + 'px'}} alt="DUWIT"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        { navigation }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
