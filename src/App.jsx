
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
import Bookmark from './components/Bookmark/Bookmark'
function App() {

  const [bookmarks, setBookmarks] = useState([])
const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookMark = blog =>{
const newBookMarks = [...bookmarks, blog];
setBookmarks(newBookMarks)

  }

  const handleMarkAsRead = (id,time) =>{
const newTime = readingTime + time;
setReadingTime(newTime)

const remainingBookMarks = bookmarks.filter(bookmark=> bookmark.id !== id)
setBookmarks(remainingBookMarks)

  }


  return (
    <>

    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
      
<Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
<Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>

    </>
  )
}

export default App
