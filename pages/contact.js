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
                <a href='https://twitter.com/juwoncaleb'>TWITTER</a>
                <a href='https://www.instagram.com/juwoncaleb/'>INSTAGRAM</a>
                <a href='https://github.com/Juwoncaleb/'>GITHUB</a>
                <a href='https://www.linkedin.com/in/soneye-omojuwon-01a30618a/'>LINKEDIN</a>
            </div>
        </div>
    )
}
