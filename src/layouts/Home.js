import React from 'react';
import { Carousel } from '../components';

const description = "DuWIT is a community of women at Durham University that want to promote accessibility to technology and tech-related careers to people from all different kinds of backgrounds, with a strong focus on underrepresented groups"

// Class for Exec Page Layout

class Home extends React.Component {
    render = () => (
        <div>
            <Carousel/>
            <div className="jumbotron mt-4 p-3 text-center">
                {description}
            </div>
        </div>
    )
}

export default Home;
