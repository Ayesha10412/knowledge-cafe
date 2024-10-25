
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookMark = blog =>{
const newBookMarks = [...bookmarks, blog];
setBookmarks(newBookMarks)

  }
  return (
    <>

    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
      
<Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
<Bookmarks bookmarks={bookmarks}></Bookmarks>
    </div>

    </>
  )
}

export default App
