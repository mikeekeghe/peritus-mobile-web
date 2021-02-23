import React from "react";

class AboutPage extends React.Component {
  render() {
    return (

      <section class="section" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-12 col-sm-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
              <img src="assets/images/left-image.png" class="rounded img-fluid d-block mx-auto" alt="App">
              </img>
            </div>
            <div class="right-text col-lg-5 col-md-12 col-sm-12 mobile-top-fix">
              <div class="left-heading">
                <h5>Vivamus sodales nisi id ante molestie venenatis</h5>
              </div>
              <div class="left-text">
                <p>This template is <a href="#">last updated on 20 August 2019 </a>for main menu drop-down arrow and sub menu text color. Duis auctor dolor eu scelerisque vestibulum. Vestibulum lacinia, nisl sit amet tristique condimentum. <br /><br/>
                  Sed a consequat velit. Morbi lectus sapien, vestibulum et sapien sit amet, ultrices malesuada odio. Donec non quam euismod, mattis dui a, ultrices nisi.</p>
                  <a href="#about2" class="main-button">Discover More</a>
              
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="hr"></div>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <div class="left-text col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix">
                  <div class="left-heading">
                    <h5>Curabitur aliquam eget tellus id porta</h5>
                  </div>
                  <p>Proin justo sapien, posuere suscipit tortor in, fermentum mattis elit. Aenean in feugiat purus.</p>
                  <ul>
                    <li>
                      <img src="assets/images/about-icon-01.png" alt="">
                      </img>
                      <div class="text">
                        <h6>Nulla ultricies risus quis risus</h6>
                        <p>You can use this website template for commercial or non-commercial purposes.</p>
                      </div>
                    </li>
                    <li>
                      <img src="assets/images/about-icon-02.png" alt="">
                      </img>
                      <div class="text">
                        <h6>Donec consequat commodo purus</h6>
                        <p>You have no right to re-distribute this template as a downloadable ZIP file on any website.</p>
                      </div>
                    </li>
                    <li>
                      <img src="assets/images/about-icon-03.png" alt="">
                      </img>
                      <div class="text">
                        <h6>Sed placerat sollicitudin mauris</h6>
                        <p>If you have any question or comment, please <a rel="nofollow" href="https://templatemo.com/contact">contact</a> us on TemplateMo.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="right-image col-lg-7 col-md-12 col-sm-12 mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                  <img src="assets/images/right-image.png" class="rounded img-fluid d-block mx-auto" alt="App">
                  </img>
                </div>
              </div>
            </div>
            </div>
            </div>
      </section>
 
    );
  }
}

export default AboutPage;
