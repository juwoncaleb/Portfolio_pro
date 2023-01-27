import React from 'react'
import { useRouter } from 'next/router'


export default function Header() {
    const router = useRouter()

    return (
        <div>
            <div className='flex justify-between header'>
                <p onClick={() => {
                    router.push('/');
                }} className='mt-4 cursor-pointer'>Juwoncaleb</p>
                <p onClick={() => {
                    router.push('/About');
                }} className='mt-4 cursor-pointer build'>Currently Building

                    <br />
                    LEXA
                </p>

                <p className='mt-4 build'> Based in London, UK
                    <br />
                    & Lagos, Nigeria
                </p>

                <p className='mt-4 cursor-pointer'><span onClick={() => {
                    router.push('/work');
                }}>Work , </span> <span className='cursor-pointer' onClick={() => {
                    router.push('/About');
                }}>About ,</span><span className='cursor-pointer' onClick={() => {
                    router.push('/contact');
                }}>Contact</span></p>

            </div>
        </div>
    )
}
