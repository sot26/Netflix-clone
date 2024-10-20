import axios from 'axios'
import React, { useState, useEffect } from 'react'
import requests from '../Request'


const Main = () => {
  const [movies, setMovies] = useState([])

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results)
    })
  }, [])
  // console.log(movie)

  const truncateString = (str) => {
    if(str?.length > 150){
      return str.slice(0, 150) + '...'
    } else {
      return str;
    }
  }


  return (
    <div className='w-full h-[600px] text-white'>
    <div className='w-full h-[600px] absolute bg-gradient-to-r from-black'></div>
      <img className='h-full w-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt={movie?.title} />
      <div className='absolute w-full top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold '>{movie?.title}</h1>
        <div className='my-4'>
          <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
          <button className='border  text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
        </div>
        <div>
          <p className='text-gray-400 text-sms'>Release: {movie?.release_date}</p>
          <p className='w-full md:max-w-[70%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview)}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Main
