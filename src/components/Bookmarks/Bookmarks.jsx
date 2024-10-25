import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className='md:w-1/3 bg-gray-100 p-5 rounded-sm'>
            <h4 className='text-2xl text-black font-bold mb-3'>Bookmarked Blogs: {bookmarks.length} </h4>
         {
            bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
         }

        </div>
    );
};

Bookmarks.prototype ={
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;