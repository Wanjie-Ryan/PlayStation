import React from 'react'
import './samplegames.css'




function Samplegames() {


    const games  = [


        {
            id:1,
            name: 'Tchia',
            img: '../../Pics/Tchia.webp',
            experience: 'A unique tropical adventure',
            description:'Prepare to climb, swim, glide and sail your way around a beautiful open-world, available now with PlayStation Plus Extra & Premium tiers'


        },

        {

            id:2,
            name: 'Resident Evil 4',
            img:'../../Pics/resident evil.jpg',
            experience:'Survival is just the beginning',
            description:'Experience a thrilling reimagining of the action-horror classic, featuring modernized gameplay, a reimagined story & spectacular visuals'
        },

        {
            id:3,
            name:'DIABLO IV',
            img:'../../Pics/diablo.webp',
            experience:'Breakdown',
            description:'Play the Diablo IV open beta and face ceaseless demons in nightmarish dungeons in a vast open world from March 24th – 26th'
        },

        {
            id:4,
            name:'Sun Squad',
            img:'../../Pics/horizon.jpg',
            experience:`Sun's out? Guns out!`,
            description:`Play the new Heatwave limited-time mode and unlock 24 limited-time cosmetics. Collect all 24 to receive Ash's new Heirloom!`
        }


    ]



  return (


    <>

        { games.map(({id, name, img,experience, description })=>{
            
            return(


              <main className="main-sec" key ={id}>
            
                <div className="main-games">
            
                    <img src={img} alt="games" className="img" />
            
                </div>
                
            
                    <div className="content">
            
            
            
                            <div className="tchia">
                                <p>{name}</p>
                            </div>
            
                            <div className="exp">
                                <p>{experience}</p>
                            </div>
            
            
                            <div className="desc">
                                <p>{description}</p>
                            </div>
            
                            <button className="more"> Find out more </button>
            
            
                    </div>
            
            
            
            
            </main>)})}



            



    </>




  )
}

export default Samplegames