import React from 'react';
import { Card } from '../components';
import { exec } from '../exec';

class Exec extends React.Component {
    getPosts = () => exec.map(({id, src, title, excerpt}, index) => (
        <div className="col-sm-4">
            <Card title={title} excerpt={excerpt} img_path={`${process.env.PUBLIC_URL}/images/exec/${src}`} link={`/exec/${id}`}/>
        </div>
    ));


    render = () => (
        <div className="jumbotron bg-l p-3">
            <div className="py-3">
                <div className="container">
                <div className="row">
                    {this.getPosts()}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Exec;
