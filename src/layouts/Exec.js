import React from 'react';
import { members } from '../members';
import { Member } from '../components';

// Class for Exec Page Layout

class Exec extends React.Component {
    getMembers = () => members.map(({id, name, src, role, year, description}, index) => (
        <div className="col-sm-2">
            <Member name={name} role={role} year={year} src={`${process.env.PUBLIC_URL}/images/members/${src}`} description={description}/>
        </div>
    ));


    render = () => (
        <div>
            <div className="text-center">
                <h1 className="my-4">
                    Meet the Exec
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
        </div>
    )
}

export default Exec;
