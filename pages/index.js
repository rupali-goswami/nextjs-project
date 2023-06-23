import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';

//import '../styles/globals.css';
import Image from 'next/image';
import Slider from 'react-slick';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from "react";

const HomePage = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
          dots: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
          dots: true,
        }
      }
    ]
  };
  
  var getlook = {
    dots: false,
    arrows: false,
    infinite: true,
   // speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: false,
        }
      }
    ]
  }

  var bestseller = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: false,
        }
      }
    ]
  }

  var review = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
  }
  return (

    <>
    
    <div className='main_slider'>
    <Slider {...settings}>
      <div>
            <Image
              src="/01.png"
              alt="slide"
              width={700}
              height={700}
              style={{ height: '100%', width: '100%' }}
            />
      </div>
      <div>
            <Image
              src="/02.png"
              alt="slide"
              width={700}
              height={700}
              style={{ height: '100%', width: '100%' }}
              priority
            />
      </div>
      <div>
            <Image
              src="/03.png"
              alt="slide"
              width={700}
              height={700}
              style={{ height: '100%', width: '100%' }}
            />
      </div>
      <div>
            <Image
              src="/01.png"
              alt="slide"
              width={700}
              height={700}
              style={{ height: '100%', width: '100%' }}
            />
      </div>
      <div>
            <Image
              src="/02.png"
              alt="slide"
              width={700}
              height={700}
              style={{ height: '100%', width: '100%' }}
            />
      </div>
      <div>
            <Image
              src="/03.png"
              alt="slide"
              width={700}
              height={700}
              style={{ height: '100%', width: '100%' }}
            />
      </div>
    </Slider>
    </div>


<div className='shop_by_cat container mx-auto'>
  <div className='spacing_under clearfix'>
  <h2>Shop by Category</h2>
  <div className='categories_home mt-2 clearfix'>
    <div className='single_cat float-left'>
            <Image
              src="/cat1.png"
              alt="slide"
              width={250}
              height={250}
              style={{ height: '100%', width: '100%' }}
              className="rounded-full mx-auto"
            />
            <h3>Any 4 services in 999</h3>
    </div>
    <div className='single_cat float-left'>
            <Image
              src="/cat1.png"
              alt="slide"
              width={250}
              height={250}
              style={{ height: '100%', width: '100%' }}
              className="rounded-full mx-auto"
            />
            <h3>Any 4 services in 999</h3>
    </div>
    <div className='single_cat float-left'>
            <Image
              src="/cat1.png"
              alt="slide"
              width={250}
              height={250}
              style={{ height: '100%', width: '100%' }}
              className="rounded-full mx-auto"
            />
            <h3>Any 4 services in 999</h3>
    </div>
    <div className='single_cat float-left'>
            <Image
              src="/cat1.png"
              alt="slide"
              width={250}
              height={250}
              style={{ height: '100%', width: '100%' }}
              className="rounded-full mx-auto"
            />
            <h3>Any 4 services in 999</h3>
    </div>

    <div className='single_cat float-left'>
            <Image
              src="/cat1.png"
              alt="slide"
              width={250}
              height={250}
              style={{ height: '100%', width: '100%' }}
              className="rounded-full mx-auto"
            />
            <h3>Any 4 services in 999</h3>
    </div>
    <div className='single_cat float-left'>
            <Image
              src="/cat1.png"
              alt="slide"
              width={250}
              height={250}
              style={{ height: '100%', width: '100%' }}
              className="rounded-full mx-auto"
            />
            <h3>Any 4 services in 999</h3>
    </div>
    <div className='single_cat float-left'>
            <Image
              src="/cat1.png"
              alt="slide"
              width={250}
              height={250}
              style={{ height: '100%', width: '100%' }}
              className="rounded-full mx-auto"
            />
            <h3>Any 4 services in 999</h3>
    </div>
    <div className='single_cat float-left'>
            <Image
              src="/cat1.png"
              alt="slide"
              width={250}
              height={250}
              style={{ height: '100%', width: '100%' }}
              className="rounded-full mx-auto"
            />
            <h3>Any 4 services in 999</h3>
    </div>
    </div>
  </div>
</div>


<div className='get_look'>
  <h2 className='text-center'>WONDERING HOW GETLOOK WORKS</h2>
  <div className='container mx-auto'>
    <Slider {...getlook}>
        <div className='single_video'>
           <iframe className="first_slide_desk" src="https://www.youtube.com/embed/ZrcR9RvkyxI"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture full"  title="Getlook works 3"></iframe>
        </div>
        <div className='single_video'>
        <iframe className="first_slide_desk" src="https://www.youtube.com/embed/aPSKxQXkXyc" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture full" title="Getlook works 4"></iframe>
         </div>
        <div className='single_video'>
          <iframe className="first_slide_desk" src="https://www.youtube.com/embed/n8KHMutWBr8" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="Getlook works 5"></iframe>
         </div>
        <div className='single_video'>
           <iframe className="first_slide_desk" src="https://www.youtube.com/embed/ZrcR9RvkyxI" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture full" title="Getlook works 3"></iframe>
        </div>
    </Slider>
  </div>
</div>


<div className='best_selling_slider'>
<h2>BEST SELLING PACKAGES</h2>
<Slider {...bestseller}>
      <div>
            <Image
              src="/hair-removal.jpg"
              alt="slide"
              width={569}
              height={569}
              style={{ height: '100%', width: '100%' }}
            />
      </div>
      <div>
            <Image
              src="/whitening-package.jpg"
              alt="slide"
              width={569}
              height={569}
              style={{ height: '100%', width: '100%' }}
            />
      </div>
      <div>
            <Image
              src="/get_ready.jpg"
              alt="slide"
              width={569}
              height={569}
              style={{ height: '100%', width: '100%' }}
            />
      </div>
      <div>
            <Image
              src="/hair-removal.jpg"
              alt="slide"
              width={569}
              height={569}
              style={{ height: '100%', width: '100%' }}
            />
      </div>
      <div>
            <Image
              src="/whitening-package.jpg"
              alt="slide"
              width={569}
              height={569}
              style={{ height: '100%', width: '100%' }}
            />
      </div>
      <div>
            <Image
              src="/get_ready.jpg"
              alt="slide"
              width={569}
              height={569}
              style={{ height: '100%', width: '100%' }}
            />
      </div>
    </Slider>
</div>
    

<div className='why_getlook'>
  <h2 className='title'>WHY GETLOOK?</h2>  
  <div className='subtitle'>An idea to empower large number of specialists to
   deliver services at home like never experienced
   </div>

<div className='container mx-auto clearfix'>


   <div className='single_4 float-left left__side'>
      <div className='single_getlook'>
        <div className='getlook-txt'>
             <h3>Trained, Verified Beauticians</h3>
             <p>Professionals who are well trained and verified for on-job expertise.</p>
        </div>
        <div className='getlook_img'>
            <Image
              src="/why-getlook.png"
              alt="slide"
              width={380}
              height={380}
              style={{ height: '100%', width: '100%' }}
            />
        </div>
      </div>
   

   <div className='single_getlook'>
        <div className='getlook-txt'>
             <h3>Trained, Verified Beauticians</h3>
             <p>Professionals who are well trained and verified for on-job expertise.</p>
        </div>
        <div className='getlook_img'>
            <Image
              src="/why-getlook.png"
              alt="slide"
              width={380}
              height={380}
              style={{ height: '100%', width: '100%' }}
            />
        </div>
      </div>


      <div className='single_getlook'>
        <div className='getlook-txt'>
             <h3>Trained, Verified Beauticians</h3>
             <p>Professionals who are well trained and verified for on-job expertise.</p>
        </div>
        <div className='getlook_img'>
            <Image
              src="/why-getlook.png"
              alt="slide"
              width={380}
              height={380}
              style={{ height: '100%', width: '100%' }}
            />
        </div>
      </div>

      </div>



   <div className='single_4 float-left'>
        <div className='under_getlook'>
            <Image
              src="/why-getlook.png"
              alt="slide"
              width={380}
              height={380}
              style={{ height: '100%', width: '100%' }}
            />
        </div>
   </div>


   <div className='single_4 float-left'>


     <div className='single_getlook'>
        <div className='getlook_img'>
            <Image
              src="/why-getlook.png"
              alt="slide"
              width={380}
              height={380}
              style={{ height: '100%', width: '100%' }}
            />
        </div>
        <div className='getlook-txt'>
             <h3>Trained, Verified Beauticians</h3>
             <p>Professionals who are well trained and verified for on-job expertise.</p>
        </div>
      </div>

      <div className='single_getlook'>
        <div className='getlook_img'>
            <Image
              src="/why-getlook.png"
              alt="slide"
              width={380}
              height={380}
              style={{ height: '100%', width: '100%' }}
            />
        </div>
        <div className='getlook-txt'>
             <h3>Trained, Verified Beauticians</h3>
             <p>Professionals who are well trained and verified for on-job expertise.</p>
        </div>
      </div>

      <div className='single_getlook'>
        <div className='getlook_img'>
            <Image
              src="/why-getlook.png"
              alt="slide"
              width={380}
              height={380}
              style={{ height: '100%', width: '100%' }}
            />
        </div>
        <div className='getlook-txt'>
             <h3>Trained, Verified Beauticians</h3>
             <p>Professionals who are well trained and verified for on-job expertise.</p>
        </div>
      </div>

      </div>

   </div>
</div>    


<div className='best_brands'>
  <h2>WE USE BEST BRANDS IN 1-TIME USE PACKS</h2>
  <div className='container mx-auto clearfix'>
    <div className='full_col clearfix'>
      <div className='col-2 float-left'>
              <Image
                src="/lorial.png"
                alt="lorial"
                width={160}
                height={160}
                style={{ height: '100%', width: '100%' }}
              />
      </div>

      <div className='col-2 float-left'>
              <Image
                src="/lorial.png"
                alt="lorial"
                width={160}
                height={160}
                style={{ height: '100%', width: '100%' }}
              />
      </div>

      <div className='col-2 float-left'>
              <Image
                src="/lorial.png"
                alt="lorial"
                width={160}
                height={160}
                style={{ height: '100%', width: '100%' }}
              />
      </div>

      <div className='col-2 float-left'>
              <Image
                src="/lorial.png"
                alt="lorial"
                width={160}
                height={160}
                style={{ height: '100%', width: '100%' }}
              />
      </div>

      <div className='col-2 float-left'>
              <Image
                src="/lorial.png"
                alt="lorial"
                width={160}
                height={160}
                style={{ height: '100%', width: '100%' }}
              />
      </div>


      <div className='col-2 float-left'>
              <Image
                src="/lorial.png"
                alt="lorial"
                width={160}
                height={160}
                style={{ height: '100%', width: '100%' }}
              />
      </div>

    </div>
  </div>
</div>



<div className='review_slider'>
  <h2>WHAT OUR CUSTOMER HAS TO SAY ABOUT US</h2>
  <div className='review_home container mx-auto clearfix'>
    
    <Slider {...review}>
      <div className='single_review'>
            <Image
              src="/girl_review.svg"
              alt="slide"
              width={150}
              height={150}
              style={{ height: '100%', width: '100%' }}
            />
            <h5>Moyna Begum</h5>
            <p>The best home salon experience ever The beautician for one was a fine lady, goes by the name Poonam. The products used were of great quality and the beautician dedicatedly performed all the services
             I had asked for. I will recommend this to friends and avail this again.</p>
      </div>
      
      <div className='single_review'>
            <Image
              src="/girl_review.svg"
              alt="slide"
              width={150}
              height={150}
              style={{ height: '100%', width: '100%' }}
            />
            <h5>Moyna Begum</h5>
            <p>The best home salon experience ever The beautician for one was a fine lady, goes by the name Poonam. The products used were of great quality and the beautician dedicatedly performed all the services
             I had asked for. I will recommend this to friends and avail this again.</p>
      </div>


      <div className='single_review'>
            <Image
              src="/girl_review.svg"
              alt="slide"
              width={150}
              height={150}
              style={{ height: '100%', width: '100%' }}
            />
            <h5>Moyna Begum</h5>
            <p>The best home salon experience ever The beautician for one was a fine lady, goes by the name Poonam. The products used were of great quality and the beautician dedicatedly performed all the services
             I had asked for. I will recommend this to friends and avail this again.</p>
      </div>


      <div className='single_review'>
            <Image
              src="/girl_review.svg"
              alt="slide"
              width={150}
              height={150}
              style={{ height: '100%', width: '100%' }}
            />
            <h5>Moyna Begum</h5>
            <p>The best home salon experience ever The beautician for one was a fine lady, goes by the name Poonam. The products used were of great quality and the beautician dedicatedly performed all the services
             I had asked for. I will recommend this to friends and avail this again.</p>
      </div>


      <div className='single_review'>
            <Image
              src="/girl_review.svg"
              alt="slide"
              width={150}
              height={150}
              style={{ height: '100%', width: '100%' }}
            />
            <h5>Moyna Begum</h5>
            <p>The best home salon experience ever The beautician for one was a fine lady, goes by the name Poonam. The products used were of great quality and the beautician dedicatedly performed all the services
             I had asked for. I will recommend this to friends and avail this again.</p>
      </div>
    </Slider>
  </div>
</div>
{/* <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard image="https://imgur.com/uKQqsuA.png" name="Xbox" />
        <CategoryCard image="https://imgur.com/3Y1DLYC.png" name="PS5" />
        <CategoryCard image="https://imgur.com/Dm212HS.png" name="Switch" />
      </div>
      <div className={styles.large}>
        <CategoryCard image="https://imgur.com/qb6IW1f.png" name="PC" />
        <CategoryCard
          image="https://imgur.com/HsUfuRU.png"
          name="Accessories"
        />
      </div>
    </main> */}
</>
  );
};

export default HomePage;
