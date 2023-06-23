import Image from 'next/image'
import { addToCart } from '../redux/cart.slice';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import styles from '../styles/CartPage.module.css';
import path from 'path'

import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useState, useEffect } from 'react';

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
   faClock,
  } from "@fortawesome/free-solid-svg-icons";



function ProductCard({ item }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
    const [data, setData] = useState(null);
  
    useEffect(() => {
        fetch('https://dummyjson.com/products')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.log(error));
      }, []);

  
      
      
    var categorylist = {
        dots: false,
        arrows: false,
        infinite: true,
      //  speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3,
        variableWidth: true,
        autoplay: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      };
      const addtocart = (item)=>{
        console.log(item);
      }
  return <div>
       <style jsx global>{`
       body {
          background: none;
        }
      `}</style>

<style>{`
        footer, header {
          display: none;
        }
        @media (max-width: 991px){
          .mobile_header {
              display: none;
          }
          .search_box {
            display: none;
          }
          .cart_listing {
            display: none;
          }
          .products_catwise {
            padding-bottom: 70px;
          }
        }
      `}</style>

      <div className='fixed_cat'>
        <div className="banner_css_desktop">
             <p className="banner_css_desktop_para">SALON AT HOME</p>
        </div>

        <div className="desktop_services_div fixed-top">
            <div className='container mx-auto'>
                <div className='under_catt'>
                    <div className='backword_icon'>
                        <img src='/backword_icon.svg' />
                    </div>
                    <Slider {...categorylist}>
                    <div className="offers"><button className="img custom-button-set false">Any 4 Services in 999</button></div>
                    <div className="offers"><button className="img custom-button-set false">Best Selling Packages</button></div>
                    <div className="offers"><button className="img custom-button-set disabled">Skin/Face</button></div>
                    <div className="offers"><button className="img custom-button-set false">Waxing</button></div>
                    <div className="offers"><button className="img custom-button-set false">Pedi/Mani</button></div>
                    <div className="offers"><button className="img custom-button-set false">Hair</button></div>
                    <div className="offers"><button className="img custom-button-set false">Body Massage &amp; Polishing</button></div>
                    <div className="offers"><button className="img custom-button-set false">99 Store</button></div>
                    <div className="offers"><button className="img custom-button-set false">Makeup &amp; Hair Styling</button></div> 
                    </Slider>
                </div>
            </div>
        </div>
</div>

        <div className='filter_list container mx-auto clearfix'>
            <div className='subcategory_list'>
               <ul>
                <li className='active'>
                    <a>Basic Facials - Under 999</a>
                </li>
                <li>
                    <a>Advance Facial</a>
                </li>
                <li>
                    <a>Clean Up</a>
                </li>
                <li>
                    <a>DTan Pack</a>
                </li>
                <li>
                    <a>Bleach</a>
                </li>
                <li>
                    <a>Threading</a>
                </li>
               </ul>
            </div>
            <div className='products_catwise'>
               <div className="section-title service_title"><p className="section-title__inner service_card_head">Basic Facials - Under 999</p></div>
          
      {data ? (
        <div className='cat_lists'>
          {data.products.map(item => (
            <div key={item.id} className='single_product'>

                <img src={item.thumbnail} alt='' />
                <div className='pro_details'>
                    <div className='left_pr'>
                   <h2>{item.title}</h2>
                   <div className='price'>
                     ₹ {item.price}
                   </div>
                   <div className='timer'>
                       <FontAwesomeIcon
                        icon={faClock}
                        style={{ fontSize: 12, color: "#000" }}
                        /> 230 min
                      </div>
                   </div>

                   <div className='right_cart'>
             
                      {/* <button onClick={()=>addtocart()}></button> */}

                      <button onClick={() => dispatch(addToCart(item))}> ADD + </button>
                   </div>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}

            </div>
            <div className='cart_listing'>

            {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
        <div className='cart_itms'>
        <p className="section-title__inner service_card_head">Your Cart ({getItemsCount()})</p>

<div className='scroll_t'>
          {cart.map((item) => (
            <div className="cart_single_item">
              <div className='cart__item'>
                <div className="cart_img">
                  <img src={item.thumbnail} alt='' height="90" width="65" />
                </div>
                <div className='info_pro'>
                  <h3>{item.title}</h3>
                  <p>$ {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className={styles.buttons}>
                    <button onClick={() => dispatch(incrementQuantity(item.id))}>
                      +
                    </button>
                    <button onClick={() => dispatch(decrementQuantity(item.id))}>
                      -
                    </button>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                      x
                    </button>
                  </div>
                </div>
              </div>


              
           
              <div className='pricing'>$ {(item.quantity * item.price).toFixed(2)}</div>
            </div>
          ))}
          <div className='total_grand'>Grand Total: $ {getTotalPrice().toFixed(2)}</div>
          </div>
          
          </div>
        </>
      )}
   
           
            </div>
        </div>


    </div>
}



export default ProductCard