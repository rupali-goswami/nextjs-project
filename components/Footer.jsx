import Image from 'next/image'
// Import the FontAwesomeIcon component
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faEnvelope,
    faMapMarker,
    faPhone,
  } from "@fortawesome/free-solid-svg-icons";
  import Link from 'next/link';



function Footer() {
    return <div>
    <footer className="">
      <div className="main_footer container mx-auto clearfix">

        <div className='col-3 float-left'>
            <div className='footer_logo'>
            <Image
              src="/logo.svg"
              alt="Logo"
              className="logo"
              width={168}
              height={50}
              priority
            />
            </div>
            <p>GetLook is one of the Best Home Salon and Spa Services which brings 
                Best Beauty Professionals at your home and provides beauty services at home.</p>
        </div>
        <div className='col-9 float-left'>
            <div className='about_us menus'>
                <h3>About Us</h3>
                <ul>
                    <li><Link href='/privacy_policy'>Privacy Policy</Link></li>
                    <li><Link href='/terms_condition'>Term & Conditions</Link></li>
                    <li><Link href='/faq'>FAQ</Link></li>
                </ul>
            </div>
            <div className='site_map menus'>
                <h3>Site Map</h3>
                <ul>
                    <li><Link href='/privacy_policy'>Privacy Policy</Link></li>
                    <li><Link href='/terms_condition'>Term & Conditions</Link></li>
                    <li><Link href='/faq'>FAQ</Link></li>
                </ul>
            </div>
            <div className='contact_us menus'>
                <h3>Contact Us</h3>
                <ul>
                    <li>
                        <FontAwesomeIcon
                        icon={faMapMarker}
                        style={{ fontSize: 8, color: "#fff" }}
                        />
                    48, Lorem ipsum amet sit</li>
                    <li>
                        <a href='mailto:info@gmail.com'>
                        <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ fontSize: 8, color: "#fff" }}
                        />
                    info@gmail.com </a></li>
                    <li>
                        <a href="tel:0123456789">
                    <FontAwesomeIcon
                        icon={faPhone}
                        style={{ fontSize: 8, color: "#fff" }}
                        />
                    0123456789</a></li>
                </ul>
            </div>
        </div>

      </div>


      <div className='copyright container mx-auto clearfix'>
           <div className='copyright_txt'>
                ©GetLook Beauty Pvt. Ltd.
           </div>
           <div className='social_icons'>
                <ul>
                    <li className='icon'>
               
                            <Image
                            src="/twitter.png"
                            alt="Twitter"
                            width={23}
                            height={23}
                            priority
                            />
             
                    </li>
                    <li className='icon'>
                   
                            <Image
                            src="/facebook.png"
                            alt="Facebook"
                            width={23}
                            height={23}
                            priority
                            />
                    
                    </li>
                    <li className='icon'>
                
                            <Image
                            src="/instagram.png"
                            alt="Instagram"
                            width={23}
                            height={23}
                            priority
                            />
                      
                    </li>
                    <li className='icon'>
                    
                            <Image
                            src="/youtube.png"
                            alt="Youtube"
                            width={23}
                            height={23}
                            priority
                            />
                
                    </li>
                </ul>
           </div>
      </div>
    </footer>
    </div>
}

export default Footer