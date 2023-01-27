import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function about() {
    return (
        <div>
            <Header />
            <div>
                <div className='flex justify-between project_header'>
                    <p className=''>04/</p>
                    <p>ABOUT ME</p>

                </div>
                <p className=' flex justify-center aboutMee'>WHEN I AM NOT ON MY WORKING FOR BUSINESS ORGANIZATIONS  , <br /> I AM BRUNNING MY LOGISTIC COMPANY <br /></p>
                <p className='lexa mb-20'>LEXA</p>
                <img className='staff' src='staff.jpg' />
                <p className='mt-1 flex justify-center aboutMe mb-10'>LEXA IS A LOGISTIC COMPANY IN LAGOS , THAT CURENTLY DELIVERS PARCEL UP TO 25KG <br /> GOOGLE FORM LINKS ARE SENT TO ALL CUSTOMERS AND REQUESTS ARE BEING SENT TO THE MAIL OF EACH RIDER <br /></p>

                <div className='grid grid-cols-2 images  '>
                    <img className='bike' src='bike2.jpg' />
                    <img className='aboutmePic' src='falomo.jpg' />

                </div>
                <div className='accomplishment flex gap-8   mt-20 '>
                    <p className='mt-10 flex justify-center  '>BARELY 6 MONTHS WE HAVE A SUCCESS RATE OF 90% <br /> AVERAGING A DISTANCE OF 300KM DAILY AROUND LAGOS  <br /></p>
                    <p className='mt-10 flex justify-center '>HOWEVER USING GOOGLE LINKS SERVED ITS PURPOSE <br /> WITH THE GROWTH OF OUR FLEET EXPANSION PLANS ROLLOUT <br /></p>

                </div>
                <div className='expansion'>
                    <p className='  justify-center '> IN COLLABORATION WITH MY USER INTERFACE DESIGNER  <a className='kunle' href='https://www.behance.net/kunleolatunbode'> - KUNLE OLATUNBODE</a>  </p>

                    <p className='  justify-center '>  WE HAVE STARTED BUILDING THE A MOBILE APPLICATION FOR ALL MY CUSTOMER</p>


                    <img className='mob' src='mob.png' />

                    <img className='s1' src='s1.png' />


                    <div>
                    </div>
                    <div className='flex justify-between project_header'>
                        <p className=''>05/</p>
                        <p>GOAL</p>

                    </div>
                    <div className='mt-10 goalHeader'>
                        <p className=' mt-2 cursor-pointer goal '>WE WANT ORDERING FOR LOGISTIC TO BE AS EASY AS ORDERING AN UBER  </p>
                        <p className=' mt-2 cursor-pointer  goal'>TO SWIFTLY BE AT YOUR DOOR WHEN YOU NEED US TO MOVE YOUY EX STUFF FROM YOUR APARTMENT</p>
                        <p className=' mt-2 cursor-pointer goal'>AS A BUSINESS MAN TO HAVE THE RIGHT VECHILE AVALIABE AT YOUR WAREHOUSE WHEN YOU NEED US TO MOVE GOODS</p>


                    </div>



                    <div className='flex justify-between project_header'>
                        <p className=''>05/</p>
                        <p>VISION</p>

                    </div>
                    <div className='mt-10 goalHeader'>
                        <p className=' mt-2 cursor-pointer goal '>TO SUPPORT RENUABLE ENERGY AND HELP REDUCE CO2 EMISSION AND SAVE OUR BEAUTIFUL PLANET </p>
                        <p className=' mt-2 cursor-pointer  goal'>ROLLING OUT VECHILES AND BIKES THAT USE RENUABLE SOUCE OF ENERGY , REDUCING COST OF MAINTENANCE , SO THEREFORE OFFERING CHEAPER DELIVERY RATES IN COMPARISON WITH THE STANDARD RATES</p>

                    </div>
                    <div>
                        <div className='flex justify-between project_header'>
                            <p className=''>05/</p>
                            <p>WANT TO WORK <br /> TOGETHER ?</p>
                            <p>SEND ME A <br /> MESSAGE</p>

                        </div>
                    </div>
                    <h1 className='flex justify-center aboutMail'>CALEBOMOJUWON@GMAIL.COM</h1>


                </div>

            </div>
            <Footer />

        </div>
    )
}
