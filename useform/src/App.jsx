import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import './App.css'

function App() {

  const {register,handleSubmit,formState:{errors,isSubmitSuccessful}}=useForm();

  const onSubmit = (data) => console.log(data)


  return (
    <div  className='container'>
      <div className='innerContainer'>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          {isSubmitSuccessful?<div className='success'>Registration Sucessfull</div>:<div className='success'>Registartion Form</div>}
          <input type="text" {...register("firstname", {required:'First name required'})} id='firstname' placeholder='firstname'/> <br />
          <p>{errors.firstname?.message}</p>

          <input type="text" {...register('lastname',{required:'Last name required'})} id='lastname' placeholder='lastname' /> <br />
          <p>{errors.lastname?.message}</p>

          <input type="email" {...register('mail',{required:"Email required"})} id='mail' placeholder='E-mail' /> <br />
          <p>{errors.mail?.message}</p>
        
          <input type='password' {...register('password',{required:'password required', minLength:{value:4,message:"length should be greaer than 4 "}})} id='contact' placeholder='password' /> <br />
          <p>{errors.password?.message}</p>

          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default App