import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = blog =>{
    // console.log(blog);
    console.log('Bookmark adding soon!');
  }

  return (
    <>
      <div className='container mx-auto min-h-screen '>
        <div className=''>
          <Header></Header>
        </div>
        <div className='flex gap-5'>
          <div className=' w-8/12 mt-5'>
            <Blogs handleBookmarks={handleBookmarks}></Blogs>
          </div>
          <div className=' w-4/12 mt-5'>
            <Bookmarks></Bookmarks>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
