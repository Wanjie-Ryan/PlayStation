import React from 'react'
import './nav.css'
import {FaPlaystation} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {RiArrowDropDownLine} from 'react-icons/ri'



function nav() {




  return (


    <>
    

        <nav className='main'>

            <div className="main-header">

                <p style = {{textAlign:'right', color:'white', fontSize:'1.3rem', fontWeight:'bold'}}>SONY</p>

            </div>

            <div className = 'sec-header'>


              <div className = 'left'>

                <FaPlaystation className='ps-icon'/>

                <label className="options">Games <RiArrowDropDownLine className='dropdown'/> </label>
                <label className="options">Hardware <RiArrowDropDownLine className='dropdown'/> </label>
                <label className="options">Services <RiArrowDropDownLine className='dropdown'/> </label>
                <label className="options">News <RiArrowDropDownLine className='dropdown'/> </label>
                <label className="options">Shop <RiArrowDropDownLine className='dropdown'/> </label>
                <label className="options">Support <RiArrowDropDownLine className='dropdown'/> </label>




              </div>


              <div className = 'right'>


                <a href = '#home' className='sign-in'>Sign In</a>

                <AiOutlineSearch className='search'/>




              </div>




            </div>


            







        </nav>
    
    
        



    </>


  )
}

export default nav