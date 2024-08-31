import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {styles} from "../style.js";
import {navLinks} from "../constants/index.js";
import {logo,menu ,close} from  '../assets'

const Navbar = () => {
  const [active,setActive]= useState('`');
  const [toggle, setToogle] = useState(false);
  return (
    <nav
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={()=>{setActive("");
          window.scrollTo(0,0)

        }}>  <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
          <p className="text-white text-[18px] font-bold cursor-pointer ">neoochii <span className="sm:block hidden">| Dipak kumar Das</span></p>
        </Link>
        <ul className="list-none hidden sm:flex
        flex-row gap-10">
          {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px]
                font-medium cursor-pointer transition duration-150 ease-in-out transform -translate-x-1/2`}
              onClick={()=>{setActive(link.title)}}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
          ))}

        </ul>
        <div className="sm:hidden flex flex-1
        justify-end items-center ">
          <img src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer "
          onClick={()=> setToogle(!toggle)}/>

        </div>

      </div>

    </nav>
  )
}

export default Navbar