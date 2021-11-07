import axios from 'axios'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Courses extends Component {


    state = {
        courses: [],
        count: 0

    }

    componentDidMount() {
        axios.get("json/Courses.json")
            .then(res => {
                this.setState({
                    courses: res.data.courses
                })
            })
    }
    render() {



        return (

            <div>




                <div className="super_container">
                    {/* <!-- Menu --> */}
                    <div className="menu_container menu_mm">

                        {/* <!-- Menu Close Button --> */}
                        <div className="menu_close_container">
                            <div className="menu_close"></div>
                        </div>

                        {/* <!-- Menu Items --> */}
                        <div className="menu_inner menu_mm">
                            <div className="menu menu_mm">
                                <ul className="menu_list menu_mm">
                                    <li className="menu_item menu_mm"><NavLink to="/Index">Home</NavLink></li>
                                    <li className="menu_item menu_mm"><NavLink to="/">About us</NavLink></li>
                                    <li className="menu_item menu_mm"><NavLink to="/">Courses</NavLink></li>
                                    <li className="menu_item menu_mm"><NavLink to="/Elements">Elements</NavLink></li>
                                    <li className="menu_item menu_mm"><NavLink to="/News">News</NavLink></li>
                                    <li className="menu_item menu_mm"><NavLink to="/Contact">Contact</NavLink></li>
                                </ul>

                                {/* <!-- Menu Social --> */}

                                <div className="menu_social_container menu_mm">
                                    <ul className="menu_social menu_mm">
                                        <li className="menu_social_item menu_mm"><NavLink to="/"><i className="fab fa-pinterest"></i></NavLink></li>
                                        <li className="menu_social_item menu_mm"><NavLink to="/"><i className="fab fa-linkedin-in"></i></NavLink></li>
                                        <li className="menu_social_item menu_mm"><NavLink to="/"><i className="fab fa-instagram"></i></NavLink></li>
                                        <li className="menu_social_item menu_mm"><NavLink to="/"><i className="fab fa-facebook-f"></i></NavLink></li>
                                        <li className="menu_social_item menu_mm"><NavLink to="/"><i className="fab fa-twitter"></i></NavLink></li>
                                    </ul>
                                </div>

                                <div className="menu_copyright menu_mm">Colorlib All rights reserved</div>
                            </div>

                        </div>

                    </div>

                    {/* <!-- Home --> */}









                    <div className="hssome">
                        <div className="home_background_container prlx_parent">
                            <div className="home_background prlx" style={{ backgroundImage: 'url(images/courses_background.jpg)' }} ></div>
                        </div>
                        <div className="home_content">
                            <h1>Courses</h1>
                        </div>
                    </div>

                    {/* <!-- Popular --> */}

                    <div className="popular page_section">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="section_title text-center">
                                        <h1>Popular Courses</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="row course_boxes">


                                {this.state.courses.map(course =>


                                    <div className="col-lg-4 course_box" >
                                        <div className="card" key={course.id}>
                                            <img className="card-img-top" src={course.img} alt="https://unsplash.com/@juanmramosjr" />
                                            <div className="card-body text-center">
                                                <div className="card-title"><a href="courses.html">{course.specialty}</a></div>
                                                <div className="card-text">{course.skills}</div>
                                            </div>
                                            <div className="price_box d-flex flex-row align-items-center">
                                                <div className="course_author_image">
                                                    <img src={course.imgperson} alt="https://unsplash.com/@mehdizadeh" />
                                                </div>
                                                <div className="course_author_name">{course.name}, <span>Author</span></div>
                                                <div className="course_price d-flex flex-column align-items-center justify-content-center"><span>$ {course.price}</span></div>
                                            </div>
                                        </div>
                                    </div>

                                )}
                            </div>

                        </div>
                    </div>


                </div>


            </div>
        )
    }
}

export default Courses
