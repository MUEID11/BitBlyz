import toast from "react-hot-toast";
export const getBlogs = () =>{
    let blogs= [];
    const storedBlog = localStorage.getItem('blogs');
    if(storedBlog){
        blogs = JSON.parse(storedBlog)
    }
    return blogs;
}
//save
export const saveBlog = blog =>{
    let blogs = getBlogs();
    const isExist = blogs.find(b => b.id ===blog.id)
    if(isExist){
        return toast.error('Already Bookmarked')
    }
    blogs.push(blog)
    localStorage.setItem('blogs',JSON.stringify(blogs))
    toast.success('blog bookmarked successfully')
}
export const deleteBlogs = id =>{
    let blogs = getBlogs();
    const reamainingBlogs = blogs.filter(b => b.id !== id)
    localStorage.setItem('blogs',JSON.stringify(reamainingBlogs))
    toast.success('Blog removed from Bookmark')
}