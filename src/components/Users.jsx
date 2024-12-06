import React,{useEffect,useState} from 'react'


const Users = () => {
    const[userData,setUserData]=useState()
    const url = ""
  return (
        <div className='flex border justify-between items-center'>
            <div className='p-4'>
                <h2>Username</h2>
                <p>Name</p>
            </div>

            <button className='bg-blue-700 text-white rounded-md shadow-md px-4 h-[44px]'>
                Follow
            </button>
        </div>
  )
}

export default Users
