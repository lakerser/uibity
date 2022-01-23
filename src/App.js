import React, {useState} from 'react'
import './styles/app.css'
import PostItem from "./components/postItem";

function App() {
    const [post, setPost] = useState([
        {id: 1, title: 'js', body: 'description'},
        {id: 2, title: 'css', body: 'description'},
        {id: 3, title: 'html', body: 'description'},
        {id: 4, title: 'jsx', body: 'description'}

    ])

    return (
        <div className="App">
            {post.map(post =>
                <div>
                    <PostItem post={post} key={post.id}/>
                </div>
            )}
        </div>
    );
}

export default App;
