import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useRouter } from 'next/router'

export default function LandingPage() {

  const router = useRouter()

  return (
    <div>
      <Header />
      <div className='hero_section mt-10'>
        <div className='mb-10'>
        <p>SOFTWARE </p>
        <p className='engin'>ENGINEER</p>
        </div>
        <img className='heroImg mb-2' src='her.jpg' />

      </div>
      <div className='jokesSection  flex justify-between'>
        <div className='flex'>
          <img className='arrow mr-8' src='arrow.png' />
          <p className='jokes'>You can call me JC or computer Whisperer <br />
            You debug code , I stare at my code , till the bugs starts confessing</p>
        </div>

        <p className='name'>JUWONCALEB</p>


      </div>
      <div className='flex justify-around aboutMe '>
        <p className='tag_1 mr-2'>01/</p>
        <div>
          <div className='intro'>
            <p className='tag_1_text'> I am a Front-end engineer able to build a Web presence from the ground up, </p>
            <p className='tag_1_text'>  from the conception, navigation, layout, programming and writing clean tests  .</p>
            <p className='tag_1_text'>Skilled at writing well-designed, testable, and efficient code using REACT also .</p>
            <p className='tag_1_text'>enjoy  working on the backend of web projects and passionate about Blockchain </p>

          </div>

          <p className='tag_1_text mt-20'>When I am not building or exploring new WEB experience , I am probably</p>
          <p className='tag_1_text '>Trashing my lil cousin in FIFA or at the gym training people </p>
          
          <div className='mt-14 more'>
            <p className='tag_1_text mt-8 cursor-pointer'><a href="https://drive.google.com/file/d/1_jreDaIBERwfmW7E0PxE-LkEUSKdEwwX/view?usp=sharing">VIEW RESUME</a> </p>
            <hr className='line cursor-pointer' />
          </div>



        </div>

      </div>
      <div className='flex justify-between project_header'>
        <p className=''>02/</p>
        <p>LANGUAGES , FRAMEWORK & TOOLS</p>
      </div>
      <div className='framewrk'>
        <div className='mt-14'>
          <p className='tag_1_text mt-8 cursor-pointer languages'>LANGUAGES & FRAMEWORK I USE TO CONFER BUSINESS SOLUTIONS ARE </p>
        </div>
        <div className='m'>
          <p className='tag_1_text mt-2 cursor-pointer languages'>HTML, CSS , TAILWIND CSS, NEXTJS , NODE.JS , REACT.JS(NEXT.JS), ETHER.JS </p>
          <p className='tag_1_text mt-2 cursor-pointer languages'>REDUX TOOLKIT , MONGODB , REST API, SOLIDITY, FIREBASE , AWS-S3 BUCKET</p>

        </div>
      </div>
      <div className='mt-14'>
        <div className='flex justify-between project_header'>
          <p className=''>03/</p>
          <p>RECENT <br /> PROJECTS</p>
          <p>CREATIVE <br /> DEVELOPMENT</p>
        </div>

        <div className='projects'>
          <div onClick={() => {
                    router.push('/project1')}} className='  flex proj justify-around'>
            <div  >
              <p className='lacHead'>LACOSTE </p>
              <p className='lacProject mt-14'>A full stack ecommerce store</p>
              <p className='lacProject'>Made with <span className='boldskill'>Nextjs</span> in the frontends</p>
              <p className='lacProject'>Made with <span className='boldskill'>Nextjs</span> in the backend</p>
              <p className='lacProject'>utilizes <span className='boldskill'>mongodb</span> as a database system</p>
              <div className='flex mt-4 cursor-pointer'>
                <p  className='lacProject view' >VIEW MORE</p>
                <img className='forward' src='arrow2.png' />
              </div>
            </div>
            <div>
              <img className='lac' src='lac.png' />
            </div>
          </div>
          <div onClick={() => {
                    router.push('/project2')}} className=' flex proj justify-around project2'>
            <div >
              <p className='lacHead'>BLACKLIST </p>
              <p className='lacProject mt-14'>Alternate database of chronic defaulters </p>
              <p className='lacProject'>for Debt Recovery. I worked as a frontend </p>
              <p className='lacProject'>Engineer in the admin panel of users. i used   </p>
              <p className='lacProject'><span className='boldskill'>Reactjs</span> for the creation of reusable  </p>
              <p className='lacProject'> components.i used <span className='boldskill'>redux toolkit</span> as </p>
              <p className='lacProject'>a state management system</p>
              <div className='flex mt-4 cursor-pointer'>
                <p  className='lacProject view'>VIEW MORE</p>
                <img className='forward' src='arrow2.png' />
              </div>
            </div>
            <div>
              <img className='lac' src='black.png' />
            </div>
          </div>
          <div className=' flex proj justify-around project2'>
            <div >
              <p className='lacHead'>SEND COINS </p>
              <p className='lacProject mt-14'>SEND CRYPTOCURRENCY ACROSS THE WORLD </p>
              <p className='lacProject'>i am passionate about the Blockchain  </p>
              <p className='lacProject'>i took a 31 hours tutorial on Blockchain   </p>
              <p className='lacProject'>To solidify my knowledge i created a project   </p>
              <p className='lacProject'> used tools such as <span className='boldskill'>ether.js, solidity, react.js</span></p>
              <div className='flex mt-4 cursor-pointer'>
                <p className='lacProject view'>VIEW MORE</p>
                <img className='forward' src='arrow2.png' />
              </div>
            </div>
            <div>
              <img className='lac' src='cryp.png' />
            </div>
          </div>
        </div>

        <div>
          <div className='flex justify-between project_header'>
            <p className=''>04/</p>
            <p>ABOUT ME</p>

          </div>
          <p className='mt-20 mb-40 flex justify-center info'>WHEN I AM NOT ON MY LAPTOP , <br /> I AM ENJOYING A GOOD TIME WITH MY FRIENDS , <br /> TRAINING AT THE GYM OR RIDING MY COOL BIKE</p>
          <div className='grid grid-cols-2 images  '>
            <img className='bike' src='bike.jpg' />
            <img className='aboutmePic' src='ride.jpg' />

          </div>
        </div>

        <div>
          <div className='flex justify-between project_header'>
            <p className=''>05/</p>
            <p>WANT TO WORK <br /> TOGETHER ?</p>
            <p>SEND ME A <br /> MESSAGE</p>

          </div>
        </div>
        <h1 className='flex justify-center contact'>CALEBOMOJUWON@GMAIL.COM</h1>
      </div>
      <Footer className />
    </div>
  )
}
