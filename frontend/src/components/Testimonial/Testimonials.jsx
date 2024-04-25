import React from 'react'
import Slider from "react-slick"
import { av01,av02,av03,av04 } from '../../assets/images'

const Testimonials = () => {
  const settings = {
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,

    responsive:[
      {
       breakpoint:992,
       settings:{
        slidesToShow:2,
        slideToScroll:1,
        infinite:true,
        dots:true
       }
      },
      {
       breakpoint:576,
       settings:{
        slidesToShow:1,
        slideToScroll:1,
       }
      },
      {
       breakpoint:992,
       settings:{
        slideToShow:2,
        slideToScroll:1,
        infinite:true,
        dots:true
       }
      },
    ]
  }
  return (
    <>
     <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga corporis nesciunt earum aliquid, rem ad enim culpa nihil quaerat reprehenderit, magni ducimus suscipit architecto? Cumque consequatur delectus animi voluptate quas!</p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={av01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className='mb-0 mt-3'>Shyam jadhav</h5>
            <p>Customer</p>
          </div>
        </div>

      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga corporis nesciunt earum aliquid, rem ad enim culpa nihil quaerat reprehenderit, magni ducimus suscipit architecto? Cumque consequatur delectus animi voluptate quas!</p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={av02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className='mb-0 mt-3'>Lucy Sharma</h5>
            <p>Customer</p>
          </div>
        </div>

      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga corporis nesciunt earum aliquid, rem ad enim culpa nihil quaerat reprehenderit, magni ducimus suscipit architecto? Cumque consequatur delectus animi voluptate quas!</p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={av03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className='mb-0 mt-3'>Salman Khan</h5>
            <p>Customer</p>
          </div>
        </div>

      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga corporis nesciunt earum aliquid, rem ad enim culpa nihil quaerat reprehenderit, magni ducimus suscipit architecto? Cumque consequatur delectus animi voluptate quas!</p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={av04} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className='mb-0 mt-3'>imran Khan</h5>
            <p>Customer</p>
          </div>
        </div>

      </div>
     </Slider>
    </>
  )
}

export default Testimonials