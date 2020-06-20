import React from 'react';

class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    toggleActive = () => {
        const active = !this.state.active;
        this.setState({active: active});
    }

    getMemberAvatar = () => {
        if (this.state.active) {
            return (
                <img className="border border-pink card-img-top rounded-circle" src={this.props.src}
                     alt="Card image cap" onClick={() => this.toggleActive()}/>
            );
        } else {
            return (
                <img className="card-img-top rounded-circle" src={this.props.src} alt="Card image cap"
                     onClick={() => this.toggleActive()}/>
            );
        }
    }

    render() {
        return (
            <div className="memberCard">
                {this.getMemberAvatar()}
                <p className="text-center">{this.props.name}</p>
            </div>
        )
    }
}

export default Member;
