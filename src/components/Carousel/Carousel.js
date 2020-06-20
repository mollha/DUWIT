import React from 'react';


const Carousel = () => {
    const folder = "%PUBLIC_URL%/images/carousel/"

    const images = [
        {src: 'carousel1.jpeg', title: 'This is a title', description: 'This is a description, based on the title' },
        {src: 'carousel2.jpeg', title: 'This is a title', description: 'This is a description, based on the title' }
    ];

    const carousel = images.map(({src, title, description}, index) => (
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div style={{
                backgroundImage: `url('${process.env.PUBLIC_URL}/images/carousel/${src}')`,
                backgroundPosition: 'center'
            }}>
                <div className="text-center text-white" style={{paddingTop: '240px'}}>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    ));

    const indicators = images.map(({src, title, description}, index) => (
        <li data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
    ));

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {indicators}
            </ol>
            <div className="carousel-inner">
                {carousel}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}


export default Carousel;
