import React from 'react';
import { Card } from '../components';
import { posts } from '../posts';

class Blog extends React.Component {
    getPosts = () => posts.map(({id, src, title, excerpt}, index) => (
        <div className="col-sm-4">
            <Card title={title} excerpt={excerpt} img_path={`${process.env.PUBLIC_URL}/images/blog/${src}`} link={`/blog/${id}`}/>
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

export default Blog;
