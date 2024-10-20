import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AutContext'

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword ] = useState('')
  const [error, setError] = useState('')
  const {user, signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError('')
    try{
      await signUp(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  };
  
  return (
    <>
      <div className='w-full h-screen'>
      <img 
      src='https://assets.nflxext.com/ffe/siteui/vlv3/a795ee10-8c6d-467c-8159-254be2b69013/2aeb0b23-006c-4eb6-9997-51ecbbe9e16e/NG-en-20220912-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
      className='hidden sm:block absolute w-full h-full object-cover'
      />   
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            {
              error ? <p className='my-2 p-3 bg-red-600'>{error}</p> : null
            }
            <form onSubmit={handleSubmit} className='flex flex-col my-3'>
              <input 
                onChange={(e) => setEmail(e.target.value)}
                type='email' 
                placeholder="Email" 
                className='bg-gray-700 my-2 h-12 p-3'
              />
              <input 
                onChange={(e) => setPassword(e.target.value)}
                type='password' 
                placeholder='Password' 
                className='bg-gray-700 my-2 h-12 p-3'
              />
              <button className='w-full bg-red-600 py-3 my-6 font-bold'>Sign Up</button>
              <div className='flex justify-between'>
                <div className='flex'>
                  <input type='checkbox'></input>
                  <p className='pl-1 text-gray-500'>Remember me</p>
                </div>
                <div>
                  <p className=' text-gray-500'>Need help?</p>
                </div>
              </div>
              <p className='my-8'>
                <span className=' text-gray-500'>
                  Alread subscribed to Netflix?
                </span>{' '} 
                <Link to='/login'>
                Sign in
                </Link>
                </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup
