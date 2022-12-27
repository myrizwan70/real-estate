import React from 'react';
import {FcGoogle} from 'react-icons/fc'

const Social = () => {
  return (
    <button className='w-full flex items-center justify-center  bg-red-600 text-white px-7 py-3 uppercase text-sm font-semibold rounded shadow-md hover:bg-red-700 transition ease-in-out hover:shadow-lg active:bg-red-800'>
     <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
     continue with Google
    </button>
  )
}

export default Social