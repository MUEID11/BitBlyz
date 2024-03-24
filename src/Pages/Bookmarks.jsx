import { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../Components/Utility";
import BlogCard from "./BlogCard";
import EmptyState from "../Components/EmptyState";



const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    },[])
    const handleDelete = id =>{
        deleteBlogs(id);
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
      }
      if(blogs.length<1){
        return <EmptyState message="No Bookmarks Found"/>
      }
    return (
        <div className="container mx-auto grid px-6 sm:px-10 lg:px-16 py-8 justify-center grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {
            blogs.map(blog => <BlogCard handleDelete={handleDelete} deleteable={true} blog={blog} key={blog.id}></BlogCard>)
          }
          
        </div>
    );
};

export default Bookmarks;