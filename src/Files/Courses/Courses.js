import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';
export class Courses extends Component {
    state = {
        Persons: [
          {
              jobs: "Web Development",
              price:"$169",
              specialty:"Website Design",
              deatiles:"Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
              name:"Antonio",
              img:"assets/img/course-1.jpg",
              persionimg:"assets/img/trainers/trainer-1.jpg",
            },
          {
            jobs: "Marketing",
            price:"$250",
            specialty:"Search Engine Optimization",
            deatiles:"Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
            name:"Lana",
            img:"assets/img/course-2.jpg",
            persionimg:"assets/img/trainers/trainer-2.jpg"


            },
          {
            jobs: "Content",
            price:"$180",
            specialty:"Copywriting",
            deatiles:"Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
            name:"Brandon",
            img:"assets/img/course-3.jpg",
            persionimg:"assets/img/trainers/trainer-3.jpg",


            }
    
        ]
      }
      changeDataFuns = () =>{
     this.setState(
        {
            Persons: [
              {
                  jobs: "Web Desing",
                  price:"$200",
                  specialty:"Website Design Applaction",
                  deatiles:"Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
                  name:"Rewan",
                  img:"assets/img/course-1.jpg",
                  persionimg:"assets/img/trainers/trainer-2.jpg",
                },
              {
                jobs: "Marketing Shop",
                price:"$300",
                specialty:"Search Engine",
                deatiles:"Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
                name:"Lila",
                img:" assets/img/course-3.jpg ",
                persionimg:"assets/img/trainers/trainer-1.jpg"
    
    
                },
              {
                jobs: "Content About",
                price:"$400",
                specialty:"Copywriting return",
                deatiles:"Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
                name:"omar",
                img:"assets/img/course-2.jpg",
                persionimg:"assets/img/trainers/trainer-3.jpg",
    
    
                }
        
            ]
          }
     )
      }
    render() {
        return (
            <div>
                

                <main id="main" data-aos="fade-in">

{/* <!-- ======= Breadcrumbs ======= --> */}
<div className="breadcrumbs">
  <div className="container">
    <h2>Courses</h2>
    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
  </div>
</div>
{/* <!-- End Breadcrumbs --> */}

{/* <!-- ======= Courses Section ======= --> */}
<section id="courses" className="courses">
  <div className="container" data-aos="fade-up">

    <div className="row" data-aos="zoom-in" data-aos-delay="100">

      <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
        <div className="course-item">
          <img src={this.state.Persons[0].img} className="img-fluid" alt="..."/>
          <div className="course-content">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4>{this.state.Persons[0].jobs}</h4>
              <p className="price">{this.state.Persons[0].price}</p>
            </div>

             <h3><Link to="/Courses">{this.state.Persons[0].specialty}</Link></h3>{/*course-details.html */}
            <p>{this.state.Persons[0].deatiles}</p>
            <div className="trainer d-flex justify-content-between align-items-center">
              <div className="trainer-profile d-flex align-items-center">
                <img src={this.state.Persons[0].persionimg} className="img-fluid" alt=""/>
                <span>{this.state.Persons[0].name}</span>
              </div>
              <div className="trainer-rank d-flex align-items-center">
                <i className="bx bx-user"></i>&nbsp;50
                &nbsp;&nbsp;
                <i className="bx bx-heart"></i>&nbsp;65
              </div>
            </div>
          </div>
        </div>
      </div> 
      {/* <!-- End Course Item--> */}

      <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
        <div className="course-item">
          <img src={this.state.Persons[1].img} className="img-fluid" alt="..."/>
          <div className="course-content">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4>{this.state.Persons[1].jobs}</h4>
              <p className="price">{this.state.Persons[1].price}</p>
            </div>

            <h3><Link to="/Courses">{this.state.Persons[1].specialty}</Link></h3>{/*course-details.html */}
            <p>{this.state.Persons[1].deatiles}</p>
            <div className="trainer d-flex justify-content-between align-items-center">
              <div className="trainer-profile d-flex align-items-center">
                <img src={this.state.Persons[1].persionimg} className="img-fluid" alt=""/>
                <span>{this.state.Persons[1].name}</span>
              </div>
              <div className="trainer-rank d-flex align-items-center">
                <i className="bx bx-user"></i>&nbsp;35
                &nbsp;&nbsp;
                <i className="bx bx-heart"></i>&nbsp;42
              </div>
            </div>
          </div>
        </div>
      </div> 
      {/* <!-- End Course Item--> */}

      <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
        <div className="course-item">
          <img src={this.state.Persons[2].img} className="img-fluid" alt="..."/>
          <div className="course-content">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4>{this.state.Persons[2].jobs}</h4>
              <p className="price">{this.state.Persons[2].price}</p>
            </div>

            <h3><Link to="/Courses">{this.state.Persons[2].specialty}</Link></h3>{/*course-details.html */}
            <p>{this.state.Persons[2].deatiles}</p>
            <div className="trainer d-flex justify-content-between align-items-center">
              <div className="trainer-profile d-flex align-items-center">
                <img src={this.state.Persons[2].persionimg} className="img-fluid" alt=""/>
                <span>{this.state.Persons[2].name}</span>
              </div>
              <div className="trainer-rank d-flex align-items-center">
                <i className="bx bx-user"></i>&nbsp;20
                &nbsp;&nbsp;
                <i className="bx bx-heart"></i>&nbsp;85
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* <!-- End Course Item--> */}

    </div>

  </div>
</section>
<button type="button" className="Buttonchang container btn  btn-block"  onClick={this.changeDataFuns}>Data Change</button>

{/* <!-- End Courses Section --> */}

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

{/* <!-- ======= Footer ======= --> */}

            </div>
        )
    }
}

export default Courses
