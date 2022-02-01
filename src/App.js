import React, {useMemo, useState} from 'react'
import './styles/app.css'
import PostList from "./components/PostList";
import PostForm from "./components/postForm";
import MySelect from "./components/select/mySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePost} from "./components/hoocks/usePosts";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'js', body: 'b'},
        {id: 2, title: 'css', body: 'a'},
        {id: 3, title: 'html', body: 'd'},


    ])
    const [filter,setFilter] = useState({sort:'',query:''})
    const [modal,setModal] = useState(false)
    const  sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query )
    const removePost = (post1) => {
        setPosts(posts.filter(p => p.id !== post1.id))
    }
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }




    return (
        <div className="App">
            <MyButton style={{marginTop:'20px'}} onClick={()=> setModal(true)}>
                Create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost}/></MyModal>

            <hr style={{margin: "15px 0"}}/>
            <PostFilter filter={filter}
            setFilter={setFilter}
/>


                <PostList remove={removePost} post={sortedAndSearchedPosts} textH={'text posts 1'}/>

        </div>
    );
}

export default App;
