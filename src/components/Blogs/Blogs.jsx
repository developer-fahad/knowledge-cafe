import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))
    }, [])
    return (
        <div>
            {/* <h1>Blogs: {blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmarks={handleBookmarks}></Blog>)
            }
        </div>
    );
};

export default Blogs;