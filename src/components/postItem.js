import React from 'react';

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
                    <button>DELITE</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;