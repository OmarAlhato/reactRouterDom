import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            lastname: '',
            errorName: '',
            errorage: ''

        }
    }


    handelrForm = (e) => {
        this.setState({ username: e.target.value }); //input

    }


    handelrFormm = (e) => {
        this.setState({ email: e.target.value }); //input

    }
    mySubmitHandler = (e) => {
        e.preventDefault();//stop refresh
        alert(" succefuly login : " + this.state.email)
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let error = '';
        console.log(val);
        if (nam === "lastname") {
            console.log(Number('5'));
            if ((val != '') && (Number(val))) {
                console.log("in val and number");
                error = <strong>Your name must be String</strong>
            }

        }
        this.setState({ errorName: error });
        this.setState({ [nam]: val });
    }

    render() {

        let header = '';
        if (this.state.username) {
            header = <p style={{ color: 'blue' }}> YOUR NAME IS {this.state.username}</p>
        }
        else {
            header = ''
        }


        let headerr = '';
        if (this.state.email) {
            headerr = <p style={{ color: 'blue' }}> YOUR EMAIL IS {this.state.email}</p>
        }
        else {
            headerr = ''
        }
        return (
            <div className="super_container" >

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

                <div className="homeass">
                    <div className="home_background_container prlx_parent">
                        <div className="home_background prlx" style={{ backgroundImage: 'url(images/contact_background.jpg)' }} ></div>
                    </div>
                    <div className="home_content">
                        <h1>Contact</h1>
                    </div>
                </div>

                {/* <!-- Contact --> */}

                <div className="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">



                                <form onSubmit={this.mySubmitHandler} >
                                    {/* <h1>{this.state.username}</h1> */}
                                    <span style={{ color: 'red' }}>{this.state.errorName}</span>
                                    <br />
                                    <br />

                                    <input type="text" className="input_field contact_form_name" name="lastname" id="iddd" placeholder="Name" onChange={this.myChangeHandler} />
                                    {/* <input type="text" className="input_field contact_form_name" name="username" id="idd" placeholder="Name" required="required" onChange={this.handelrForm}></input> */}
                                    <br />
                                    {headerr}
                                    <input type="email" className="input_field contact_form_name" name="email" id="idd" placeholder="Email" required="required" onChange={this.handelrFormm}></input>
                                    <br />
                                    <br />

                                    <textarea id="contact_form_message" className="text_field contact_form_message" name="message" placeholder="Message" required="required" data-error="Please, write us a message."></textarea>
                                    {/* 
                    <input type="text" className="input_field contact_form_name" name="username" id="idd" placeholder="Name" required="required" onChange={this.handelrForm} onChange={this.myChangeHandler}/> 
                    <spam>error Name is= {this.state.errorName}</spam> */}


                                    <button id="contact_send_btn" type="submit" className="contact_send_btn trans_200" value="Submit">send message</button>

                                </form>



                            </div>

                            <div className="col-lg-4">
                                <div className="about">
                                    <div className="about_title">Join Courses</div>
                                    <p className="about_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius luctus. Praesent finibus risus facilisis ultricies. Etiam eu purus nec eros varius luctus.</p>

                                    <div className="contact_info">
                                        <ul>
                                            <li className="contact_info_item">
                                                <div className="contact_info_icon">
                                                    <img src="images/placeholder.svg" alt="https://www.flaticon.com/authors/lucy-g" />
                                                </div>
                                                Blvd Libertad, 34 m05200 Arévalo
                                            </li>
                                            <li className="contact_info_item">
                                                <div className="contact_info_icon">
                                                    <img src="images/smartphone.svg" alt="https://www.flaticon.com/authors/lucy-g" />
                                                </div>
                                                0034 37483 2445 322
                                            </li>
                                            <li className="contact_info_item">
                                                <div className="contact_info_icon">
                                                    <img src="images/envelope.svg" alt="https://www.flaticon.com/authors/lucy-g" />
                                                </div>hello@company.com
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>

                        {/* <!-- Google Map --> */}



                    </div>
                </div>


            </div>
        )
    }
}

export default Contact
