import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { posts } from '../posts';

const BlogPost = () => {

    const { id } = useParams();
    const post = posts.find((post) => post.id.toString() === id);

    if (!post) {
        return <Redirect to='/blog'/>
    }

    return (
        <div className="my-5">
            <h1>{post.title}</h1>
            <div>
                {post.markdown}
            </div>
        </div>
    );
};
export default BlogPost;

