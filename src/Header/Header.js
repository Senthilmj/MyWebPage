import React ,{Component} from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect} from 'react-router-dom'
import './Header.css';



class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="headerContainer">
                    <div className="row">
                        <div className="col-xl-3 col-6">
                            <a href="/" className="logo">
                                <img src="/images/site_logo.logo" alt="logo img"></img>
                            </a>
                        </div>
                        <div className="col-lg-6 hide-for-lg-down">
                                <nav>
                                    <ul id="menu-main" className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                                        <li  className="nav-item "><NavLink to='/'>Home</NavLink></li>
                                        <li  className="nav-item "><NavLink to='/about'>About Us</NavLink></li>
                                        <li  className="nav-item "><NavLink to='/agencies'>Agencies</NavLink></li>
                                        <li  className="nav-item "><NavLink to='/contactUs'>Contact Us</NavLink></li>
                                    </ul>
                                    
                                </nav>
                            </div>        
                    </div>
                </div>
            </header>

            
        )            
    }
}
export default Header;