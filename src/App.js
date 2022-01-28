import React, {useState} from 'react'
import './styles/app.css'
import PostList from "./components/PostList";
import PostForm from "./components/postForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'js', body: 'description'},
        {id: 2, title: 'css', body: 'description'},
        {id: 3, title: 'html', body: 'description'},
        {id: 4, title: 'jsx', body: 'description'}

    ])
    const removePost = (post1) => {
        setPosts(posts.filter(p => p.id !== post1.id))
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            {posts.length !== 0
                ?
                <PostList remove={removePost} post={posts} textH={'text posts 1'}/>
                :
                <h1 style={{textAlign: "center"}}>
                    Posts is not here</h1>
            }
        </div>
    );
}

export default App;
