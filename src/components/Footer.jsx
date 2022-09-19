import React from 'react'

const footer = ['Meta','About','Blog','Jobs','Help','API','Privacy','Terms','Top Accounts','Hashtags','Locations','Instagram Lite','Beauty','Dance','Fitness','Food & Drink','Home & Darden','Music','Visual Arts']

const Footer = () => {
  return (
    <footer className=' my-0 max-w-3xl md:max-w-4xl mx-auto text-center md:mb-8 text-14px' >
        <nav className='mb-3'>
            {
                footer.map((item,index)=>(
                    <a href="/" key={index} className='text-separetor-color  my-0 mx-2 mb-1 inline-block' >{item}</a>
                ))
            }
        </nav>
        <div>
            <span>English</span>
            <span>@ 2022 Instagram from Meta</span>
        </div>
    </footer>
  )
}

export default Footer