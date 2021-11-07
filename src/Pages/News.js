import axios from 'axios'

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class News extends Component {
    state = {
        news: [],
        count: 0

    }
    addFunction = () => {
        this.setState({ count: this.state.count + 1 })
    }

    minsFunction = () => {
        this.setState({ count: this.state.count - 1 })
    }


    componentDidMount() {
        axios.get("json/News.json")
            .then(res => {
                this.setState({
                    news: res.data.news
                })
            })
    }
    render() {
        return (
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
                                <li className="menu_item menu_mm"><NavLink to="/Courses">Courses</NavLink></li>
                                <li className="menu_item menu_mm"><NavLink to="/Elements">Elements</NavLink></li>
                                <li className="menu_item menu_mm"><NavLink to="/">News</NavLink></li>
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

                <div className="homeqq">
                    <div className="home_background_container prlx_parent">
                        <div className="home_background prlx" style={{ backgroundImage: 'url(images/news_background.jpg)' }} ></div>
                    </div>
                    <div className="home_content">
                        <h1>The News</h1>
                    </div>
                </div>

                {/* <!-- News --> */}

                <div className="news">
                    <div className="container">
                        <div className="row">

                            {/* <!-- News Column --> */}

                            <div className="col-lg-8">

                                <div className="news_posts">
                                    {/* <!-- News Post --> */}





                                    {this.state.news.map(newss =>

                                        <div className="news_post" key={newss.id}>
                                            <div className="news_post_image">
                                                <img src={newss.img} alt="https://unsplash.com/@dsmacinnes" />
                                            </div>
                                            <div className="news_post_top d-flex flex-column flex-sm-row">
                                                <div className="news_post_date_container">
                                                    <div className="news_post_date d-flex flex-column align-items-center justify-content-center">
                                                        <div>{newss.commints}</div>
                                                        <div>dec</div>
                                                    </div>
                                                </div>
                                                <div className="news_post_title_container">
                                                    <div className="news_post_title">
                                                        <NavLink to="/">{newss.question}</NavLink>
                                                    </div>
                                                    <div className="news_post_meta">
                                                        <span className="news_post_author"><NavLink to="/">By{newss.name}</NavLink></span>
                                                        <span>|</span>
                                                        <span className="news_post_comments"><NavLink to="/">3 {newss.commints}</NavLink></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="news_post_text">
                                                <p>{newss.descrition}.</p>
                                            </div>
                                            <div className="news_post_button text-center trans_200">
                                                <NavLink to="/">Read More</NavLink>
                                            </div>

                                        </div>

                                    )}




                                </div>

                                {/* <!-- Page Nav --> */}

                                <div className="news_page_nav">
                                    <ul>
                                        <li onClick={this.addFunction} className="active text-center trans_200" style={{ fontSize: "30px" }}>+</li>
                                        <li className="text-center trans_200" style={{ fontSize: "30px" }}>{this.state.count}</li>
                                        <li onClick={this.minsFunction} className="active text-center trans_200" style={{ fontSize: "30px" }}>-</li>
                                    </ul>


                                </div>

                            </div>

                            {/* <!-- Sidebar Column --> */}

                            <div className="col-lg-4">
                                <div className="sidebar">

                                    {/* <!-- Archives --> */}
                                    <div className="sidebar_section">
                                        <div className="sidebar_section_title">
                                            <h3>Archives</h3>
                                        </div>
                                        <ul className="sidebar_list">
                                            <li className="sidebar_list_item"><NavLink to="/">Design Courses</NavLink></li>
                                            <li className="sidebar_list_item"><NavLink to="/">All you need to know</NavLink></li>
                                            <li className="sidebar_list_item"><NavLink to="/">Uncategorized</NavLink></li>
                                            <li className="sidebar_list_item"><NavLink to="/">About Our Departments</NavLink></li>
                                            <li className="sidebar_list_item"><NavLink to="/">Choose the right course</NavLink></li>
                                        </ul>
                                    </div>

                                    {/* <!-- Latest Posts --> */}

                                    <div className="sidebar_section">
                                        <div className="sidebar_section_title">
                                            <h3>Latest posts</h3>
                                        </div>

                                        <div className="latest_posts">

                                            {/* <!-- Latest Post --> */}

                                            {/* <!-- Latest Post --> */}
                                            {this.state.news.map(newsss =>

                                                <div className="latest_post">
                                                    <div className="latest_post_image">
                                                        <img src={newsss.img} alt="https://unsplash.com/@erothermel" />
                                                    </div>
                                                    <div className="latest_post_title"><NavLink to="/">{newsss.question}</NavLink></div>
                                                    <div className="latest_post_meta">
                                                        <span className="latest_post_author"><NavLink to="/">By {newsss.name}</NavLink></span>
                                                        <span>|</span>
                                                        <span className="latest_post_comments"><NavLink to="/">{newsss.commints} Comments</NavLink></span>
                                                    </div>
                                                </div>
                                            )}
                                            {/* <!-- Latest Post --> */}




                                        </div>

                                    </div>

                                    {/* <!-- Tags --> */}

                                    <div className="sidebar_section">
                                        <div className="sidebar_section_title">
                                            <h3>Tags</h3>
                                        </div>
                                        <div className="tags d-flex flex-row flex-wrap">
                                            <div className="tag"><NavLink to="/">Course</NavLink></div>
                                            <div className="tag"><NavLink to="/">Design</NavLink></div>
                                            <div className="tag"><NavLink to="/">FAQ</NavLink></div>
                                            <div className="tag"><NavLink to="/">Teachers</NavLink></div>
                                            <div className="tag"><NavLink to="/">School</NavLink></div>
                                            <div className="tag"><NavLink to="/">Graduate</NavLink></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default News

