// Import necessary libraries and components
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets.js';
import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';

const Navbar = () => {
  // State to manage the visibility of the sidebar menu for small screens
  const [visible, setVisible] = useState(false);

  // Destructure from context
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-0 font-medium">

      {/* Logo - Links to Home page */}
      <Link to='/'>
        <img 
          src={assets.logo} 
          alt="logo"
          className="w-16 sm:w-20 md:w-24 lg:w-28 object-contain transition-all duration-300"
        />
      </Link>

      {/* Navigation Links - Visible only on larger screens */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      {/* Right-side icons */}
      <div className='flex items-center gap-6'>
        {/* Search */}
        <img 
          onClick={() => setShowSearch(true)} 
          src={assets.search_icon} 
          alt="search" 
          className='w-5 cursor-pointer' 
        />

        {/* Profile */}
        <div className='group relative'>
          <img 
            onClick={() => token ? null : navigate('/login')} 
            src={assets.profile_icon} 
            alt="profile" 
            className='w-5 cursor-pointer' 
          />
          {token && (
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50'>
              <div className='flex flex-col gap-2 w-36 py-3 text-gray-500 rounded items-center shadow-md'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} alt="cart" className='w-5 min-w-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>

        {/* Hamburger Menu (mobile only) */}
        <img 
          onClick={() => setVisible(true)} 
          src={assets.menu_icon} 
          alt="menu" 
          className='w-5 cursor-pointer sm:hidden' 
        />
      </div>

      {/* Sidebar for mobile */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img src={assets.dropdown_icon} alt="dropdown" className='h-4 rotate-180' />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
