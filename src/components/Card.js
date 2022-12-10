import React from 'react'

function Card({item}) {
  return (
    <div className="card">
            <img src={item.imgSrc} alt="adventure" />
            <div className="text">
              <div className="left">
                <p className="name">{item.name}</p>
                <p className="distance">{item.distance}</p>
              </div>
              <div className="right">
                <p>
                  <b className="price">{item.price}</b>
                </p>
                <p className="availability">{item.availability}</p>
              </div>
            </div>
            <div className="stars">
              <img src={item.star} alt="star" />
              <img src={item.star} alt="star" />
              <img src={item.star} alt="star" />
              <img src={item.star} alt="star" />
              <img src={item.star} alt="star" />
            </div>
          </div>
  )
}

export default Card