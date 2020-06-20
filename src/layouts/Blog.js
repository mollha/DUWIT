import React from 'react';
import { Card } from '../components';

const posts = [
    {src: 'blog1.png', title: 'Blog Post 1', description: 'This is a description, based on the title' },
    {src: 'blog2.png', title: 'Blog Post 2', description: 'This is a description, based on the title' },
    {src: 'blog1.png', title: 'Blog Post 3', description: 'This is a description, based on the title' }
];

class Blog extends React.Component {
    getPosts = () => posts.map(({src, title, description}, index) => (
        <div className="col-sm">
            <Card title={title} description={description} img_path={`${process.env.PUBLIC_URL}/images/blog/${src}`}/>
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
