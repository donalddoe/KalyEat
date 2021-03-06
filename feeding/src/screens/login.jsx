
import React, { useState } from 'react';
import {  toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()



const Login = () => {
  const [formData, setFormData] = useState({
      username:'',
      password:'',
    textChange: 'Login'
  });
  const { username, password,  textChange } = formData;
  const handleChange = text => e => {
    setFormData({...formData, [text]: e.target.value})
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (username && password ) {
      setFormData({...formData, textChange:'Submitting'});
      axios.post(`${process.env.REACT_APP_API_URL}/users/signin`, {
        username,
        password,
    
      })
      .then(response => {
        setFormData({
          ...formData,
          username:'',
          password:'',
          textChange: 'Verified',
        });
        console.log(response.data)
        window.location = '/'
    toast.success(response.data.message);
      })
      .catch(err => {
        setFormData({
          ...formData,
          username:'',
          password:'',
       textChange: 'Login'
        });
        console.log(err.response);
        toast.error(err.response.data.errors);
      });
    }
  }
   
  return (
    <div className='min-h-full bg-gray-100 text-gray-900 flex justify-center'>
      <div className='max-w-screen-lg m-25 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
        <div className='mt-12 flex flex-col items-center'>
        <h1 className='text-4xl xl:text-5xl font-extrabold'>
              Login
            </h1>
            <form
            className='min-w-full flex-10 mt-8 text-indigo-500'
            onSubmit={handleSubmit}>
            <div  className='mx-auto max-w-xl min-w-full'>
           
                 <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                  type='text'
                  placeholder='Enter Username'
                  onChange={handleChange('username')}
                  value={username}
                  required
                />
                 <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                  type='password'
                  placeholder='Enter Password'
                  onChange={handleChange('password')}
                  value={password}
                  required
                />
                <button
                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-sign-in-alt fa 1x w-6  -ml-2' />
                  <span className='ml-3'>{textChange}</span>
                </button>
            </div>
            </form>
        </div>
        </div>
      </div>
    </div>
  )

}

export default Login;
