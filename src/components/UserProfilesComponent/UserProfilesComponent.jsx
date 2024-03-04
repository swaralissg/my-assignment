import React from 'react'
import './UserProfilesComponent.css'
import { useState } from "react"
import list from '../assets/to-to-list-icon.png'
import profile_icon1 from '../assets/profile1.jpg'
import profile_icon2 from '../assets/profile2.jpg'
import profile_icon3 from '../assets/profile3.jpg'
import profile_icon4 from '../assets/profile4.jpg'
import profile_icon5 from '../assets/profile5.jpg'
import profile_icon6 from '../assets/profile6.jpg'
import ToDoListComponent from '../ToDoListComponent/ToDoListComponent'
import WeatherComponent from '../WeatherComponent/WeatherComponent'

function UserProfilesComponent() {

    const data = [
        {
            userid: "item-1",
            name: "Jenny Dsouza",
            email: "jenny@gmail.com",
            image: (profile_icon1),
            city: "Toronto",

        },
        {
            userid: "item-2",
            name: "Natasha Black",
            email: "natasha@gmail.com",
            image: (profile_icon2),
            city: "Toronto",

        },
        {
            userid: "item-3",
            name: "Sherin Lancy",
            email: "sherin@gmail.com",
            image: (profile_icon3),
            city: "Toronto",

        },
        {
            userid: "item-4",
            name: "Peter Pan",
            email: "peterpan@gmail.com",
            image: (profile_icon4),
            city: "Toronto",

        },
        {
            userid: "item-5",
            name: "Thomson James",
            email: "thomson@gmail.com",
            image: (profile_icon5),
            city: "Toronto",

        },
        {
            userid: "item-6",
            name: "Sameer Sony",
            email: "sameer@gmail.com",
            image: (profile_icon6),
            city: "Toronto",

        },

    ]

    const [name, setName] = useState("Jenny Dsouza");
    const [email, setEmail] = useState("jenny@gmail.com'")
    const [image, setImage] = useState(profile_icon1)
    const [city, setCity] = useState("Toronto")

    const handleClick1 = () => {
        setName('Jenny Dsouza');
        setEmail('jenny@gmail.com')
        setImage(profile_icon1)
        setCity('Toronto')
    }
    const handleClick2 = () => {
        setName('Natasha Black');
        setEmail('natasha@gmail.com')
        setImage(profile_icon2)
        setCity('Toronto')
    }
    const handleClick3 = () => {
        setName('Sherin Lancy');
        setEmail('sherin@gmail.com')
        setImage(profile_icon3)
        setCity('Toronto')
    }
    const handleClick4 = () => {
        setName('Peter Pan');
        setEmail('peterpan@gmail.com')
        setImage(profile_icon4)
        setCity('Toronto')
    }
    const handleClick5 = () => {
        setName('Thomson James');
        setEmail('thomson@gmail.com')
        setImage(profile_icon5)
        setCity('Toronto')
    }
    const handleClick6 = () => {
        setName('Sameer Sony');
        setEmail('sameer@gmail.com')
        setImage(profile_icon6)
        setCity('Toronto')
    }

    const [users, setUsers] = useState([])
    const [toggled, setToggled] = useState("item-1")

    return (
        <>
            <div style={{ 'margin-top': '10px' }} className='row'>
                <div id='user-details' className='col-lg-6 col-xl-5 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center'>
                    {data.map(({ name, email, image, city, userid }) => {
                        return (
                            <>
                                {toggled === userid ? (
                                    <div class="card" style={{ width: "370px", height: "330px", 'border': '1px solid #2218af' }}>
                                        <img class="card-img-top" src={image} alt="Card image" style={{ width: "100%", height: "200px" }} />
                                        <div class="card-body">
                                            <h4 class="card-title">{name}</h4>
                                            <p class="card-text">{email}</p>
                                            <p>{city}</p>
                                        </div>
                                    </div>) : null}
                            </>
                        )
                    })}
                </div>

                <div  className='col-lg-6 col-xl-7 col-md-12 col-sm-12 col-xs-12'>
                    <div id="second-container" className='main-container'>

                        <h5 id="select-user-title">Scroll and select user to view details</h5>
                        <div className='users-container'>

                            <div id='list-profile-card' className="card">


                                {data.map(({ name, userid, image }) => {
                                    return (
                                        <>
                                            <div id='scrolling' className='row'>
                                                <div id='border' className='col-4 d-flex align-items-center' >
                                                    <img className="card-img-top" src={image} alt="Card image" style={{ width: "50%", height: '60px' }} />
                                                </div>
                                                <div id='border' className='col-4 d-flex align-items-center'>
                                                    <h6 className="card-title">{name}</h6>
                                                </div>
                                                <div id='border' className='col-4 d-flex align-items-center'>
                                                    <a onClick={() => setToggled(userid)} id="view-button" className="btn btn-primary">View Profile</a>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                                }
                            </div>
                       </div>
                    </div>
                </div>
            </div>
           <div className='row'>
                <div id='weather-forecast' className='col-lg-6 col-xl-5 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center'>
                    <WeatherComponent />
                </div>
                <div id='to-do-list' className='col-lg-6 col-xl-7 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center'>
                    <ToDoListComponent />
                </div>
            </div>
             </>
    )
}

export default UserProfilesComponent