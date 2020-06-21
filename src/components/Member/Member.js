import React from 'react';

class Member extends React.Component {
    constructor(props) {
        super(props);
    }

    getMemberAvatar = () => (
        <img className={`card-img-top rounded-circle ${this.props.member.active ? 'border border-pink' : ''}`}
             src={`${process.env.PUBLIC_URL}/images/members/${this.props.member.src}`}
             alt="Card image cap"
             onClick={() => this.props.selectMember(this.props.member.id)}/>
    );

    render() {
        return (
            <div className="memberCard">
                {this.getMemberAvatar()}
                <p className="text-center">{this.props.member.name}</p>
            </div>
        )
    }
}

export default Member;
