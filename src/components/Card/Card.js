import React from 'react';

const Card = ({title, description, img_path}) => (
    <div className="card shadow">
        <img className="card-img-top" src={img_path} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">See More</a>
            </div>
    </div>
);
export default Card;

