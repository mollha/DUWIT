import React from 'react';

class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            src: this.props.src,
            role: this.props.role,
            year: this.props.year,
            description: this.props.description
        };
    }
    render() {
        return (
            <div>
                <img className="card-img-top rounded-circle" src={this.props.src} alt="Card image cap"/>
                <p className="text-center">{this.props.name}</p>
            </div>
        );
    }
}

export default Member;

