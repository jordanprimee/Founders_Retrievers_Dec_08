import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/clips/Logo.png'

export const Footer = () => {
  return (
    
<footer className="bg-transparent  ">
    <div className="w-full max-w-screen-xl mx-auto  lg:py-8 md:py-8 sm:py-8 py-0">
        <div className="sm:flex sm:items-center sm:justify-around ">
            <ul className="flex  items-center justify-center mb-6 gap-6 text-sm font-medium text-[#000] lg:scale-100 sm:scale-75 md:scale-90 scale-50 dark:text-gray-400">
                <li>
                    <Link to='/'  className="text-[0.8rem] font-bold   hover:underline  ">HOME</Link>
                </li>
                <li>
                    <Link to='/aboutus' className="text-[0.8rem] font-bold  hover:underline">ABOUT US</Link>
                </li>
                {/* <li>
                    <Link to='/' className="text-[0.8rem] font-bold  mr-4 hover:underline md:mr-6">BELONGINGS</Link>
                </li> */}
                    <Link to="/" className="flex items-center mb-4 sm:mb-0">
                      <img src={Logo} className="lg:h-12 md:h-12 sm:h-12  mr-7 ml-6" alt="Logo" />
                    </Link>
                <li>
                    <Link to='/contactus' className="text-[0.8rem] font-bold   hover:underline ">GET IN TOUCH</Link>
                </li>
                {/* <li>
                    <Link to='/' className="text-[0.8rem] font-bold  mr-4 hover:underline md:mr-6 ">HELP CENTER</Link>
                </li> */}
                <li>
                    <Link to='/aboutus' className="text-[0.8rem] font-bold  hover:underline">FAQs</Link>
                </li>
            </ul>
        </div>
        <hr className="my-1 sm:my-6 md:my-6 border-[#86868675] border-dashed   dark:border-gray-700 lg:my-8" />
        <div className='flex justify-between md:my-6 sm:my-5  '>
          <ul className='flex lg:flex-row md:flex-row sm:flex-row flex-col-reverse justify-between lg:gap-4 md:gap-4 sm:gap-4 gap-0 lg:scale-100 sm:scale-75 md:scale-90 scale-50'>
            <li>
              <span className="justify-self-start block text-sm text-[#000] sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Founders Retrievers™</Link></span>
            </li>
            <li>
              <span className="justify-self-start block text-sm text-[#000] sm:text-center dark:text-gray-400"><Link to="/" className="hover:underline">Terms of use</Link></span>
            </li>
          </ul>
          <ul class="lg:scale-100 sm:scale-75 md:scale-90 scale-50 flex lg:flex-row md:flex-row  sm:flex-row  sm:flex-wrap lg:flex-wrap md:flex-wrap flex-col sm:items-center gap-6">
            <li className='text-sm font-semibold sm:text-center text-start  text-[#000] '>Connect:</li>
            <li className='flex flex-row gap-2'>
              <Link to='/' className='text-sm text-[#000] sm:text-center text-start  dark:text-gray-400 hover:underline' >Facebook</Link>
              <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M9.89231 21V13.2538H7V9.94249H9.89231C9.89231 6.42419 9.89231 2.07805 17 3.17198V6.03983C13.9231 5.71462 13.6154 6.66071 13.6154 9.94249H17L16.3231 13.2538H13.6154V21" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </li>
            {/* <li className='flex flex-row gap-2'>
              <Link to='/' className='text-sm text-[#000] sm:text-center dark:text-gray-400 hover:underline' >Telegram</Link>
              <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5469 12.638C12.3375 13.7944 11.7213 14.6466 11.2687 15.205C11.9205 15.6009 16.6293 18.4898 18.9828 20C19.2621 13.9086 20.444 7.46193 21 5C16.4379 6.15736 7.09914 10.0761 3 11.8909L8.0431 13.7944C9.55894 12.7925 13.3725 10.4133 16.5 8.91181" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </li> */}
            <li className='flex flex-row gap-2'>
              <Link to='/' className='text-sm text-[#000] sm:text-center dark:text-gray-400 hover:underline' >Twitter</Link>
              <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18.6443C7.56435 20.8078 17.1652 21.9701 19.0539 9.31123C19.715 9.01907 20.7994 8.21494 21 6.02928C20.3704 6.47935 19.1531 6.67711 17.9443 6.56341C15.9533 5.52114 11.9241 4.80102 11.7352 10.2587C9.61043 9.97449 4.99257 8.52478 3.51939 5C2.85835 7.55831 2.74503 13.4235 7.58009 16.4176C7.36761 16.7809 6.57908 17.5594 5.12478 17.7679" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </li>
          </ul>
        </div>
    </div>
</footer>


  )
}
