import Image from 'next/image'
// Import the FontAwesomeIcon component
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { useSelector, useDispatch } from 'react-redux';
// import the icons you need
import {
    faEnvelope,
    faMapMarker,
    faPhone,
  } from "@fortawesome/free-solid-svg-icons";




function Mobilefooter() {
  const cart = useSelector((state) => state.cart);
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
    return <div className="mobilefooter">
      <div className='footer_btn'>
        <a className='footer_tab'>
            <Image
              src="/home_icon.svg"
              alt="home_icon"
              width={30}
              height={25}
              priority
            />
            Home
        </a>
        <a className='footer_tab'>
            <Image
              src="/category_icon.svg"
              alt="category_icon"
              width={30}
              height={25}
              priority
            />
            Category 
        </a>
        <a className='footer_tab'>
            <Image
              src="/order-icon.svg"
              alt="order_icon"
              width={30}
              height={25}
              priority
            />
            Orders
        </a>
        <a className='footer_tab'>
            <Image
              src="/offers_icon.svg"
              alt="offers_icon"
              width={30}
              height={25}
              priority
            />
            Offers
        </a>
        <a className='footer_tab'>
            <Image
              src="/cart_icon.svg"
              alt="cart_icon_icon"
              width={30}
              height={25}
              priority
            />
            Cart
            <span className='cart_count_item'>{getItemsCount()}</span>
        </a>
      </div> 
    </div>
}

export default Mobilefooter