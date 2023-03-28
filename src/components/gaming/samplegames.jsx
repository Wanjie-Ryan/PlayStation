import React from 'react'
import './samplegames.css'
import Tchia from '../../Pics/Tchia.webp'



function Samplegames() {


    const games  = [


        {

            img: ''



        }




    ]



  return (


    <>

        <main className="main-sec">

            <div className="main-games">

                <img src={Tchia} alt="games" className="img" />

            </div>
            

                <div className="content">



                        <div className="tchia">
                            <p>Tchia</p>
                        </div>

                        <div className="exp">
                            <p>A unique tropical adventure</p>
                        </div>


                        <div className="desc">
                            <p>Prepare to climb, swim, glide and sail your way around a beautiful open-world, available now with PlayStation Plus Extra & Premium tiers</p>
                        </div>

                        <button className="more"> Find out more </button>


                </div>




        </main>



    </>




  )
}

export default Samplegames