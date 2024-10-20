import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img 
          src='https://assets.nflxext.com/ffe/siteui/vlv3/a795ee10-8c6d-467c-8159-254be2b69013/2aeb0b23-006c-4eb6-9997-51ecbbe9e16e/NG-en-20220912-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          className='w-full h-[400px] object-cover'
        /> 
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <p className='text-3xl md:text-5xl font-bold'>My Shows</p>
        </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account  