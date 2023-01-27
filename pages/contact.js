import { Head } from 'next/document'
import React from 'react'
import Header from '../components/Header'

export default function contact() {
    return (
        <div className='constact'>
            <Header />
            <p className='message'>SEND ME A MESSAGE</p>
            <h1 className='flex justify-center contact'>CALEBOMOJUWON@GMAIL.COM</h1>

            <p className='message'>OR CONNECT WITH <br/> ME ON SOCIALS</p>

            <div className='socials'>
                <p>TWITTER</p>
                <p>INSTAGRAM</p>
                <p>LINKEDIN</p>
            </div>
        </div>
    )
}
