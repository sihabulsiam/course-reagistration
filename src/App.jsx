import { useState } from 'react'
import './App.css'
import Body from './components/Body/Body'
import Bookmark from './components/Bookmark/Bookmark'

function App() {
  const [bookmark, setBookmark] = useState([]);

  const handleAddCourseCard = card => {
    const newBookmark = [...bookmark, card];
    setBookmark(newBookmark);
  }

  return (
    <>
    <div className=' bg-slate-50 pt-6'>
      <div className='w-11/12 mx-auto'>
        <h1 className='text-4xl font-semibold text-center pb-6'>Course Registration</h1>
        <div className='md:flex'>
          <Body handleAddCourseCard={handleAddCourseCard}></Body>
          <Bookmark bookmark={bookmark}></Bookmark>
        </div>
      </div>
    </div>

    </>
  )
}

export default App

