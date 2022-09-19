import React from 'react'

//COMPONENTS
import Img from './img'
import Form from './form'

const Main = () => {
  return (
    <section className=' max-w-sm md:max-w-none md:w-770px md:grid grid-cols-1 md:grid-cols-cont gap-x-5 mx-auto my-0 mt-10 mb-20'>
        <Img/>
        <Form/>
    </section>
  )
}

export default Main