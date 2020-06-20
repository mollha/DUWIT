import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({title, excerpt, img_path, link}) => (
    <div className="card shadow">
        <img className="card-img-top" src={img_path} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{excerpt}</p>
                <NavLink
                    to={link}
                    className="btn btn-primary"
                    activeClassName="active"
                    exact
                >
                    See More
                </NavLink>
            </div>
    </div>
);
export default Card;

