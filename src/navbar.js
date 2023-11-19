import React from 'react'
import { FaAward } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='max-w-[1760px] flex flex-col'>
        <div className='flex flex-row w-full h-[60px] items-center justify-center text-black font-bold text-[18px] cursor-pointer bg-blue-100 shadow-md'>
            <div className=' flex ml-5'>
              <a href='/home' className='p-2 hover:scale-105 hover:text-orange-600 '>Home</a>  
              <a href='/about' className='p-2 hover:scale-105  hover:text-orange-600'>About</a>  
              <a href='/skills' className='p-2 hover:scale-105  hover:text-orange-600'>Skills</a>  
              <a href='/portfolio' className='p-2 hover:scale-105  hover:text-orange-600'>Portfolio</a>  
              <a href='/contact' className='p-2 hover:scale-105  hover:text-orange-600'>Contact</a>  
            </div>
        </div>
        <div className='relative w-full h-[350px] flex flex-row justify-center my-[70px]'>
          <div className='flex flex-col ml-4'>
            <h2 className='text-[20px] text-bold text-gray-400 py-2'>Hi, I am</h2>
            <h1 className='text-[30px] text-bold text-gray-500 py-2'>BrijMohan Singh</h1>
            <h3 className='text-[18px] text-bold text-gray-500 py-2 '>Front End Developer</h3>
            <div className='py-2'>
                <button className='border-[4px] rounded-full bg-blue-400 border-blue-700 w-[120px] hover:bg-gray-500 hover:text-white p-2 text-[14px] justify-start'>Download CV</button>
                <button className='border-[4px] rounded-full bg-blue-400 border-blue-700 w-[120px] hover:bg-gray-500 hover:text-white p-2 mx-2 text-[14px]'>Contact Info</button>
            </div>
          </div>
          <img  className='absolute right-0 h-full rounded-full mr-10' src="./Profile.jpg" alt=''/>
        </div>
        <div className='flex flex-col justify-center items-center'>
           <h3 className='text-[18px] text-gray-500'>Get to Know More</h3>
           <h1 className='text-[30px] font-bold'>About Me</h1>
           <div className='flex flex-row my-[100px]'>
                <div className='flex flex-col border-[2px] w-[200px] h-[100px] rounded-[20px] justify-center items-center text-center m-1'>
                    <FaAward size={25}/>
                    <h1 className='font-bold'>Experience</h1>
                </div>
                <div className='flex flex-col border-[2px] w-[200px] h-[100px] rounded-[20px] justify-center items-center text-center m-1'>
                    <MdPeople size={25} className='justify-center text-center'/>
                    <h1 className='font-bold'>Education</h1>
                </div>
                
           </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
           <h3 className='text-[18px] text-gray-500'>Explore My</h3>
           <h1 className='text-[30px] font-bold'>Skills</h1>
           <div className='flex flex-row my-[100px]'>
                <div className='flex flex-col border-[2px] w-[400px] h-[200px] rounded-[20px] justify-center items-center text-center m-1'>
                    <p className='text-[20px] font-bold'>FrontEnd Development</p>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <p className='flex flex-row items-center mx-[85px] my-[15px]'> <IoIosCheckmarkCircle />HTML</p>
                            <p className='flex flex-row items-center mx-[85px] my-[15px]'> <IoIosCheckmarkCircle />CSS</p>
                            <p className='flex flex-row items-center mx-[85px] my-[15px]'> <IoIosCheckmarkCircle />JAVASCRIPT</p>
                        </div> 
                        <div className='flex flex-col'>
                            <p className='flex flex-row items-center mx-[85px] my-[15px]'><IoIosCheckmarkCircle />TailWindCSS</p>
                            <p className='flex flex-row items-center mx-[85px] my-[15px]'><IoIosCheckmarkCircle />React</p>
                            <p className='flex flex-row items-center mx-[85px] my-[15px]'><IoIosCheckmarkCircle />Bootstrap</p>
                        </div>
                    </div>   
                </div>
                <div className='flex flex-col border-[2px] w-[400px] h-[200px] rounded-[20px] justify-center items-center text-center m-1'>
                    <MdPeople size={25} className='justify-center text-center'/>
                    <h1 className='font-bold'>Education</h1>
                </div>
                
           </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
           <h3 className='text-[18px] text-gray-500'>Browse My </h3>
           <h1 className='text-[30px] font-bold'>Recent Projects</h1>
           <div className='flex flex-row my-[100px]'>
                <div className='flex flex-col border-[2px] w-[300px] h-[400px] rounded-[20px] justify-center items-center text-center m-1'>
                    <div className='flex flex-col border-[2px] w-[250px] h-[300px] rounded-[20px] mb-[30px]'>
                        
                        
                    </div>
                    <div className='flex flex-row'>
                        <button className='border-[4px] rounded-full  bg-blue-400 border-blue-700 w-[120px] hover:bg-gray-500 hover:text-white p-2 text-[14px] justify-start'>GitHub</button>
                        <button className='border-[4px] rounded-full  bg-blue-400 border-blue-700 w-[120px] hover:bg-gray-500 hover:text-white p-2 mx-2 text-[14px]'>LiveDEmo</button>
                    </div>  
                </div>
                <div className='flex flex-col border-[2px] w-[300px] h-[400px] rounded-[20px] justify-center items-center text-center m-1'>
                    <div className='flex flex-col border-[2px] w-[250px] h-[300px] rounded-[20px] mb-[30px]'>
                            
                            
                    </div>
                    <div className='flex flex-row'>
                        <button className='border-[4px] rounded-full bg-blue-400 border-blue-700 w-[120px] hover:bg-gray-500 hover:text-white p-2 text-[14px] justify-start'>GitHub</button>
                        <button className='border-[4px] rounded-full bg-blue-400 border-blue-700 w-[120px] hover:bg-gray-500 hover:text-white p-2 mx-2 text-[14px]'>LiveDEmo</button>
                    </div>
                    
                </div>
                <div className='flex flex-col border-[2px] w-[300px] h-[400px] rounded-[20px] justify-center items-center text-center m-1'>
                    <div className='flex flex-col border-[2px] w-[250px] h-[300px] rounded-[20px] mb-[30px]'>
                            
                            
                    </div>
                    <div className='flex flex-row'>
                        <button className='border-[4px] rounded-full bg-blue-400 border-blue-700 w-[120px] hover:bg-gray-500 hover:text-white p-2 text-[14px] justify-start'>GitHub</button>
                        <button className='border-[4px] rounded-full bg-blue-400 border-blue-700 w-[120px] hover:bg-gray-500 hover:text-white p-2 mx-2 text-[14px]'>LiveDEmo</button>
                    </div>
                    
                </div>
                
           </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
           <h3 className='text-[18px] text-gray-500'>Get In Touch </h3>
           <h1 className='text-[30px] font-bold'>Contact Me</h1>
           <div className='flex flex-row my-[100px]'>
                <div className='flex flex-row border-[2px] w-[400px] h-[90px] rounded-[20px] justify-center items-center text-center m-1'>
                    <p className='flex flex-row justify-center items-center mr-4 cursor-pointer'><SiGmail />rathoreb@gmail.com</p>
                    <p className='flex flex-row justify-center items-center mr-4 cursor-pointer'><FaLinkedin />rathoreb@gmail.com</p>
                </div>
                
                
           </div>
        </div>

    </div>
  )
}

export default Navbar