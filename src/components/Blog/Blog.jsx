import PropTypes from 'prop-types';
import React from 'react';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookMark}) => {
const {title, cover_image, author_img, author,posted_date, reading_time, hashtags}= blog

    return (
        <div className='p-5 border-b-2 mb-3 mt-8'>
            <img className='mb-3 rounded-xl' src={cover_image} alt={`Cover image of the title ${cover_image}`} />
            <div className='flex justify-between'>
                <div className='flex gap-2'>
<div className='w-14'>                   
     <img className='rounded-full ' src={author_img} alt="" />
</div>
                    <div className='flex flex-col gap-1'>
                    <h4 className='text-2xl'>{author}</h4>
                    <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <p>{reading_time} min read</p>
<button onClick={()=>handleAddToBookMark(blog)}><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className='text-xl font-semibold mt-4 mb-2'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => 
                        <span key={idx} className='mr-4'><a href="">{hash}</a></span>
                    )
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func.isRequired
}
export default Blog;