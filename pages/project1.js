import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function project1() {
    return (
        <div className='projcontent'>
            <Header />
            <img className='proj1' src='lac.png' />





            <div className='intro project'>
                <p className='project_text'> A FULL STACK ECOMMERCE STORE MADE WITH NEXTJS IN THE FRONTENDS MADE WITH NEXTJS IN THE BACKEND UTILIZES MONGODB AS A DATABASE SYSTEM. I always wanted to create an ECOMMERCE store for my friend.
                    Although being a frontend developer , i needed to ensure it had all features as a standard ECOMMERCE website.
                    Nextjs has a feature that makes creating api very easy and intituive .</p>
               
                <p className='project_text mt-10'> Mongodb was used as a database system , to store the items that was displayed in each categories.
                    For state management, i learnt how to use redux toolkit which was new to me and a bit difficult to get a hang on at first . I am still making further learning om it.
                    Authentication and Authorization was handled with Next Auth, and google auth was used for this . Image was stored in cloudinary , this reduced the load on the server</p>

            </div>
            <div className='flex justify-center livelinks '>
                <a className='mr-10' href='https://github.com/juwoncaleb/ECOMMERCE-STORE' >GITHUB</a>
                <a href='https://lacostestores.vercel.app/' >LIVE LINK</a>
            </div>
        </div>
    )
}
