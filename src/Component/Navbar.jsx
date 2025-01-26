import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function Navbar() {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay((prevDisplay) => !prevDisplay);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setDisplay(true); // Show the menu for larger screens
      } else {
        setDisplay(false); // Hide the menu for smaller screens
      }
    };

    // Add the event listener
    window.addEventListener('resize', handleResize);

    // Run initially to set the correct menu state
    handleResize();

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
const run=()=>{
  setDisplay(false);
}
  return (
    <div>
      <nav className="flex  justify-between md:items-center  lg:px-40 md:px-10 custom:px-0    new-custom:px-0   pt-7 relative">
        {/* Logo */}
        <ul>
          <li className="font-lato font-bold lg:text-4xl sm:text-2xl text-2xl">
            <NavLink to="#">Portfolio</NavLink>
          </li>
        </ul>

        {/* Hamburger Menu (Mobile View) */}
        <ul onClick={handleClick} className="md:hidden">
          <li>
            <img className='w-7 bg-white'
              src="https://img.icons8.com/?size=50&id=8113&format=png"
              alt="Menu Icon"
            />
          </li>
        </ul>

        {/* Navigation Links */}
        <ul
          className={
            
            `${
            display
            
              ? 'absolute right-0 top-20 z-40 rounded-lg  bg-white bg-opacity-50 backdrop-blur-sm  md:bg-transparent md:static md:z-auto md:flex'
              : 'hidden md:flex'
          } flex-col md:flex-row items-center md:space-x-8 items text-xl `}
        >
          <li>
          <NavLink
  onClick={run}
  to="/"
  className={({ isActive }) =>
    isActive
      ? 'bg-custom-gradient text-transparent bg-clip-text rounded-2xl'
      : ''
  }
>
  Home
</NavLink>
          </li>
          <li>
            <NavLink onClick={run} to="about" className={({ isActive }) => (isActive ? 'bg-custom-gradient text-transparent bg-clip-text' : '')}>
              About 
            </NavLink>
          </li>
          <li>
            <NavLink onClick={run} to="skills" className={({ isActive }) => (isActive ? 'bg-custom-gradient text-transparent bg-clip-text' : '')}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink onClick={run} to="projects" className={({ isActive }) => (isActive ? 'bg-custom-gradient text-transparent bg-clip-text' : '')}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink onClick={run} to="contact" className={({ isActive }) => (isActive ? 'bg-custom-gradient text-transparent bg-clip-text' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Connect Button (Desktop Only) */}
        <ul className="hidden md:block ">
          <li>
            <button className=''>
              <NavLink onClick={run} to="contact" className="bg-custom-gradient  rounded-full p-4  ">
                Connect With Me
              </NavLink>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
