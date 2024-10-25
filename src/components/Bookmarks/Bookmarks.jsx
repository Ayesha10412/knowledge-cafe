import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
 
        <div className='flex flex-col gap-3'>
            <div className='border-[#6047EC] border-2 rounded-xl p-5 mt-4 bg-[#6047ec11]'>
        <h4 className='text-[#6047EC] text-xl font-bold'>Spent time on read : {readingTime}</h4>

        </div>
            <div className=' bg-gray-100 p-5 rounded-xl'>
            
                <h4 className='text-2xl text-black font-bold mb-3'>Bookmarked Blogs: {bookmarks.length} </h4>
             {
                bookmarks.map((bookmark ,idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
             }
    
            </div>
        </div>

    );
};

Bookmarks.prototype ={
    bookmarks: PropTypes.array,
readingTime: PropTypes.number
}

export default Bookmarks;