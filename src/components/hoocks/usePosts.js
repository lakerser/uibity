import {useMemo, useState} from "react";

export const useSortedPosts = (posts,sort)=>{
    const sortedPosts = useMemo(() => {
        console.log('gooooo sorted post')
        if (sort) {
            console.log('sorting')
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts

    }, [sort, posts])
    return sortedPosts
}
export  const  usePost =(posts, sort, query)=>{
    const sortedPosts = useSortedPosts(posts,sort)

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(p=>p.title.toLowerCase().includes(query))
    },[query,sortedPosts])
    return sortedAndSearchedPosts
}