"use client"

import React from 'react'
import Carousel  from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { carouselSectionData, heroSectionData } from '@/utils/utilsData';
import Link from 'next/link';

const Carouse = () => {
    const responsive = {
        superLargeDesktop: {
         
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 8
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 6
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 4
        }
      };


  return (
   <div>
  <Carousel responsive={responsive}
  additionalTransfrom={0}
  arrows={false}
  autoPlay
  autoPlaySpeed={1}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={true}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover={true}
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay={false}
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
  customTransition="all 1.8s linear"
  transitionDuration={1800} >

   {carouselSectionData.map((product) => (
    <div className="carousel-preview" key={product.id}>
    <Link href={`/product/${product.id}`}>
    <div className='relative '>
    <Image className='w-full h-auto transition  duration-1000 transform hover:scale-110 cursor-pointer ' alt='image' src={product.img}/>
    <Image className='absolute  top-0 left-0 w-full h-auto opacity-0 transition  duration-300  transform hover:opacity-100 cursor-pointer' src={product.img1} alt='side-profile' />
    </div>
    </Link>
    </div>
   ))} 

 
 
  </Carousel>
  </div>
  )
}

export default Carouse

