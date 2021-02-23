import React from "react";

class FrequentlyPage extends React.Component {
  render() {
    return (

      <section class="section" id="frequently-question">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
            <div class="offset-lg-3 col-lg-6">
              <div class="section-heading">
                <p>Vivamus venenatis eu mi ac mattis. Maecenas ut elementum sapien. Nunc euismod risus ac lobortis congue. Sed erat quam.</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="left-text col-lg-6 col-md-6 col-sm-12">
              <h5>Class aptent taciti sociosqu ad litora torquent per conubia</h5>
              <div class="accordion-text">
                <p>Curabitur placerat diam in risus lobortis, laoreet porttitor est elementum. Nulla ultricies risus quis risus scelerisque, a aliquam tellus maximus. Cras pretium nulla ac convallis iaculis. Aenean bibendum erat vitae odio sodales, in facilisis tellus volutpat.</p>
                <p>Sed lobortis pellentesque magna ac congue. Suspendisse quis molestie magna, id eleifend ex. Ut mollis ultricies diam nec dictum. Morbi commodo hendrerit mi vel vulputate. Proin non tincidunt dui. Lorem ipsum dolor sit amet.</p>
                <span>Email: <a href="#">email@company.com</a><br /></span>
                <a href="#contact-us" class="main-button">Contact Us</a>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="accordions is-first-expanded">
                <article class="accordion" >
                  <div class="accordion-head">
                    <span>First Common Question</span>
                    <span class="icon">
                      <i class="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div class="accordion-body">
                    <div class="content">
                      <p>Duis vulputate porttitor urna sit amet pretium. Phasellus sed pulvinar eros, condimentum consequat ex. Suspendisse potenti.
                                      <br /><br />
                        Pellentesque maximus lorem sed elit imperdiet mattis. Duis posuere mauris ut eros rutrum sodales. Aliquam erat volutpat.</p>
                    </div>
                  </div>
                </article>
                <article class="accordion">
                  <div class="accordion-head">
                    <span>Second Question Answer</span>
                    <span class="icon">
                      <i class="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div class="accordion-body">
                    <div class="content">
                      <p>Sed odio elit, cursus sed consequat at, rutrum eget augue. Cras ac eros iaculis, tempor quam sit amet, scelerisque mi. Quisque eu risus eget nunc porttitor vestibulum at a ante.
                                      <br /><br />
                            Praesent ut placerat turpis, vel pellentesque dolor. Sed rutrum eleifend tortor, eu luctus orci sagittis in. In blandit fringilla mollis.</p>
                    </div>
                  </div>
                </article>
                <article class="accordion">
                  <div class="accordion-head">
                    <span>Third Answer for you</span>
                    <span class="icon">
                      <i class="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div class="accordion-body">
                    <div class="content">
                      <p>Proin feugiat ante ut vulputate rutrum. Nam quis erat turpis. Nullam maximus pharetra lorem, eu condimentum est iaculis ut. Pellentesque mattis ultrices dignissim.
                                      <br /><br />
                                Etiam et enim finibus, feugiat massa efficitur, finibus sapien. Sed cursus lacus quis arcu scelerisque, eget ornare risus maximus. Aenean non lectus id odio rhoncus pharetra.</p>
                    </div>
                  </div>
                </article>
                <article class="accordion">
                  <div class="accordion-head">
                    <span>Fourth Question Asked</span>
                    <span class="icon">
                      <i class="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div class="accordion-body">
                    <div class="content">
                      <p>Phasellus eu purus ornare, eleifend orci nec, egestas nulla. Sed sed aliquet sapien. Proin placerat, ipsum eu posuere blandit, tellus quam consectetur nisi, id sollicitudin diam ex at nisi.
                                      <br /><br />
                                    Aenean fermentum eget turpis egestas semper. Sed finibus mollis venenatis. Praesent at sem in massa iaculis pharetra.</p>
                    </div>
                  </div>
                </article>
                <article class="accordion">
                  <div class="accordion-head">
                    <span>Fifth Ever Question</span>
                    <span class="icon">
                      <i class="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div class="accordion-body">
                    <div class="content">
                      <p>Quisque aliquet ipsum ut magna rhoncus, euismod lacinia elit rhoncus. Sed sapien elit, mollis ut ultricies quis, fermentum nec ante.
                                      <br /><br />
                                        Sed nec ex nec tortor fermentum sollicitudin id ut ligula. Ut sagittis rutrum lectus, non sagittis ante euismod eu. </p>
                    </div>
                  </div>
                </article>
                <article class="accordion">
                  <div class="accordion-head">
                    <span>Sixth Sense Question</span>
                    <span class="icon">
                      <i class="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div class="accordion-body">
                    <div class="content">
                      <p>Suspendisse potenti. Ut dapibus leo ut massa vulputate semper. Pellentesque maximus lorem sed elit imperdiet mattis. Duis posuere mauris ut eros rutrum sodales. Aliquam erat volutpat.</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

      </section>

    );
  }
}

export default FrequentlyPage;
