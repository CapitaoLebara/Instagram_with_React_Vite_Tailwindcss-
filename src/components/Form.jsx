import React from 'react'
//Images
import img from '../img/logo.png'
import img_apply from '../img/app-store.png'
import img_store from '../img/google-play.png'
import facebook from '../img/fb.png'

//STYLES
const style_input="w-full box-border h-9 text-sm rounded text-color-input border-solid border border-input-border bg-input-back mb-1 py-0 px-2 outline-none"
let btn_enable='trye'
let style_btn="appearance-none h-8 rounded border-0 bg-btn-color font-bold text-white w-full mt-3 "

const form = () => {
  return (
    <div>
            <form  className='border-solid border border-color-border px-10 py-5 bg-white text-center items-center flex flex-col mb-2'>
                <img src={img} alt=""  className='my-8  '/>
                <input type="text" placeholder='Phone number, username, or email' className={style_input}/>
                
                <input type="password" placeholder='Password'className={style_input} />
                <button type='submit' className={style_btn} disabled={btn_enable}>Log In</button>
                <div className='text-separetor-color uppercase font-bold text-xs my-4 mx-0 flex-row flex items-center justify-between w-full
                before:w-24 before:h-1px before:block before:bg-before-color 
                after:w-24 after:h-1px after:block after:bg-before-color'>or</div>
                <a href="/" className='text-facebook-color font-bold flex items-center mx-auto py-2 text-sm mt-3 mb-4'><img src={facebook} alt="Facebook" /> Log in whith Facebook</a>
                <a href="/" className='text-xs'>Forgot password?</a>
            </form>
            
            <div className=' border-color-border border border-solid bg-white text-center mb-4 text-sm p-5' >
                <p>Don't have an account? <a href="/" className='font-bold'>Sign up</a></p>
            </div>
            <div >
                <p className='text-center text-xs mb-4'>Get the app.</p>
                <div className='flex justify-center'>
                <a href="/"><img src={img_apply} alt="Download on the App Store" className='w-136px mx-1'/></a>
                <a href="/"><img src={img_store} alt="Download on the Google Play" className='w-136px mx-1'/></a>
                </div>
                
            </div>
        </div>
  )
}

export default form