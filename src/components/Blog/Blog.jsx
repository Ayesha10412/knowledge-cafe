import PropTypes from 'prop-types';
import React from 'react';

const Blog = ({blog}) => {
const {title, cover_image, author_img, author,posted_date, reading_time, hashtags}= blog

    return (
        <div className='p-4 bg-base-200 border-2 rounded-xl mb-3'>
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
                <div>
                    <p>{reading_time} min read</p>
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
    blog: PropTypes.object.isRequired
}
export default Blog;