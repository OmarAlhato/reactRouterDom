import React, { Component } from 'react'
import {BrowserRouter, Link, NavLink, Switch, Router,Route} from 'react-router-dom';
import About from './Files/About/About';
import Contact from './Files/Contact/Contact';
import Courses from './Files/Courses/Courses';
import Events from './Files/Events/Events';
import Index from './Files/Index/Index';
import Pricing from './Files/Pricing/Pricing';
import Trainers from './Files/Trainers/Trainers';


import NotFound from './NotFound';
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><NavLink to="/">Mentor</NavLink></h1>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Courses">Courses</NavLink></li>
          <li><NavLink to="/Trainers">Trainers</NavLink></li>
          <li><NavLink to="/Events">Events</NavLink></li>
          <li><NavLink to="/Pricing">Pricing</NavLink></li>
          <li className="dropdown"><NavLink to="/"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></NavLink>
            <ul>
              <li><NavLink to="/">Drop Down 1</NavLink></li>
              <li className="dropdown"><NavLink to="/"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></NavLink>
                <ul>
                  <li><NavLink to="/">Deep Drop Down 1</NavLink></li>
                  <li><NavLink to="/">Deep Drop Down 2</NavLink></li>
                  <li><NavLink to="/">Deep Drop Down 3</NavLink></li>
                  <li><NavLink to="/">Deep Drop Down 4</NavLink></li>
                  <li><NavLink to="/">Deep Drop Down 5</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/">Drop Down 2</NavLink></li>
              <li><NavLink to="/">Drop Down 3</NavLink></li>
              <li><NavLink to="/">Drop Down 4</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <NavLink to="/Courses" className="get-started-btn">Get Started</NavLink>

    </div>
  </header>











        <Switch>
<Route path="/" component={Index} exact />
<Route path="/Courses" component={Courses} exact />
<Route path="/About" component={About} exact/>
<Route path="/Contact" component={Contact} exact/>
<Route path="/Trainers" component={Trainers} exact/>
<Route path="/Events" component={Events} exact/>
<Route path="/Pricing" component={Pricing} exact/>

 <Route component={NotFound} exact/> 

</Switch>

      </BrowserRouter>
    )
  }
}

export default App
