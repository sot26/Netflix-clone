
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AutContext'

const Navbar = () => {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()
  // console.log(user)

  const handleLogout = async () => {
    try{
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className='flex justify-between p-4 z-[100] absolute w-full'>
        <Link to='/'>
        <p className='text-red-600 font-bold text-4xl cursor-pointer'>NETFLIX</p>
        </Link>
        {
          user?.email ? (
            <div className='text-white items-center'>
          <Link to='/account'>
          <button className='mr-4'>Account</button>
          </Link>
          <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded-lg'>Logout</button>
            
        </div>
          ) : (
            <div className='text-white items-center'>
          <Link to='/login'>
          <button className='mr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
          <button className='bg-red-600 px-6 py-2 rounded-lg'>Sign Up</button>
          </Link>
            
        </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
