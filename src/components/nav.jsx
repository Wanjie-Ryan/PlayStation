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



                <div className="games">
                  
                  <label className="options">Games <RiArrowDropDownLine className='dropdown'/> </label>

                  <img src = '' className ='img-products'/>

                  <p>PS5</p>

                  


                </div>
                  

                <div className="hardware">

                <label className="options">Hardware <RiArrowDropDownLine className='dropdown'/> </label>


                </div>


                <div className="services">

                <label className="options">Services <RiArrowDropDownLine className='dropdown'/> </label>

                </div>



                <div className="news">

                <label className="options">News <RiArrowDropDownLine className='dropdown'/> </label>

                </div>

                
                <div className="shop">

                <label className="options">Shop <RiArrowDropDownLine className='dropdown'/> </label>

                </div>


                <div className="support">


                <label className="options">Support <RiArrowDropDownLine className='dropdown'/> </label>

                </div>





              </div>


              <div className = 'right'>


                <div className="btn">
                  
                  <a href = '#home' className='sign-in'>Sign In</a>

                  </div>
                  

                <div className="searchbtn">

                  <AiOutlineSearch className='search'/>

                </div>




              </div>




            </div>


            







        </nav>
    
    
        



    </>


  )
}

export default nav