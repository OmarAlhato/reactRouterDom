import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class About extends Component {
    render() {
        return (
            <div>
            


            
  <main id="main">
    {/* <!-- ======= Breadcrumbs ======= --> */}
    <div className="breadcrumbs" data-aos="fade-in">
      <div className="container">
        <h2>About Us</h2>
        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
      </div>
     </div>{/*<!-- End Breadcrumbs --> */}

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            </p>

          </div>
        </div>

      </div>
    </section>

    {/* <!-- ======= Counts Section ======= --> */}
    <section id="counts" className="counts section-bg">
      <div className="container">

        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1232" data-purecounter-duration="1" className="purecounter">1232</span>
            <p>Students</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="1" className="purecounter">64</span>
            <p>Courses</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" className="purecounter">42</span>
            <p>Events</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter">15</span>
            <p>Trainers</p>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Counts Section --> */}

    {/* <!-- ======= Testimonials Section ======= --> */}
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Testimonials</h2>
          <p>What are they saying</p>
        </div>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
    {/* <!-- End Testimonials Section --> */}

  </main>
  {/* <!-- End #main --> */}
  <footer id="footer">

<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact">
        <h3>Mentor</h3>
        <p>
        alnakhil Street <br/>
          Palestine <br/>
          Gaza <br/><br/>
          <strong>Phone:</strong> 970-29-73-415<br/>
          <strong>Email:</strong> Omarr.Alhato@Gmail.com<br/>
        </p>
      </div>

      <div className="col-lg-2 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
          <li><i className="bx bx-chevron-right"></i> <Link to="/">About us</Link></li>
          <li><i className="bx bx-chevron-right"></i> <Link to="/">Services</Link></li>
          <li><i className="bx bx-chevron-right"></i> <Link to="/">Terms of service</Link></li>
          <li><i className="bx bx-chevron-right"></i> <Link to="/">Privacy policy</Link></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <Link to="/">Web Design</Link></li>
          <li><i className="bx bx-chevron-right"></i> <Link to="/">Web Development</Link></li>
          <li><i className="bx bx-chevron-right"></i> <Link to="/">Product Management</Link></li>
          <li><i className="bx bx-chevron-right"></i> <Link to="/">Marketing</Link></li>
          <li><i className="bx bx-chevron-right"></i> <Link to="/">Graphic Design</Link></li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-6 footer-newsletter">
        <h4>Join Our Newsletter</h4>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
      
      </div>

    </div>
  </div>
</div>

<div className="container d-md-flex py-4">

  <div className="me-md-auto text-center text-md-start">
    <div className="copyright">
      &copy; Copyright <strong><span>Mentor</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      {/* <!-- All the links in the footer should remain intact. -->
      <!-- You can delete the links only if you purchased the pro version. -->
      <!-- Licensing information: https://bootstrapmade.com/license/ -->
      <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/ --> */}
      Designed by <Link to="/https://bootstrapmade.com/">Omar Alhato</Link>
    </div>
  </div>
  <div className="social-links text-center text-md-right pt-3 pt-md-0">
    <Link to="/" className="twitter"><i className="bx bxl-twitter"></i></Link>
    <Link to="/" className="facebook"><i className="bx bxl-facebook"></i></Link>
    <Link to="/" className="instagram"><i className="bx bxl-instagram"></i></Link>
    <Link to="/" className="google-plus"><i className="bx bxl-skype"></i></Link>
    <Link to="/" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
  </div>
</div>
</footer>{/*<!-- End Footer --> */}



            </div>
        )
    }
}

export default About
