import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';
const Blogs = ({handleAddToBookMark, handleMarkAsRead}) => {

const [blogs, setBlogs, ]= useState([])

useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
} ,[])

    return (
        <div className='w-2/3'>
            <h1 className='text-3xl '> Blogs: {blogs.length}</h1>
            {
                blogs.map(blog=> <Blog key={blog.id} blog={blog}
                     handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};

Blogs.prototype= {
    blogs: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired

}

export default Blogs;