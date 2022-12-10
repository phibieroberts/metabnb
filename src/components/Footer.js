import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section id="footer">
    <div class="footer">
      <div>
        <a href="/">
          <img src="./img/logo2.svg" alt="logo" className="footer-logo"/>
        </a>
        <div className="icons">
          <a href="/"> <img src="./img/facebook-263-721950.svg" alt="facebook" /></a>
          <a href="/"><img src="./img/instagram-216-721958.svg" alt="instagram" /></a>
          <a href="/"><img src="./img/Vector (1).svg" alt="twitter" /></a>
        </div>
      </div>
      <div>
        <a href="/">
          <b>community</b>
          </a>

          <a href="/"> NFT</a>
          <a href="/">Tokens</a>
          <a href="/">Landlords</a>
          <a href="/">Discord</a>

      </div>
      <div>
        <a href="/">
          <b>places</b>
        </a>
        <a href="/"> castle</a>
          <a href="/">Farm</a>
          <a href="/">Beach</a>
          <a href="/">Learn more</a>

      </div>
      <div>
        {" "}
        <a href="/">
          <b>about us</b>
        </a>
        <a href="/"> Roadmap</a>
          <a href="/">Creators</a>
          <a href="/">Career</a>
          <a href="/">Contact Us</a>

      </div>
      <p>&copy; 2022 metabnb</p>

    </div>
    </section>
  );
}

export default Footer;
