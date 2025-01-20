import React from 'react'
import Navbar from './Navbar'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Footer from './Footer'

export default function Full_layout() {
    return (
        <div className=''>
            <Navbar />
            <Section2 />
            <Section3 />
            <Section4/>
            <Footer/>
        </div>
    )
}
