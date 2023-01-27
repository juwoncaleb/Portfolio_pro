import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function work() {
    return (
        <div className='workk'>
            <Header />
            <div className='flex justify-around headproject'>
                <p className='project'>01/</p>
                <p className='project'>PROJECT</p>

            </div>
            <div className='workhead'>
                <p className='work'>A selected set of projects I have built with individuals and team.</p>
                <p className='work'>This is a mix of personal , collaborative and client owned projects</p>
            </div>
            <div className='mt-14'>
                <div className='projects'>
                    <div className='flex proj justify-around'>
                        <div >
                            <p className='lacHead'>LACOSTE </p>
                            <p className='lacProject mt-14'>A full stack ecommerce store</p>
                            <p className='lacProject'>Made with Nextjs in the frontends</p>
                            <p className='lacProject'>Made with nodejs in the backend</p>
                            <p className='lacProject'>utilizes mongodn as a database system</p>
                            <div className='flex mt-4 cursor-pointer'>
                                <p className='lacProject view'>VIEW MORE</p>
                                <img className='forward' src='forward.png' />
                            </div>
                        </div>
                        <div>
                            <img className='lac' src='lac.png' />
                        </div>
                    </div>
                    <div className='flex proj justify-around project2'>
                        <div >
                            <p className='lacHead'>BLACKLIST </p>
                            <p className='lacProject mt-14'>Alternate database of chronic defaulters </p>
                            <p className='lacProject'>for Debt Recovery. I worked as a frontend </p>
                            <p className='lacProject'>Engineer in the admin panel of users. i used   </p>
                            <p className='lacProject'>Reactjs for the creation of reusable  </p>
                            <p className='lacProject'> components.i used redux toolkit as </p>
                            <p className='lacProject'>a state management system</p>
                            <div className='flex mt-4 cursor-pointer'>
                                <p className='lacProject view'>VIEW MORE</p>
                                <img className='forward' src='forward.png' />
                            </div>
                        </div>
                        <div>
                            <img className='lac' src='black.png' />
                        </div>
                    </div>
                    <div className='flex proj justify-around project2'>
                        <div >
                            <p className='lacHead'>SEND COINS </p>
                            <p className='lacProject mt-14'>SEND CRYPTOCURRENCY ACROSS THE WORLD </p>
                            <p className='lacProject'>i am passionate about the Blockchain  </p>
                            <p className='lacProject'>i took a 31 hours tutorial on Blockchain   </p>
                            <p className='lacProject'>To solidify my knowledge i created a project   </p>
                            <p className='lacProject'> used tools such as ether.js, solidity, react.js</p>
                            <div className='flex mt-4 cursor-pointer'>
                                <p className='lacProject view'>VIEW MORE</p>
                                <img className='forward' src='forward.png' />
                            </div>
                        </div>
                        <div>
                            <img className='lac' src='cryp.png' />
                        </div>
                    </div>
                </div>



                <div>
                    <div className='flex justify-between project_header'>
                        <p className=''>02/</p>
                        <p>WANT TO WORK <br /> TOGETHER ?</p>
                        <p>SEND ME A <br /> MESSAGE</p>

                    </div>
                </div>
                <h1 className='flex justify-center contact'>CALEBOMOJUWON@GMAIL.COM</h1>
            </div>
            <Footer />
        </div>
    )
}
