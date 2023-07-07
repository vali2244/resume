import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="w-full h-20 flex">
        <div className="w-2/4 h-20  flex items-center justify-center text-4xl text-black-600 pr-48 font-bold font-sans">BABA VALI</div>
        <div className="w-2/4 h-20 ">
            <span className='
            flex items-center justify-evenly mt-7 text-xl gap-2'>
              {/* <Link>Home</Link> */}
            <a href="#about"><span className='hover:border-b-2 cursor-pointer'>About</span></a>
            <a href='#experiance' className='hover:border-b-2 '>Experiance</a>
            <a href='#projects' className='hover:border-b-2 '>Projects</a>
            <a href='#contact' className='hover:border-b-2 '>Contact</a>
            
</span>
        </div>
        
    </div>
   </>
  )
}

export default Header