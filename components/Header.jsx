import Image from 'next/image'
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

// import the icons you need
import {
    faMapMarker
  } from "@fortawesome/free-solid-svg-icons";

import { Roboto } from 'next/font/google'
import Search from '../components/Searchsalonservice';
import Link from 'next/link';

// const [isActive, setIsActive] = useState(false);

// const handleClick = event => {
//   // 👇️ toggle isActive state on click
//   setIsActive(current => !current);
// };

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

function Header() {
  const [isActive, setIsActive] = useState(true);
  const handleClick = event => {
    setIsActive(current => !current);
    
  };
  
  return <div>
     <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
    <div className='mobile_header'>
      <div className='humberger_icons'>
      <a  className="humberger">
            <Image
              src="/humberger.png"
              alt="humberger"
              width={22}
              height={18}
              priority
            />
      </a>
      <a className='available_city'>
                <FontAwesomeIcon
                    icon={faMapMarker}
                    style={{ fontSize: 8, color: "#000" }}
                />
                Banglore
        </a>
        </div>
        <div className='whatsapp_icon'>
             <Image
              src="/whatsapp-icon.png"
              alt="whatsapp"
              width={26}
              height={26}
              priority
            />
        </div>
    </div>

    <div className='search_box'>
      <Search />
    </div>

    <header className="">
      <div className="main_header">
          <div className="main_logo">
            <Link href='/'>
          <Image
              src="/logo.svg"
              alt="Logo"
              className="logo"
              width={168}
              height={50}
              priority
            />
            </Link>
          </div>
          <div className="right_side">
             <nav>
                <ul className='main_menu'>
                    {/* <li><a href='/'>Home</a></li> */}
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href="/category_list">Category</Link></li>
                    <li><Link href="/category_list">Services</Link></li>
                    <li><Link href='/privacy_policy'>Offers</Link></li>
                    <li><Link href='/privacy_policy'>Membership</Link></li>
                    <li><Link href='/privacy_policy'>Franchise</Link></li>
                    {/* <li><a href="/category_list">Services</a></li>
                    <li><a href='/privacy_policy'>Offers</a></li>
                    <li><a href='/privacy_policy'>Membership</a></li>
                    <li><a href='/privacy_policy'>Franchise</a></li> */}
                </ul>
             </nav>
             <a className={`account_btn ${isActive ? '' : 'active'}`} onClick={handleClick}>

       
             
                Login / Sign Up
             </a>
             <a className='available_city'>
                <FontAwesomeIcon
                    icon={faMapMarker}
                    style={{ fontSize: 8, color: "#fff" }}
                />
                Banglore
             </a>
          </div>
      </div>
    </header>
  </div>
}

export default Header