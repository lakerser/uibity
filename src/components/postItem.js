import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div>
            <div className='post'>
                <div className='post__content'>
                    <strong>{props.number}. {props.post.title}</strong>
                    <div>
                        {props.post.title} - {props.post.body}
                    </div>
                </div>
                <div className="post__btn">
                    <MyButton>delite</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;