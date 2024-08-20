import React from 'react';


const UserData = [
    {
        Name : "Ferrari",
        City : "German",
        Role :"FAST",
        Skills : ["html","css","js","node.js","ex[ress.js"],
        Online : false,
        Profile : "images/download (1).jpeg"
    },
    {
        Name : "Ferrari",
        City : "German",
        Role :"FAST",
        Skills : ["html","css","js","node.js","ex[ress.js"],
        Online : false,
        Profile : "images/download (2).jpeg"
    },
    {
        Name : "Ferrari",
        City : "German",
        Role :"FAST",
        Skills : ["html","css","js","node.js","ex[ress.js"],
        Online : false,
        Profile : "images/download (3).jpeg"
    },
    {
        Name : "Ferrari",
        City : "German",
        Role :"FAST",
        Skills : ["html","css","js","node.js","ex[ress.js"],
        Online : true,
        Profile : "images/download.jpeg"
    }
]





function User({name,city,Role,Skills,Profile,Online}) {
    return <div className='Card-Container'>
        <span className={Online?"Pro online":"Pro offline"}>{Online?"Online":"Offline"}</span>
        <img src={Profile} alt="" className='img' />
        <h3>{name}</h3>
        <h3>{city}</h3>
        <p>{Role}</p>
        <div className='Buttons'>
            <button className='Primary'>Message</button>
            <button className='Primary outline'>Following</button>
        </div>
        <div className='Skills'>
            <h6>skills</h6>
            <ul>
                {
                Skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
}

const Usercard = () => {
  return (
    <>
    {
        UserData.map((users,index)=>(
           <User key={index}
           name = {users.Name}
           city = {users.City}
           Role={users.Role}
           Skills={users.Skills}
           Profile={users.Profile}
           
           Online = {users.Online}
           />
        ))
    }
    </>
  )
}



export default Usercard