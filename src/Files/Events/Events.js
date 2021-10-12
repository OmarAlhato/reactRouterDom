import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Events extends Component {
    render() {
        return (
            <div>
                
  <main id="main">

{/* <!-- ======= Breadcrumbs ======= --> */}
<div className="breadcrumbs" data-aos="fade-in">
  <div className="container">
    <h2>Events</h2>
    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
  </div>
</div>
{/* <!-- End Breadcrumbs --> */}

{/* <!-- ======= Events Section ======= --> */}
<section id="events" className="events">
  <div className="container" data-aos="fade-up">

    <div className="row">
      <div className="col-md-6 d-flex align-items-stretch">
        <div className="card">
          <div className="card-img">
            <img src="assets/img/events-1.jpg" alt="..."/>
          </div>
          <div className="card-body">
            <h5 className="card-title"><Link to="/Events">Introduction to webdesign</Link></h5>
            <p className="fst-italic text-center">Sunday, September 26th at 7:00 pm</p>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-stretch">
        <div className="card">
          <div className="card-img">
            <img src="assets/img/events-2.jpg" alt="..."/>
          </div>
          <div className="card-body">
            <h5 className="card-title"><Link to="/Events">Marketing Strategies</Link></h5>
            <p className="fst-italic text-center">Sunday, November 15th at 7:00 pm</p>
            <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
{/* <!-- End Events Section --> */}

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

export default Events
