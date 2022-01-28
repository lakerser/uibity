import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div>
            <div className='post'>
                <div className='post__content'>
                    <strong>{props.number}. {props.post1.title}</strong>
                    <div>
                        {props.post1.title} - {props.post1.body}
                    </div>
                </div>
                <div className="post__btn">
                    <MyButton onClick={()=>props.remove(props.post1)}>delite</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;