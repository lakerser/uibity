import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const  newPost = {
            ...post, id:Date.now()
        }
        if(newPost.title==='' && newPost.body===''){
            alert('something is empty')
        }
        else{
            create(newPost)
        }
        setPost({title: '', body: ''})
    }

    return (
        <div>
            <form>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post,title:e.target.value})}
                    type="text"
                    placeholder='neme of post'
                />
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text" placeholder='description of post'/>
                <MyButton  onClick={addNewPost}>create post</MyButton>
            </form>
        </div>
    );
};

export default PostForm;