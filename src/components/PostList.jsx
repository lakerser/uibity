import React from 'react';
import PostItem from "./postItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({post,textH,remove}) => {
    if(!post.length){
        return (

        <h1 style={{textAlign: "center"}}>
            Posts is not here</h1>

        )
    }
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{textH}</h1>

            <TransitionGroup>
                {post.map((post1,index) =>
                    <CSSTransition
                        key={post1.id}
                        timeout={500}
                        classNames="post"
                    >
                    <div>
                        <PostItem remove={remove} number={index + 1} post1={post1} />
                    </div>
                        </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;