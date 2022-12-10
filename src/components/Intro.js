import React from "react";
import "./intro.css";
import { data } from "../data";
import Card from "./Card";

function Intro() {
  return (
    <section id="intro-section">
      <div className="intro">
        <div className="intro-text">
          <h1>
            Rent a <span className="color">Place</span> away from{" "}
            <span className="color">Home</span> in the{" "}
            <span className="color">Metaverse </span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>

          <div className="search">
            <input type="text" placeholder="Search for location" />
            <button id="search-btn">Search</button>
          </div>
        </div>
        <div className="intro-img">
          <img src="./img/Group 4028.svg" alt="intro" />
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-img">
            <img src="./img/Group 59537.svg" alt="" />
            <img src="./img/Group 4040.svg" alt="" />
            <img src="./img/Frame 4041.svg" alt="" />

        </div>
      </div>

      <section id="adventure">
        <h1>Inspiration for your next adventure</h1>
        <div className="adventures">
{data.map((item)=>{
  return(
<Card item={item} />

  )
})}
          

          
        </div>
      </section>

      <section id="nft">
        <div className="nft-items">
          <div className="text">
            <h1>Metabnb NFTs</h1>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button id="learn-more">Learn More</button>
          </div>
          <img src="./img/Frame 59546.svg" alt="" />
        </div>
      </section>
    </section>
  );
}

export default Intro;
