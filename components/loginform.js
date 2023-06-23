import { useState } from 'react'
import Image from 'next/image'

import { Roboto } from 'next/font/google'
//import nodemailer from "nodemailer";




const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

function Header() {

  
  const [inputs, setInputs] = useState({
    email: '',
  })
  
  const [form, setForm] = useState('')
  
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }
  
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    let data = {
      email
    }
    fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: data
  }).then((res) => {
    console.log('Response received')
    if (res.status === 200) {
      console.log('Response succeeded!')
      setSubmitted(true)
      inputs('')
    }
  })
  }
  
  return <div  className={`login_form_popup ${isActive ? 'active' : ''}`}>
    
    
     <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
     <div className='under_popup'>
        <div className='title'>
            <h2>Salon at Home</h2>
        </div>
        <div className='logo_popup'>
            <Image
              src="/logo.svg"
              alt="Logo"
              className="logo"
              width={168}
              height={50}
              priority
            />
            <p>Get beauty services at your Door step</p>
            <ul>
                <li>Quick</li>
                <li>Affordable</li>
                <li>Trusted</li>
            </ul>
            <form onSubmit={handleSubmit}>
                <div className='form_field'>
                   <span></span>
                   
                   <input
                    id='email'
                    type='email'
                    value={inputs.email}
                    onChange={handleChange}
                    className="form-control1"
                    placeholder="Enter Your Email Address"
                    required
                  />
                </div>
                <div className='agrree'>
                   <input id="checkBox" type="checkbox" name="checkBox" checked="" />
                   <label>
                     <span>I agree to </span>
                     <a href="#" target="_blank">Terms and Conditions</a>
                   </label> 
                </div>
                <input type='submit' value="Continue" />
                {form.state === 'loading' ? (
                  <div>Sending....</div>
                ) : form.state === 'error' ? (
                  <div>{form.message}</div>
                ) : (
                  form.state === 'success' && <div>Sent successfully</div>
                )}
            </form>
        </div>
     </div>     
  </div>
}




export default Header