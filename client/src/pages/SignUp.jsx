import React from 'react'
import SingUpForm from '../components/SignUpForm'
import BgBlur from '../assets/clips/BgBlur.png'

export const SignUp = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
      // Background style 
      const BgBLUR = {
        backgroundImage: `url(${BgBlur})`,
        backgroundSize: '85% 75%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display : 'flex',
        justifyContent: 'center',  
      }
    
  return (
    <>
    <div style={BgBLUR} className='lg:p-[7rem] md:p-0 sm:p-0 p-0'>
    <SingUpForm />
    </div>
    </>
  )
}
