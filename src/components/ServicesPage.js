import React from "react";

class ServicesPage extends React.Component {
  render() {
    return (

      <section className="section" id="services">
            <div className="container">
                <div className="row">
                    <div >
                        <div className="item service-item">
                            <div className="icon">
                                <i><img src="assets/images/service-icon-01.png" alt="" /></i>
                            </div>
                            <h5 className="service-title">First Box Service</h5>
                            <p>Aenean vulputate massa sed neque consectetur, ac fringilla quam aliquet. Sed a enim nec eros tempor cursus at id libero.</p>
                            <button className="main-button">More Detail </button>
                        </div>
                        <div className="item service-item">
                            <div className="icon">
                                <i><img src="assets/images/service-icon-02.png" alt="" /></i>
                            </div>
                            <h5 className="service-title">Second Box Title</h5>
                            <p>Pellentesque vitae urna ut nisi viverra tristique quis at dolor. In non sodales dolor, id egestas quam. Aliquam erat volutpat. </p>
                            <button className="main-button">Discover More </button>
                        </div>
                        <div className="item service-item">
                            <div className="icon">
                                <i><img src="assets/images/service-icon-03.png" alt="" /></i>
                            </div>
                            <h5 className="service-title">Third Title Box</h5>
                            <p>Quisque finibus libero augue, in ultrices quam dictum id. Aliquam quis tellus sit amet urna tincidunt bibendum.</p>
                            <button className="main-button">More Detail </button>
                        </div>
                        <div className="item service-item">
                            <div className="icon">
                                <i><img src="assets/images/service-icon-02.png" alt="" /></i>
                            </div>
                            <h5 className="service-title">Fourth Service Box</h5>
                            <p>Fusce sollicitudin feugiat risus, tempus faucibus arcu blandit nec. Duis auctor dolor eu scelerisque vestibulum.</p>
                            <button className="main-button">More Detail </button>
                        </div>
                        <div className="item service-item">
                            <div className="icon">
                                <i><img src="assets/images/service-icon-01.png" alt="" /></i>
                            </div>
                            <h5 className="service-title">Fifth Service Title</h5>
                            <p>Curabitur aliquam eget tellus id porta. Proin justo sapien, posuere suscipit tortor in, fermentum mattis elit.</p>
                            <a href="#" className="main-button">Discover</a>
                        </div>
                        <div className="item service-item">
                            <div className="icon">
                                <i><img src="assets/images/service-icon-03.png" alt="" /></i>
                            </div>
                            <h5 className="service-title">Sixth Box Title</h5>
                            <p>Ut nibh velit, aliquam vitae pellentesque nec, convallis vitae lacus. Aliquam porttitor urna ut pellentesque.</p>
                            <a href="#" className="main-button">Detail</a>
                        </div>
                        <div className="item service-item">
                            <div className="icon">
                                <i><img src="assets/images/service-icon-01.png" alt="" /></i>
                            </div>
                            <h5 className="service-title">Seventh Title Box</h5>
                            <p>Sed a consequat velit. Morbi lectus sapien, vestibulum et sapien sit amet, ultrices malesuada odio. Donec non quam.</p>
                            <button className="main-button">More Detail </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
 
    );
  }
}

export default ServicesPage;
