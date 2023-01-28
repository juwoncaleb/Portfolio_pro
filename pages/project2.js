import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function project2() {
    return (
        <div className='projcontent'>
            <Header />
            <img className='proj1' src='black.png' />





            <div className='intro project'>
                <p className='project_text'> I worked as a frontend developer at black list. I was hired during the rebrand of the company  , and i helped build it from ground up. </p>
               
                <p className='project_text mt-10'> I used Reactjs as my primary tool to create reusable components and styled with tailwind css. I lead a team of junior frontend engineers to work on the admin part of the user profile </p>

            </div>
            <div className='flex justify-center  livelinks'>
                <a className='mr-10' >GITHUB</a>
                <a href='https://blacklistng.com/' >LIVE LINK</a>
            </div>
        </div>
    )
}
