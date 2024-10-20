import React, {useState, useEffect} from 'react'
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import { UserAuth } from '../context/AutContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import {AiOutlineClose} from 'react-icons/ai'

const SavedShows = () => {

    const [movies, setMovies] = useState()
    const {user} = UserAuth()

    function slideLeft(){
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft -500
     }

     function slideRight(){
       var slider = document.getElementById("slider");
       slider.scrollLeft = slider.scrollLeft + 500
    };
    
    useEffect(() => {
      onSnapshot(doc(db, 'users', `${user?.email}`), (doc)=> {
        setMovies(doc.data()?.savedShows)
      })
    }, [user?.email])
    
    const moviesRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) =>{
        try {
            const result = movies.filter((item) => item.id !== passedID)
            await updateDoc(moviesRef, {
                savedShows: result
            })
        } catch (error) {
            console.log(error)
        }
    }



  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
      <div className='relative flex items-center group'>
      <MdChevronLeft 
        onClick={slideLeft} 
        size={40} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
      />
        <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar relative">
            {movies?.map((item, id) => (
                <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img
                className='w-full h-auto block'
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
            />
      <div className='hidden sm:block absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
          {item?.title}
        </p>
        <p onClick={()=> deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose size={20} /></p>
      </div>

      <div className='w-full h-full text-white flex justify-between p-2 sm:hidden'>
        <p className='white-space-normal text-[8px] md:text-sm font-bold flex items-center h-full text-center'>
          {item?.title}
        </p>
        <p onClick={()=> deleteShow(item.id)} className=' text-gray-300 '><AiOutlineClose size={12}/></p>
      </div>
    </div>
            ))}
           
        </div>
      <MdChevronRight onClick={slideRight} size={40} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
      </div>
    </>
  )
}

export default SavedShows
