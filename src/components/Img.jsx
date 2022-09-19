import React from 'react'


//Images
import slide_1 from '../img/phone-slide-1.png'
import slide_2 from '../img/phone-slide-2.png'
import slide_3 from '../img/phone-slide-3.png'
import slide_4 from '../img/phone-slide-4.png'

const style_img='absolute opacity-0 animate-slides img mt-4'
const img = () => {
  return (
    <div className=' h-618px bg-phone bg-no-repeat bg-center overflow-hidden relative pl-img-px md:block hidden'>
            <img src={slide_1} alt="" className={style_img}/>
            <img src={slide_2} alt="" className={style_img}/>
            <img src={slide_3} alt="" className={style_img}/>
            <img src={slide_4} alt="" className={style_img}/>
        </div>
  )
}

export default img