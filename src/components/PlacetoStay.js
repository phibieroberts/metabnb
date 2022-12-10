import React from 'react'
import { placeToSTay } from '../data'
import "./placeToStay.css"

function PlacetoStay() {
  return (
    <>
<div className="place-to-stay">
    <div className="filter">
        <a href="/">Restaurant</a>
        <a href="/">Cottage</a>
        <a href="/">Castle</a>
        <a href="/">Fantast City</a>
        <a href="/">Beach</a>
        <a href="/">Cabins</a>
        <a href="/">Off-grid</a>
        <a href="/">Farm</a>
        <a href="/"><button>Location<img src='./img/setting-5.svg' alt='setting'/></button></a>




    </div>
<div className="adventures">
          {placeToSTay.map((item)=>{
            return(
              <div className="card">
            <img src={item.imgSrc} alt="adventure" />
            <div className="text">
              <div className="left">
                <p>{item.name}</p>
                <p>{item.distance}</p>
              </div>
              <div className="right">
                <p>
                  <b>{item.price}</b>
                </p>
                <p>{item.availability}</p>
              </div>
            </div>
            <div className="stars">
              <img src={item.star} alt="" />
              <img src={item.star} alt="" />
              <img src={item.star} alt="" />
              <img src={item.star} alt="" />
              <img src={item.star} alt="" />
            </div>
          </div>
            )
          })}

          </div>
</div>
    </>
  )
}

export default PlacetoStay