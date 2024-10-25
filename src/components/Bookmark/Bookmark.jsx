import PropTypes from 'prop-types';
import React from 'react';


const Bookmark = ({bookmark}) => {
const {title} =bookmark


    return (
        <div className='bg-white rounded-xl p-4 mb-3'>
            <h4>{title}</h4>
        </div>
    );
};

Bookmark.prototype={
    bookmark: PropTypes.array.isRequired
}

export default Bookmark;