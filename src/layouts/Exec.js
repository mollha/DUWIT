import React from 'react';
import { members } from '../members';
import { Member } from '../components';

// Class for Exec Page Layout

class Exec extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: members
        }
    }

    getMembers = () => this.state.members.map((member, index) => (
        <div className="col-sm-2">
            <Member member={member} selectMember={this.selectMember}/>
        </div>
    ));

    selectMember = (id) => {
        this.setState({
            members: this.state.members.map(member => {
                member['active'] = member.id.toString() === id.toString();
                return member;
            })
        });
    }

    getActiveMember = () => {
        const activeMember = this.state.members.find(({active}) => active);
        return (
            <div className='text-center'>
                <h2>{activeMember.name}</h2>
                <p>{activeMember.role}</p>
                <p>Year {activeMember.year}</p>
                <p>{activeMember.description}</p>
            </div>
        );
    }

    render = () => (
        <div>
            <div className="text-center">
                <h1 className="my-4">
                    Meet the Executive Commitee
                </h1>
            </div>
            <div className="jumbotron bg-l p-3">
                <div className="py-3">
                    <div className="container">
                        <div className="row justify-content-center">
                            {this.getMembers()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="jumbotron bg-secondary text-white">
                { this.getActiveMember()}
            </div>
        </div>
    )
}

export default Exec;
