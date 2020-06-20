import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { exec } from '../exec';

const ExecPost = () => {

    const { id } = useParams();
    const exec = exec.find((exec) => exec.id.toString() === id);

    if (!exec) {
        return <Redirect to='/exec'  />
    }

    return (
        <div>
            <h1>{exec.title}</h1>
            <div>
                {exec.markdown}
            </div>
        </div>
    );
};
export default ExecPost;
