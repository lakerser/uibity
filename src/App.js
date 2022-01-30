import React, {useMemo, useState} from 'react'
import './styles/app.css'
import PostList from "./components/PostList";
import PostForm from "./components/postForm";
import MySelect from "./components/select/mySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'js', body: 'b'},
        {id: 2, title: 'css', body: 'a'},
        {id: 3, title: 'html', body: 'd'},


    ])
    const [filter,setFilter] = useState({sort:'',query:''})

    const removePost = (post1) => {
        setPosts(posts.filter(p => p.id !== post1.id))
    }


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }


    const sortedPosts = useMemo(() => {
        console.log('gooooo sorted post')
        if (filter.sort) {
            console.log('sorting')
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts

    }, [filter.sort, posts])
    const sortedAndSearchedPosts = useMemo(()=>{
return sortedPosts.filter(p=>p.title.toLowerCase().includes(filter.query))
    },[filter.query,sortedPosts])

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: "15px 0"}}/>
            <PostFilter filter={filter}
            setFilter={setFilter}
/>

            {sortedAndSearchedPosts.length
                ?
                <PostList remove={removePost} post={sortedAndSearchedPosts} textH={'text posts 1'}/>
                :
                <h1 style={{textAlign: "center"}}>
                    Posts is not here</h1>
            }
        </div>
    );
}

export default App;
