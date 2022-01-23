import React from 'react';
import PostItem from "./postItem";

const PostList = ({post,textH}) => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{textH}</h1>
            {post.map((post,index) =>
                <div>
                    <PostItem number={index + 1} post={post} key={post.id}/>
                </div>
            )}
        </div>
    );
};

export default PostList;