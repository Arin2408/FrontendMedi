import React, {useEffect,useRef,useState } from "react";
import userImg from "../../assets/images/avatar-icon.png";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import {BiMenu} from "react-icons/bi";
import { auth } from "../../firebase";



const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const [user, setUser] = useState(null); // State to hold user data from Firebase

  useEffect(() => {
    // Firebase listener for user authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Set user state based on Firebase authentication state
    });

    return () => unsubscribe(); // Cleanup the listener when the component unmounts
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user using Firebase authentication
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleStickyHeader = () => {
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() =>{
    handleStickyHeader();

    return ()=> window.removeEventListener('scroll', handleStickyHeader);
  });

  const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu');
  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <img src={logo} alt=" " />
          </div>

          {/* menu*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path}
                    className={navClass =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor "}>{link.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* nav right */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImg} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>
            
            {user ? (  
          <button
            className="bg-red-500 py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (   
          <Link to="/login">
            <button
              className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]"
            >
              Login
            </button>
          </Link>
        )}
            

            <span className="md:hidden" onClick={toggleMenu} >
              <BiMenu className="w-6 h-6 cursor-pointer"/>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
