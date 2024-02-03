import React from 'react'

function Header() {
  return (
    <div className='w-full h-[4.5rem] xl:h-32 text-black flex justify-center items-center xl:flex xl:flex-col xl:justify-end shadow-md'>
        <div className='xl:hidden sm:w-[90%] md:w-5/6 h-5/6 flex justify-between items-center'>
              
              <div className='h-14 w-14 flex items-center'>
                <img src='https://static.vecteezy.com/system/resources/previews/000/612/670/original/vector-letter-b-arrow-logo-design-concept-template.jpg' alt='no_logo'/>
              </div>
             
              
              <div class="flex gap-x-3 h-6">
                <svg class="w-6 h-6 cursor-pointer" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3C385.253 297.143 397.481 260.437 397.44 222.72C397.44 126.38 319.06 48 222.72 48C126.38 48 48 126.38 48 222.72C48 319.06 126.38 397.44 222.72 397.44C260.437 397.481 297.143 385.253 327.3 362.6L421.39 456.69C426.153 460.948 432.365 463.22 438.751 463.042C445.137 462.863 451.212 460.246 455.729 455.729C460.246 451.212 462.863 445.137 463.042 438.751C463.22 432.365 460.948 426.153 456.69 421.39ZM97.92 222.72C97.92 198.037 105.239 173.908 118.953 153.385C132.666 132.862 152.157 116.866 174.961 107.42C197.765 97.974 222.858 95.5026 247.067 100.318C271.276 105.133 293.513 117.019 310.967 134.473C328.421 151.927 340.307 174.164 345.122 198.373C349.937 222.582 347.466 247.675 338.02 270.479C328.574 293.283 312.578 312.774 292.055 326.487C271.532 340.201 247.403 347.52 222.72 347.52C189.633 347.48 157.913 334.319 134.517 310.923C111.121 287.527 97.9597 255.807 97.92 222.72Z" fill="currentColor"></path></svg><svg class="w-6 h-6 cursor-pointer" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M88 152H424" stroke="currentColor" stroke-width="48" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M88 256H424" stroke="currentColor" stroke-width="48" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M88 360H424" stroke="currentColor" stroke-width="48" stroke-miterlimit="10" stroke-linecap="round"></path></svg>
              </div>
                
        </div>
        <div className='hidden xl:flex flex-col w-[87%] h-[7.4rem] justify-between'>
          <div className='flex flex-row items-center justify-between h-[50%]'>
            <a href='https://th.bing.com/th/id/OIP.5GjkCGl6y5faSqAfS5JC_AHaEK?rs=1&pid=ImgDetMain' className='w-32 h-full cursor-pointer'>
              <img src='https://th.bing.com/th/id/OIP.5GjkCGl6y5faSqAfS5JC_AHaEK?rs=1&pid=ImgDetMain'></img>
            </a>
            <div className ="border h-12 border-black flex items-center px-5 rounded-lg w-[70%] bg-white">
              <input className="focus:outline-none text-gray-900 w-full placeholder:text-gray-650" type="text" placeholder="Search by product title" />
            </div>
            <button className="opacity-80 h-[80%] bg-orange-500 text-white hover:opacity-100 text-sm px-3 py-[10px] medium:text-base medium:px-6 medium:py-3 font-semibold rounded-md flex justify-center items-center cursor-pointer">Login / Register</button>
          </div>


          <div className='flex justify-between h-[50%] items-center'>
            <div className='w-full h-[75%] flex justify-between items-center'>
              <a className='text-md p-4  font-bold shadow-sm cursor-pointer'>Home<svg className="h-6 inline-block w-4 hover:bg-slate-500 ml-1" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M112 184L256 328L400 184" stroke="currentColor" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
              <a className='text-md p-4 font-bold shadow-sm cursor-pointer hover:shadow-lg hover:bg-slate-300'>Live Chat</a>
              <a className='text-md p-4 font-bold shadow-sm cursor-pointer hover:shadow-lg hover:bg-slate-300'>Create Courses</a>
              <a className='text-md p-4 font-bold shadow-sm cursor-pointer hover:shadow-lg hover:bg-slate-300'>View Courses</a>
              <a className='text-md p-4 font-bold shadow-sm cursor-pointer hover:shadow-lg hover:bg-slate-300'>Contact Us</a>
              
            </div>    
          </div>
        </div>
    </div>
  )
}

export default Header