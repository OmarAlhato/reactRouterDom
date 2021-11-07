import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Elements extends Component {


    render() {
        return (


            <div>

                <div class="super_container">

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
                                    <li className="menu_item menu_mm"><NavLink to="/Courses">Courses</NavLink></li>
                                    <li className="menu_item menu_mm"><NavLink to="/">Elements</NavLink></li>
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

                                <div className="menu_copyright menu_mm">
                                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* <!-- Home --> */}
                    {/* 
	<div className="home">
		<div className="home_background_container prlx_parent">
			<div className="home_background prlx" style="background-image:url(images/contact_background.jpg)"></div>
		</div>
		<div className="home_content">
			<h1>Contact</h1>
		</div>
	</div> */}

                    <div className="hssome">
                        <div className="home_background_container prlx_parent">
                            <div className="home_background prlx" style={{ backgroundImage: 'url(images/courses_background.jpg)' }} ></div>
                        </div>
                        <div className="home_content">
                            <h1>Elements</h1>
                        </div>
                    </div>

                    {/* <!-- Elements --> */}

                    <div className="elements">

                        {/* <!-- Buttons --> */}
                        <div className="buttons">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="elements_title">Buttons</div>
                                        <div className="buttons_container">
                                            <div className="button button_color_1 text-center trans_200"><a href="#">Read More</a></div>
                                            <div className="button button_color_2 text-center trans_200"><a href="#">Read More</a></div>
                                            <div className="button button_line_1 text-center trans_200"><a href="#">Read More</a></div>
                                            <div className="button button_line_2 text-center trans_200"><a href="#">Read More</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Progress Bars and Accordions --> */}




                        <div className="milestones">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="elements_title">Milestones</div>
                                    </div>
                                </div>
                            </div>

                            <div className="milestones_container">
                                <div className="milestones_background" style={{ backgroundImage: 'url(images/milestones_background.jpg)' }} > </div>

                                <div className="container">
                                    <div className="row">

                                        {/* <!-- Milestone --> */}
                                        <div className="col-lg-3 milestone_col">
                                            <div className="milestone text-center">
                                                <div className="milestone_icon"><img src="images/milestone_1.svg" alt="https://www.flaticon.com/authors/zlatko-najdenovski" /></div>
                                                <div className="milestone_counter" data-end-value="750">750</div>
                                                <div className="milestone_text">Current Students</div>
                                            </div>
                                        </div>

                                        {/* <!-- Milestone --> */}
                                        <div className="col-lg-3 milestone_col">
                                            <div className="milestone text-center">
                                                <div className="milestone_icon"><img src="images/milestone_2.svg" alt="https://www.flaticon.com/authors/zlatko-najdenovski" /></div>
                                                <div className="milestone_counter" data-end-value="120">120</div>
                                                <div className="milestone_text">Certified Teachers</div>
                                            </div>
                                        </div>

                                        {/* <!-- Milestone --> */}
                                        <div className="col-lg-3 milestone_col">
                                            <div className="milestone text-center">
                                                <div className="milestone_icon"><img src="images/milestone_3.svg" alt="https://www.flaticon.com/authors/zlatko-najdenovski" /></div>
                                                <div className="milestone_counter" data-end-value="39">39</div>
                                                <div className="milestone_text">Approved Courses</div>
                                            </div>
                                        </div>

                                        {/* <!-- Milestone --> */}
                                        <div className="col-lg-3 milestone_col">
                                            <div className="milestone text-center">
                                                <div className="milestone_icon"><img src="images/milestone_4.svg" alt="https://www.flaticon.com/authors/zlatko-najdenovski" /></div>
                                                <div className="milestone_counter" data-end-value="3500" data-sign-before="+">+3500</div>
                                                <div className="milestone_text">Graduate Students</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* <!-- Icon Boxes --> */}

                        <div className="icon_boxes">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="elements_title">Icon Boxes</div>
                                    </div>
                                </div>

                                <div className="row icon_boxes_container">

                                    <div className="col-lg-4 icon_box text-left d-flex flex-column align-items-start justify-content-start">
                                        <div className="icon_container d-flex flex-column justify-content-end">
                                            <img src="images/earth-globe.svg" alt="" />
                                        </div>
                                        <h3>Online Courses</h3>
                                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                                    </div>

                                    <div className="col-lg-4 icon_box text-left d-flex flex-column align-items-start justify-content-start">
                                        <div className="icon_container d-flex flex-column justify-content-end">
                                            <img src="images/exam.svg" alt="" />
                                        </div>
                                        <h3>Indoor Courses</h3>
                                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                                    </div>

                                    <div className="col-lg-4 icon_box text-left d-flex flex-column align-items-start justify-content-start">
                                        <div className="icon_container d-flex flex-column justify-content-end">
                                            <img src="images/books.svg" alt="" />
                                        </div>
                                        <h3>Amazing Library</h3>
                                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                                    </div>

                                </div>

                                <br />
                                <br />
                                <br />

                            </div>
                        </div>

                    </div>

                    {/* <!-- Footer -->    */}



                </div>
            </div>
        )
    }
}

export default Elements
