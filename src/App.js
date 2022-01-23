import React, {useRef, useState} from 'react'
import './styles/app.css'
import PostItem from "./components/postItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [post, setPost] = useState([
        {id: 1, title: 'js', body: 'description'},
        {id: 2, title: 'css', body: 'description'},
        {id: 3, title: 'html', body: 'description'},
        {id: 4, title: 'jsx', body: 'description'}

    ])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const addNewPost = (e) => {
        e.preventDefault()
       const newPost = {
            id:Date.now(),
           title,
           body
       }
        setPost([...post,newPost])
        setTitle('')
        setBody('')
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder='neme of post'
                />
                <MyInput  value={body}
                          onChange={e => setBody(e.target.value)}
                          type="text" placeholder='description of post'/>
                <MyButton onClick={addNewPost}>create post</MyButton>
            </form>
            <PostList post={post} textH={'text post 1'}/>
        </div>
    );
}

export default App;
