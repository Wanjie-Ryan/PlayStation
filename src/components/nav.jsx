import React from 'react'
import './nav.css'
import {FaPlaystation} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'

function nav() {




  return (


    <>
    

        <nav className='main'>

            <div className="main-header">

                <p style = {{textAlign:'right', color:'white', fontSize:'1.3rem'}}>SONY</p>

            </div>

            <div className = 'sec-header'>


              <div className = 'left'>

                <div className="icon"><FaPlaystation/></div>

                <label className="options">Games</label>
                <label className="options">Hardware</label>
                <label className="options">Services</label>
                <label className="options">News</label>
                <label className="options">Shop</label>
                <label className="options">Support</label>




              </div>


              <div className = 'right'>


                <a href = '#home'>Sign In</a>

                <AiOutlineSearch/>




              </div>




            </div>


            







        </nav>
    
    
        



    </>


  )
}

export default nav