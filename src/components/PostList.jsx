import React from 'react';
import PostItem from "./postItem";

const PostList = ({post,textH,remove}) => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{textH}</h1>
            {post.map((post1,index) =>
                <div>
                    <PostItem remove={remove} number={index + 1} post1={post1} key={post1.id}/>
                </div>
            )}
        </div>
    );
};

export default PostList;