import React from 'react'
import { FaAward } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
const About = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
           <h3 className='text-[18px] text-gray-500'>Get to Know More</h3>
           <h1 className='text-[20px] lg:text-[30px] font-bold'>About Me</h1>
           <div className='flex flex-row my-[100px]'>
                <div className='flex flex-col border-[2px] w-[150px] lg:w-[200px] h-[80px] lg:h-[100px] rounded-[20px] justify-center items-center text-center m-1'>
                    <FaAward size={25}/>
                    <h1 className='text-[14px] lg:text-[15px] font-bold'>Experience</h1>
                    <p className='text-[12px] lg:text-[15px]'>FrontEnd Developer<br/>(Fresher)</p>
                </div>
                <div className='flex flex-col border-[2px] w-[150px] lg:w-[200px] h-[80px] lg:h-[100px] rounded-[20px] justify-center items-center text-center m-1'>
                    <MdPeople size={25} className='justify-center text-center'/>
                    <h1 className='text-[14px] lg:text-[15px] font-bold'>Education</h1>
                    <p className='text-[12px] lg:text-[15px]'>Btech Mechanical<br/>Web development</p>
                </div>  
                
           </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
           <h3 className='text-[18px] text-gray-500'>Explore My</h3>
           <h1 className='text-[20px] lg:text-[30px] font-bold'>Skills</h1>
           <div className='flex flex-col lg:flex-row my-[75px] lg:my-[100px] justify-center items-center'>
                <div className='flex flex-col border-[2px] border-slate-500 w-[300px] lg:w-[500px] h-[150px] lg:h-[300px] rounded-[20px] justify-center items-center text-center m-1'>
                    <p className='text-[20px] lg:text-[30px] text-slate-700 font-bold '>FrontEnd Development</p>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <p className='flex flex-row items-center text-[14px] lg:text-[18px]  mx-[40px] lg:mx-[85px] my-[8px] lg:my-[15px]'> <IoIosCheckmarkCircle className='size={25} lg:size={15}' style={{marginRight:'8px'}}/>HTML</p>
                            <p className='flex flex-row items-center text-[14px] lg:text-[18px]  mx-[40px] lg:mx-[85px] my-[8px] lg:my-[15px]'> <IoIosCheckmarkCircle className='size={25} lg:size={15}' style={{marginRight:'8px'}}/>CSS</p>
                            <p className='flex flex-row items-center text-[14px] lg:text-[18px]  mx-[40px] lg:mx-[85px] my-[8px] lg:my-[15px]'> <IoIosCheckmarkCircle className='size={25} lg:size={15}' style={{marginRight:'8px'}}/>JAVASCRIPT</p>
                        </div> 
                        <div className='flex flex-col'>
                            <p className='flex flex-row items-center text-[14px] lg:text-[18px] mx-[40px] lg:mx-[85px] my-[8px] lg:my-[15px]'><IoIosCheckmarkCircle className='size={25} lg:size={15}' style={{marginRight:'8px'}}/>React</p>
                            <p className='flex flex-row items-center text-[14px] lg:text-[18px] mx-[40px] lg:mx-[85px] my-[8px] lg:my-[15px]'><IoIosCheckmarkCircle className='size={25} lg:size={15}' style={{marginRight:'8px'}}/>TailWindCSS</p>
                            <p className='flex flex-row items-center text-[14px] lg:text-[18px] mx-[40px] lg:mx-[85px] my-[8px] lg:my-[15px]'><IoIosCheckmarkCircle className='size={25} lg:size={15}' style={{marginRight:'8px'}}/>Bootstrap</p>
                        </div>
                    </div>   
                </div>
                <div className='flex flex-col border-[2px] border-slate-500 w-[300px] lg:w-[500px] h-[150px] lg:h-[300px] rounded-[20px] justify-center items-center text-center m-1'>  
                    <p className='text-[20px] lg:text-[30px] text-slate-700 font-bold '>FrontEnd Development</p>
                    <div className='flex flex-row justify-between items-center mb-[50px]'>
                        <div className='flex flex-col'>
                            <p className='flex flex-row items-center text-[14px] lg:text-[18px] mx-[40px] lg:mx-[85px] my-[8px] lg:my-[15px]'> <IoIosCheckmarkCircle className='size={25} lg:size={15}' style={{marginRight:'8px'}}/>Git </p>
                            <p className='flex flex-row items-center text-[14px] lg:text-[18px] mx-[40px] lg:mx-[85px] my-[8px] lg:my-[15px]'> <IoIosCheckmarkCircle className='size={25} lg:size={15}' style={{marginRight:'8px'}}/>SQL</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='flex flex-row items-center text-[14px] lg:text-[18px] mx-[40px] lg:mx-[85px] my-[8px] lg:my-[15px]'> <IoIosCheckmarkCircle className='size={25} lg:size={15}' style={{marginRight:'8px'}}/>Wordpress</p>
                            <p className='flex flex-row items-center text-[14px] lg:text-[18px] mx-[40px] lg:mx-[85px] my-[8px] lg:my-[15px]'> <IoIosCheckmarkCircle className='size={25} lg:size={15}' style={{marginRight:'8px'}}/>SEO</p>
                        </div>
                    </div>
                </div>
                
           </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
           <h3 className='text-[18px] text-gray-500'>Browse My </h3>
           <h1 className='text-[20px] lg:text-[30px] font-bold'>Recent Projects</h1>
           <div className='flex flex-col  lg:flex-row my-[100px]'>
                <div className='flex flex-col border-[2px] w-[300px] h-[400px] rounded-[20px] justify-center items-center text-center m-1'>
                    <div className='flex flex-col border-[2px] w-[250px] h-[300px] rounded-[20px] mb-[30px]'>
                        <img className='bg-cover h-full rounded-[20px]' src={require('./Images/yumeat.png')} alt=''/>
                                                                           
                    </div>
                    <div className='flex flex-row'>
                     <a href='https://github.com/rathoreb881/yumeat' target='_blank'><button className='border-[4px] rounded-full  bg-blue-400 border-blue-700 w-[120px] hover:bg-gray-500 hover:text-white p-2 text-[14px] justify-start'>GitHub</button></a>   
                     <a href='https://rathoreb881.github.io/yumeat/' target='_blank'><button className='border-[4px] rounded-full  bg-blue-400 border-blue-700 w-[120px] hover:bg-gray-500 hover:text-white p-2 mx-2 text-[14px]'>LiveDemo</button></a> 
                    </div>  
                </div>
                <div className='flex flex-col border-[2px] w-[300px] h-[400px] rounded-[20px] justify-center items-center text-center m-1'>
                    <div className='flex flex-col border-[2px] w-[250px] h-[300px] rounded-[20px] mb-[30px]'>
                        <img className='bg-cover h-full rounded-[20px]' src={require('./Images/eShop.png')} alt=''/>  
                            
                    </div>
                    <div className='flex flex-row'>
                        <button className='border-[4px] rounded-full bg-blue-400 border-blue-700 w-[120px] hover:bg-gray-500 hover:text-white p-2 text-[14px] justify-start'>GitHub</button>
                        <button className='border-[4px] rounded-full bg-blue-400 border-blue-700 w-[120px] hover:bg-gray-500 hover:text-white p-2 mx-2 text-[14px]'>LiveDemo</button>
                    </div>
                        
                </div>
                <div className='flex flex-col border-[2px] w-[300px] h-[400px] rounded-[20px] justify-center items-center text-center m-1'>
                    <div className='flex flex-col border-[2px] w-[250px] h-[300px] rounded-[20px] mb-[30px] bg-cover'>
                        
                        <img className='bg-cover h-full rounded-[20px]' src='/Assets/profile.jpg' alt=''/>   
                            
                    </div>
                    <div className='flex flex-row'>
                        <button className='border-[4px] rounded-full bg-blue-400 border-blue-700 w-[120px] hover:bg-gray-500 hover:text-white p-2 text-[14px] justify-start'>GitHub</button>
                        <button className='border-[4px] rounded-full bg-blue-400 border-blue-700 w-[120px] hover:bg-gray-500 hover:text-white p-2 mx-2 text-[14px]'>LiveDemo</button>
                    </div>
                    
                </div>
                
           </div>
        </div>
        <div className='flex flex-col justify-center items-center'> 
           <h3 className='text-[18px] text-gray-500'>Get In Touch </h3>
           <h1 id='contact' className='text-[20px] lg:text-[30px] font-bold'>Contact Me</h1>
           <div className='flex flex-row my-[100px]'>
                <div className='flex  flex-col lg:flex-row border-[2px] w-[300px] lg:w-[400px] h-[70px] lg:h-[90px] rounded-[20px] justify-center items-center text-center m-1'>
                    <p className='flex flex-row justify-center items-center mr-4 cursor-pointer'><SiGmail />rathoreb@gmail.com</p>
                    <p className='flex flex-row justify-center items-center mr-4 cursor-pointer'><FaLinkedin />rathoreb@gmail.com</p>
                </div>
                
                
           </div>
        </div>
    </div>
  )
}

export default About