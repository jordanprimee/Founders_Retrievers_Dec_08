import React from 'react'
import LogoTwoPng from "../assets/LogoTwoPng.png"
import { Link } from 'react-router-dom'


export const Home = () => {
  return (
    <>
    <div className='h-screen flex flex-col justify-center items-center'>
        <img src={LogoTwoPng} alt="" className='w-64'/>
        <div className="mt-16 flex flex-col justify-center items-center text-center">
          
          <p className="max-w-[35rem] mb-8 ">
           This is the official admin dashboard of Founders Retrievers website ! Sign in and take control over the website {" "}
          </p>
            <Link to="/signin">
              {" "}
              <button className="mt-6 px-3 pb-2 text-[#E83434] w-fit bg-transparent border border-2 border-[#E83434] hover:bg-[#E83434] hover:text-[#FFFFFF] text-xs font-semibold rounded-[0.65rem] text-xs px-5 py-2 ">
                SIGN IN to get started 
              </button>
            </Link>
          
        </div>
    </div>
    </>
  )
}
