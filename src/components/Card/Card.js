import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

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
                    <FontAwesomeIcon className="ml-2" icon={faAngleDoubleRight}></FontAwesomeIcon>
                </NavLink>
            </div>
    </div>
);
export default Card;

