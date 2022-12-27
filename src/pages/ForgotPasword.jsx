import React,{useState} from 'react';


const ForgotPasword = () => {

  const [email, setEmail] = useState('');

  

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
      <div className='flex justify-center flex-wrap items-center px-5 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80' 
          className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form >
            <input type='email' id='email' 
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6'  placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button type='submit' className='w-full bg-blue-600 text-white px-7 py-3 uppercase rounded shadow-md hover:bg-blue-700 transition ease-in-out hover:shadow-lg active:bg-blue-800'>Enter</button>
         
          </form>
          
        </div>
      </div>
    </section>
  )
}

export default ForgotPasword