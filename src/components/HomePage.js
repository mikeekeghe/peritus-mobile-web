import React from "react";

function HomePage() {
  return (
    <div class="welcome-area" id="welcome">

      <div class="header-text">
        <div class="container">
          <div class="row">
            <div class="left-text col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
              <h1><strong>PERITUS MOBILE</strong></h1>
              <p>High Quality Mobile Apps for your business.</p>
              <a href="/about" class="main-button-slider">Find Out More</a>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
              <img src="assets/images/slider-icon.png" class="rounded img-fluid d-block mx-auto" alt="First Vector Graphic">
              </img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
