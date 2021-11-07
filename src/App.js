import React, { Component } from 'react'
import { BrowserRouter, Link, NavLink, Switch, Router, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import Elements from './Pages/Elements';
import Index from './Pages/Index';
import News from './Pages/News';
export class App extends Component {
  render() {
    return (
      <BrowserRouter>


        <div className="super_container">


          <header className="header d-flex flex-row">
            <div className="header_content d-flex flex-row align-items-center">
              {/* <!-- Logo --> */}
              <div className="logo_container">
                <div className="logo">
                  <img src="images/logo.png" alt="" />
                  <span>course</span>
                </div>
              </div>

              {/* <!-- Main Navigation --> */}
              <nav className="main_nav_container">
                <div className="main_nav">
                  <ul className="main_nav_list">
                    <li className="main_nav_item"><NavLink to="/">home</NavLink></li>
                    <li className="main_nav_item"><NavLink to="/">about us</NavLink></li>
                    <li className="main_nav_item"><NavLink to="/Courses">courses</NavLink></li>
                    <li className="main_nav_item"><NavLink to="/Elements">elements</NavLink></li>
                    <li className="main_nav_item"><NavLink to="/News">news</NavLink></li>
                    <li className="main_nav_item"><NavLink to="/Contact">contact</NavLink></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="header_side d-flex flex-row justify-content-center align-items-center">
              <img src="images/phone-call.svg" alt="" />
              <span>+97 0292 9734 15</span>
            </div>

            {/* <!-- Hamburger --> */}
            <div className="hamburger_container">
              <i className="fas fa-bars trans_200"></i>
            </div>

          </header>




















        </div>

        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/Courses" component={Courses} exact />
          <Route path="/Contact" component={Contact} exact />
          <Route path="/Elements" component={Elements} exact />
          <Route path="/News" component={News} exact />
          <Route component={NotFound} exact />
        </Switch>









        <footer className="footer">
          <div className="container">

            {/* <!-- Newsletter --> */}

            <div className="newsletter">
              <div className="row">
                <div className="col">
                  <div className="section_title text-center">
                    <h1>Subscribe to newsletter</h1>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col text-center">
                  <div className="newsletter_form_container mx-auto">
                    <form action="post">
                      <div className="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-center">
                        <input id="newsletter_email" className="newsletter_email" type="email" placeholder="Email Address" required="required" data-error="Valid email is required." />
                        <button id="newsletter_submit" type="submit" className="newsletter_submit_btn trans_300" value="Submit">Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>

            {/* <!-- Footer Content --> */}

            <div className="footer_content">
              <div className="row">

                {/* <!-- Footer Column - About --> */}
                <div className="col-lg-3 footer_col">

                  {/* <!-- Logo --> */}
                  <div className="logo_container">
                    <div className="logo">
                      <img src="../images/logo.png" alt="" />
                      <span>course</span>
                    </div>
                  </div>

                  <p className="footer_about_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum, tempor lacus.</p>

                </div>

                {/* <!-- Footer Column - Menu --> */}

                <div className="col-lg-3 footer_col">
                  <div className="footer_column_title">Menu</div>
                  <div className="footer_column_content">
                    <ul>
                      <li className="footer_list_item"><NavLink to="/Index">Home</NavLink></li>
                      <li className="footer_list_item"><NavLink to="/">About Us</NavLink></li>
                      <li className="footer_list_item"><NavLink to="/">Courses</NavLink></li>
                      <li className="footer_list_item"><NavLink to="/News">News</NavLink></li>
                      <li className="footer_list_item"><NavLink to="/Nontact">Contact</NavLink></li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Footer Column - Usefull Links --> */}

                <div className="col-lg-3 footer_col">
                  <div className="footer_column_title">Usefull Links</div>
                  <div className="footer_column_content">
                    <ul>
                      <li className="footer_list_item"><NavLink to="/">Testimonials</NavLink></li>
                      <li className="footer_list_item"><NavLink to="/">FAQ</NavLink></li>
                      <li className="footer_list_item"><NavLink to="/">Community</NavLink></li>
                      <li className="footer_list_item"><NavLink to="/">Campus Pictures</NavLink></li>
                      <li className="footer_list_item"><NavLink to="/">Tuitions</NavLink></li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Footer Column - Contact --> */}

                <div className="col-lg-3 footer_col">
                  <div className="footer_column_title">Contact</div>
                  <div className="footer_column_content">
                    <ul>
                      <li className="footer_contact_item">
                        <div className="footer_contact_icon">
                          <img src="../images/placeholder.svg" alt="https://www.flaticon.com/authors/lucy-g" />
                        </div>
                        Palestine, Gaza,  DaerAlbalah
                      </li>
                      <li className="footer_contact_item">
                        <div className="footer_contact_icon">
                          <img src="../images/smartphone.svg" alt="https://www.flaticon.com/authors/lucy-g" />
                        </div>
                        +97 0292 9734 15                                                </li>
                      <li className="footer_contact_item">
                        <div className="footer_contact_icon">
                          <img src="../images/envelope.svg" alt="https://www.flaticon.com/authors/lucy-g" />
                        </div>Omarr.Alhato@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* <!-- Footer Copyright --> */}

            <div className="footer_bar d-flex flex-column flex-sm-row align-items-center">
              <div className="footer_copyright">
                <span>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Omar Alhato</a>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                </span>
              </div>
              <div className="footer_social ml-sm-auto">
                <ul className="menu_social">
                  <li className="menu_social_item"><NavLink to="/"><i className="fab fa-pinterest"></i></NavLink></li>
                  <li className="menu_social_item"><NavLink to="/"><i className="fab fa-linkedin-in"></i></NavLink></li>
                  <li className="menu_social_item"><NavLink to="/"><i className="fab fa-instagram"></i></NavLink></li>
                  <li className="menu_social_item"><NavLink to="/"><i className="fab fa-facebook-f"></i></NavLink></li>
                  <li className="menu_social_item"><NavLink to="/"><i className="fab fa-twitter"></i></NavLink></li>
                </ul>
              </div>
            </div>

          </div>
        </footer>







      </BrowserRouter>
    )
  }
}

export default App
