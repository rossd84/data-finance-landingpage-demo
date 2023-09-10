import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from './ui/Logo'


function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const navList = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Company",
      link: "/"
    },
    {
      title: "Resources",
      link: "/"
    },
    {
      title: "About",
      link: "/"
    },
    {
      title: "Contact",
      link: "/"
    },
  ]
  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-8'>
      <Logo />
      {/* desktop */}
      <ul className="hidden md:flex">
        {navList.map((item, idx) => (
          <li key={item.title} className={idx === 0 ? 'p-4 text-[#00df9a] nav-hover' : 'p-4 nav-hover'}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>

      {/* mobile */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose className="hover:text-[#00df9a]" size={20} /> : <AiOutlineMenu className="hover:text-[#00df9a]" size={20} /> }
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-screen flex mt-16 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] top-0 w-[60%] h-screen flex mt-16 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'}>
        <ul className='uppercase p-4 w-[100%]'>
          {navList.map((item, idx) => (
          <li 
            key={item.title} 
            className={
              idx === navList.length - 1
              ? 'hover:text-[#00df9a]'
              : 'border-b border-gray-600 hover:text-[#00df9a]'}

          >
            <a className='block h-100 w-100 p-4' href={item.link}>{item.title}</a>
          </li>
        ))}

      </ul>
      </div>
    </div>
  )
}

export default Navbar