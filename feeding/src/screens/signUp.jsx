
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
// import { response } from 'express';

toast.configure()
const SignUp = () => {
  const [formData, setFormData] = useState({
      firstname:'',
      lastname:'',
      username:'',
      password:'',
      password2: '',
      age:'',
    textChange: 'Register'
  });
  const { firstname, lastname, username, password, password2, age, textChange } = formData;
  const handleChange = text => e => {
    setFormData({...formData, [text]: e.target.value})
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (firstname && lastname && username && password, password2 && age) {
      setFormData({...formData, textChange:'Submitting'});
      axios.post(`${process.env.REACT_APP_API_URL}/student/signup`, {
        firstname,
        lastname,
        username,
        password,
        password2,
        age 
      })
      .then(response => {
        setFormData({
          ...formData,
          firstname:'',
          lastname:'',
          username:'',
          password:'',
          password2,
          age:'',
          textChange: 'Submitted',
        });
        window.location = '/login'
    toast.success(response.data.message);
      })
      .catch(err => {
        setFormData({
          ...formData,
          firstname:'',
          lastname:'',
          username:'',
          password:'',
          password2:'',
          age:'',
       textChange: 'Register'
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
              Sign Up 
            </h1>
            <form
            className='min-w-full flex-10 mt-8 text-indigo-500'
            onSubmit={handleSubmit}>
            <div  className='mx-auto max-w-xl min-w-full'>
            <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                  type='text'
                  placeholder='Enter First Name'
                  onChange={handleChange('firstname')}
                  value={firstname}
                  required
                  // id='firstname'
                />
                 <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                  type='text'
                  placeholder='Enter Last Name'
                  onChange={handleChange('lastname')}
                  value={lastname}
                  required
                  // id='lastname'
                />
                 <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                  type='text'
                  placeholder='Enter Username'
                  onChange={handleChange('username')}
                  value={username}
                  required
                  // id='username'
                />
                 <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                  type='password'
                  placeholder='Enter Password'
                  onChange={handleChange('password')}
                  value={password}
                  required
                  // id='password'
                />
                   <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                  type='password'
                  placeholder='Confirm Password'
                  onChange={handleChange('password2')}
                  value={password2}
                  required
                  // id='password2'
                />
                 <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                  type='text'
                  placeholder='Enter Age'
                  onChange={handleChange('age')}
                  value={age}
                  required
                  // id='age'
                />
                <button
                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
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

export default SignUp;
