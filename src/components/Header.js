import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import { CgMenuRound } from 'react-icons/cg'
import {FaTimesCircle} from 'react-icons/fa'
import { useState } from "react"
import Pop from './Pop'


function Header() {
  const[clicked, setClicked]=useState(true)
  const[popUp, setPopUp]=useState(false)

  const handlePopUp=()=>{
setPopUp(!popUp)
console.log("you clicked me")
  }

  return (
    <div className='header'>
<div className="logo">
    <a href='/'><img src="./img/Group.svg" alt="logo" /></a>
</div>
<div className='menu'
 onClick={()=> setClicked(!clicked)}>
{ clicked ? <CgMenuRound fontSize={"40px"} color={"#A02279"} />:<FaTimesCircle fontSize={"40px"} color={"#A02279"} />
}</div>
<div className={clicked ? "links active" : "links"}>
    <a href="/">Home</a>
    <Link to={"/placeToStay"}>Place to stay</Link>
    <a href="/">NFTs</a>
    <a href="/">Community</a>
    <button className='button' onClick={handlePopUp}>Connect wallet</button>

</div>
{popUp && <Pop handlePopUp={handlePopUp}/>}
    </div>
  )
}

export default Header