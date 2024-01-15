import React from 'react'
import Resume from '../Utilities/Resume.pdf'
const Hero = () => {
  const resume=()=>{
    
  }
  return (
    
      <div className='relative w-full h-[350px] flex flex-row justify-center my-[70px]'>
          <div className='absolute left-10 md:left-20 lg:left-60 flex flex-col'>
            <h2 className='text-[20px] text-bold text-gray-400 py-2'>Hi, I am</h2>
            <h1 className='text-[30px] text-bold text-gray-500 py-2'>BrijMohan Singh</h1>
            <h3 className='text-[18px] text-bold text-gray-500 py-2 '>Front End Developer</h3>
            <div className='py-2'>
              <a href={Resume} download><button className='border-[4px] rounded-full bg-blue-400 border-blue-700 w-[120px] hover:bg-gray-500 hover:text-white p-1 lg:p-2 text-[14px] justify-start'>Download CV</button></a>  
              <a href='#contact'><button className='border-[4px] rounded-full bg-blue-400 border-blue-700 w-[120px] hover:bg-gray-500 hover:text-white p-1 lg:p-2 text-[14px] mx-2'>Contact Info</button></a>  
            </div>
          </div>
          <div  className=''>
             <img className='absolute hidden md:block w-[200px] lg:w-[300px] md:w-[200px] h-[200px] lg:h-[300px] md:h-[200px] right-[50px] lg:right-[150px]  rounded-full mr-10 ' src={require('./Images/profile.jpg')} alt=''/>
          </div>
          
        </div>
   
  )
}

export default Hero