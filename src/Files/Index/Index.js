import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Index extends Component {
    render() {
        return (
            <div>
               <section id="hero" className="d-flex justify-content-center align-items-center">
    <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
      <h1>Learning Today,<br />Leading Tomorrow</h1>
      <h2>We are team of talented designers making websites with Bootstrap</h2>
      <Link to="/Courses" className="btn-get-started">Get Started</Link>
    </div>
  </section>
  <main id="main">

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
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
   </section>  {/*<!-- End Counts Section --> */}

    {/* <!-- ======= Why Us Section ======= --> */}
    <section id="why-us" className="why-us">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="content">
              <h3>Why Choose Mentor?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
              <div className="text-center">
                <Link href="/About" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-receipt"></i>
                    <h4>Corporis voluptates sit</h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-cube-alt"></i>
                    <h4>Ullamco laboris ladore pan</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-images"></i>
                    <h4>Labore consequatur</h4>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                </div>
              </div>
            </div> {/*<!-- End .content--> */}
          </div>
        </div>

      </div>
    </section>{/* <!-- End Why Us Section --> */}

    {/* <!-- ======= Features Section ======= --> */}
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <i className="ri-store-line" style={{color: "#ffbb2c"}}></i>
              <h3><Link to="/">Lorem Ipsum</Link></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-bar-chart-box-line" style={{color: "#5578ff"}}></i>
              <h3><Link to="/">Dolor Sitema</Link></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-calendar-todo-line" style={{color: "#e80368"}}></i>
              <h3><Link to="/">Sed perspiciatis</Link></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="ri-paint-brush-line" style={{color: "#e361ff"}}></i>
              <h3><Link to="/">Magni Dolores</Link></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-database-2-line" style={{color: "#47aeff"}}></i>
              <h3><Link to="/">Nemo Enim</Link></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-gradienter-line" style={{color: "#ffa76e"}}></i>
            <h3><Link to="/">Eiusmod Tempor</Link></h3>

            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-file-list-3-line" style={{color: "#11dbcf"}}></i>
              <h3><Link to="/">Midela Teren</Link></h3>

            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-price-tag-2-line" style={{color: "#4233ff"}}></i>
              <h3><Link to="/">Pira Neve</Link></h3>

            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-anchor-line" style={{color: "#b2904f"}}></i>
             <h3><Link to="/">Dirada Pack</Link></h3>

            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-disc-line" style={{color: "#b20969"}}></i>
              <h3><Link to="/">Moton Ideal</Link></h3>

            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-base-station-line" style={{color: "#ff5828"}}></i>
              <h3><Link to="/">Verdo Park</Link></h3>

            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-fingerprint-line" style={{color: "#29cc61"}}></i>
             <h3><Link to="/">Flavor Nivelanda</Link></h3>

            </div>
          </div>
        </div>

      </div>
    </section> {/*<!-- End Features Section --> */}

    {/* <!-- ======= Popular Courses Section ======= --> */}
    <section id="popular-courses" className="courses">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Courses</h2>
          <p>Popular Courses</p>
        </div>

        <div className="row" data-aos="zoom-in" data-aos-delay="100">

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="course-item">
              <img src="assets/img/course-1.jpg" className="img-fluid" alt="..." />
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Web Development</h4>
                  <p className="price">$169</p>
                </div>

               <h3><Link to="/">Website Design</Link></h3>  {/*course-details.html */}
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-1.jpg" className="img-fluid" alt="" />
                    <span>Antonio</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;50
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;65
                  </div>
                </div>
              </div>
            </div>
        </div>  {/*  <!-- End Course Item--> */}

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="course-item">
              <img src="assets/img/course-2.jpg" className="img-fluid" alt="..." />
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Marketing</h4>
                  <p className="price">$250</p>
                </div>

               <h3><Link to="/">Search Engine Optimization</Link></h3>  {/* course-details.html */}
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt=""/>
                    <span>Lana</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;35
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;42
                  </div>
                </div>
              </div>
            </div>
         </div> {/*  <!-- End Course Item--> */}

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="course-item">
              <img src="assets/img/course-3.jpg" className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Content</h4>
                  <p className="price">$180</p>
                </div>

                <h3><Link to="/">Copywriting</Link></h3> {/* course-details.html */}
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt=""/>
                    <span>Brandon</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;20
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;85
                  </div>
                </div>
              </div>
            </div>
          </div> {/* <!-- End Course Item--> */}

        </div>

      </div>
    </section>{/* <!-- End Popular Courses Section --> */}

    {/* <!-- ======= Trainers Section ======= --> */}
    <section id="trainers" className="trainers">
      <div className="container" data-aos="fade-up">

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src="assets/img/trainers/trainer-1.jpg" className="img-fluid" alt=""/>
              <div className="member-content">
                <h4>Walter White</h4>
                <span>Web Development</span>
                <p>
                  Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                </p>
                <div className="social">
                  <Link to="/"><i className="bi bi-twitter"></i></Link>
                  <Link to="/"><i className="bi bi-facebook"></i></Link>
                  <Link to="/"><i className="bi bi-instagram"></i></Link>
                  <Link to="/"><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt=""/>
              <div className="member-content">
                <h4>Sarah Jhinson</h4>
                <span>Marketing</span>
                <p>
                  Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                </p>
                <div className="social">
                <Link to="/"><i className="bi bi-twitter"></i></Link>
                  <Link to="/"><i className="bi bi-facebook"></i></Link>
                  <Link to="/"><i className="bi bi-instagram"></i></Link>
                  <Link to="/"><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt=""/>
              <div className="member-content">
                <h4>William Anderson</h4>
                <span>Content</span>
                <p>
                  Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                </p>
                <div className="social">
                <Link to="/"><i className="bi bi-twitter"></i></Link>
                  <Link to="/"><i className="bi bi-facebook"></i></Link>
                  <Link to="/"><i className="bi bi-instagram"></i></Link>
                  <Link to="/"><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
     </section>{/*<!-- End Trainers Section --> */}

   </main>{/*<!-- End #main --> */}

  {/* <!-- ======= Footer ======= --> */}
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

export default Index
