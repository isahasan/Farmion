import React from 'react'
import Popper from "popper.js";

import {Link} from 'react-router-dom'
import logo from '../Assets/logo/Logo.jpg'

function Navbar(){
  // dropdown props
  const [dropdownPopoverShow1, setDropdownPopoverShow1] = React.useState(false);
  const [dropdownPopoverShow2, setDropdownPopoverShow2] = React.useState(false);
  const btnDropdownRef1 = React.createRef();
  const popoverDropdownRef1 = React.createRef();
  const openDropdownPopover1 = () => {
    new Popper(btnDropdownRef1.current, popoverDropdownRef1.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow1(true);
  };
  const closeDropdownPopover1 = () => {
    setDropdownPopoverShow1(false);
  };

  const btnDropdownRef2 = React.createRef();
  const popoverDropdownRef2 = React.createRef();
  const openDropdownPopover2 = () => {
    new Popper(btnDropdownRef2.current, popoverDropdownRef2.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow2(true);
  };
  const closeDropdownPopover2 = () => {
    setDropdownPopoverShow2(false);
  };
    return (
        <div>
            <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-12 py-4 text-lg font-semibold text-gray-500 bg-white opacity-95 max-w-screen" >
                <div className="px-4" >
                     <Link to="/"><img src={logo} alt=""/></Link>
                </div> 
                <nav className="px-4">
                    <ul className="flex items-center px-4 ">
                        <li className="block px-6 py-3 mx-3 text-lg transition duration-500 ease-in-out border-b-2 cursor-pointer hover:text-green-500 hover:border-green-500 "><Link to="/Home">Home</Link></li>
                        <li ref={btnDropdownRef1}
                            onMouseEnter={() => {openDropdownPopover1()}} 
                            onMouseLeave={() => {closeDropdownPopover1() }}
                            className="block px-8 py-3 mx-3 text-lg transition duration-500 ease-in-out border-b-2 cursor-pointer hover:text-green-500 hover:border-green-500 "><Link to="/About">About</Link>
                            
                            <div
                                ref={popoverDropdownRef1}
                                className={ (dropdownPopoverShow1 ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg"}
                                style={{ minWidth: "12rem" }}
                                >
                                <Link to="/Experts" className="block max-w-full px-4 py-2 text-sm font-normal whitespace-no-wrap bg-transparent ">
                                    Experts
                                </Link>
                                <Link to="/Faq" className="block max-w-full px-4 py-2 text-sm font-normal whitespace-no-wrap bg-transparent ">
                                    FAQ
                                </Link>
                            </div>    
                        </li>
                        <li className="block px-8 py-3 mx-3 text-lg transition duration-500 ease-in-out border-b-2 cursor-pointer hover:text-green-500 hover:border-green-500 "><Link to="/Searvice">Searvice</Link></li>
                        <li className="block px-8 py-3 mx-3 text-lg transition duration-500 ease-in-out border-b-2 cursor-pointer hover:text-green-500 hover:border-green-500 "><Link to="/Gallery">Gallery</Link></li>
                        <li ref={btnDropdownRef2}
                            onMouseEnter={() => {openDropdownPopover2()}} 
                            onMouseLeave={() => {closeDropdownPopover2() }}
                            className="block px-8 py-3 mx-3 text-lg transition duration-500 ease-in-out border-b-2 cursor-pointer hover:text-green-500 hover:border-green-500 "><Link to="/Blog">Blog</Link>
                                <div
                                    ref={popoverDropdownRef2}
                                    className={ (dropdownPopoverShow2 ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg"}
                                    style={{ minWidth: "12rem" }}
                                    >
                                    <Link to="/SinglePost" className="block max-w-full px-4 py-2 text-sm font-normal whitespace-no-wrap bg-transparent ">
                                        Single Post
                                    </Link>
                                </div> 
                            </li>   
                        <li className="block px-8 py-3 mx-3 text-lg transition duration-500 ease-in-out border-b-2 cursor-pointer hover:text-green-500 hover:border-green-500 "><Link to="/Contact">Contact</Link></li>
                    </ul>
                </nav>
                <button className="px-4 ml-10" >
                    <Link to="/"><i className="fas fa-search"></i></Link>
                </button>
            </header>
        </div>
    )
}

export default Navbar


















