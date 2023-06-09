import React, {useState} from 'react'
import './nav.css'
import {FaPlaystation} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {RiArrowDropDownLine} from 'react-icons/ri'
import ps5 from '../../Pics/PS5.png'
import {MdCircle} from 'react-icons/md'


function Nav() {


  const [toggle, settoggle] = useState(false)



  const show =()=>{

    settoggle(!toggle)
  }

  const productclassname = toggle ? 'products' : 'hide-products'


  const [Toggle, setToggle] = useState(false)



  const showhardware =()=>{

    setToggle(!Toggle)
  }

  const hardwareclassname = Toggle ? 'hardware-products' : 'hidehardware-products'


  const [Toggleservice, setToggleservice] = useState(false)



  const showservice =()=>{

    setToggleservice(!Toggleservice)
  }

  const serviceclassname = Toggleservice ? 'service-products' : 'hideservice-products'



  const [search, setsearch] = useState(false)

  const [showbackdrop, setshowbackdrop] =useState(false)

  const showsearch =()=>{

    setsearch(!search)
    
    setshowbackdrop(!showbackdrop)
  }

  const searchclass = search ? 'es ' : 'es-hide'

  const backdropclass = showbackdrop ? 'back-drop':''

  
  
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
                  

                  <div onClick={show}>

                    <label className="options">Games <RiArrowDropDownLine className='dropdown'/> </label>

                  </div>

                </div>
                  

                <div className="hardware">

                <div onClick={showhardware}>

                  <label className="options">Hardware <RiArrowDropDownLine className='dropdown'/> </label>

                </div>


                </div>


                <div className="services">

                <div onClick={showservice}>
                  
                  <label className="options">Services <RiArrowDropDownLine className='dropdown'/> </label>
                </div>

                </div>



                {/* <div className="news">

                <label className="options">News <RiArrowDropDownLine className='dropdown'/> </label>

                </div> */}

                
                {/* <div className="shop">

                <label className="options">Shop <RiArrowDropDownLine className='dropdown'/> </label>

                </div> */}


                {/* <div className="support">


                <label className="options">Support <RiArrowDropDownLine className='dropdown'/> </label>

                </div> */}

              </div>



              


              <div className = 'right'>


                <div className="btn">
                  
                  <a href = '#home' className='sign-in'>Sign In</a>

                  </div>
                  

                <div className="searchbtn">

                  <AiOutlineSearch className='search' onClick={showsearch}/>



                  {/* 'expanded-search back-drop' */}

                  <div className= { ` expanded-search ${backdropclass}` }>

                    <div className={searchclass} >

                        <div className="lbl-com">
                          
                          <div className="sta com">
                            
                          <label>PlayStation.com </label>
                          </div>

                        <div className="dropdown-arrow"> <RiArrowDropDownLine className='dropdown' /> </div>

                        </div>

                        <div className="lines">
                          
                        <span className="line"></span>
                        </div>


                        <div className="input">
                          
                        <input type="text" placeholder ='Search PlayStation.com ' className="searching" />
                        </div>

                       <div className='outline-search'>
                        <AiOutlineSearch className='search btn-search'/>
                       </div>
                        

                    </div>



                  </div>


                </div>




              </div>


            </div>


             <div className = {productclassname}>

                    <div className="inner-products">

                        <div className="child-products">

                            <img src = {ps5} className ='img-products' alt = 'ps5'/>

                            <p>PS5</p>

                        </div>

                        <div className="child-products">

                            <img src = {ps5} className ='img-products' alt = 'ps5'/>

                            <p>PS4</p>

                        </div>


                        <div className="child-products">

                            <img src = {ps5} className ='img-products' alt = 'ps5'/>

                            <p>PS VR2</p>

                        </div>

                        <div className="child-products">

                            <img src = {ps5} className ='img-products' alt = 'ps5'/>

                            <p>PS PLUS</p>

                        </div>
                        
                        <div className="child-products">


                            <img src = {ps5} className ='img-products' alt = 'ps5'/>

                            <p>BUY GAMES</p>

                        </div>

                    </div>



                  <div className="line"></div>

                  <div className ='categories'>

                    <p> <MdCircle className='md-circle'/> PlayStation Indies</p>

                    <p> <MdCircle className='md-circle'/> PS4 games on PS5</p>

                    <p> <MdCircle className='md-circle'/> Free to Play</p>

                    <p> <MdCircle className='md-circle'/> PlayStation games on PC</p>

                    <p> <MdCircle className='md-circle'/> Deals and offers</p>

                  </div>




            </div>



                   {/* FOR THE HARDWARE */}



            <div className = {hardwareclassname}>

                    <div className="inner-products">

                        <div className="child-products">

                            <img src = {ps5} className ='img-products' alt = 'ps5'/>

                            <p>PS5</p>

                        </div>

                        <div className="child-products">

                            <img src = {ps5} className ='img-products' alt = 'ps5'/>

                            <p>PS4</p>

                        </div>


                        <div className="child-products">

                            <img src = {ps5} className ='img-products' alt = 'ps5'/>

                            <p>PS VR2</p>

                        </div>

                    </div>



                  <div className="line"></div>

                  <div className ='categories'>

                    <p> <MdCircle className='md-circle'/> DualSense Wireless Controller</p>

                    <p> <MdCircle className='md-circle'/> PULSE 3D wireless headset</p>

                    <p> <MdCircle className='md-circle'/> DUALSHOCK 4 wireless controller</p>

                    <p> <MdCircle className='md-circle'/> PS5 & PS4 accessories</p>

                    <p> <MdCircle className='md-circle'/> PlayStation VR</p>

                  </div>




            </div>



                          {/* FOR THE SERVICES */}




            <div className = {serviceclassname}>

                    <div className="inner-products">

                        <div className="child-products">

                            <img src = {ps5} className ='img-products' alt = 'ps5'/>

                            <p>PS Plus</p>

                        </div>

                        <div className="child-products">

                            <img src = {ps5} className ='img-products' alt = 'ps5'/>

                            <p>PS Stars</p>

                        </div>


                    </div>



                  <div className="line"></div>

                  <div className ='categories'>

                    <p> <MdCircle className='md-circle'/> PS5 Entertainment</p>

                    <p> <MdCircle className='md-circle'/> PS4 Entertainment</p>


                  </div>

            </div>
            
            
            
            
            


            







        </nav>
    
    
        



    </>


  )
}

export default Nav