import React from 'react';

const Card = () => (
    <div className="card my-3" style={{width: 18 + "rem"}}>
        <img className="card-img-top" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
    </div>
);
export default Card;


// <div className="bg-dark py-3">
//     <div className="container">
//         <div className="row">
//             <div className="col-sm">.</div>
//             <div className="col-sm">.</div>
//             <div className="col-sm">.</div>
//         </div>
//     </div>
// </div>

