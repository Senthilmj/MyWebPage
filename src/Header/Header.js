import React ,{Component} from 'react';
import { NavLink} from 'react-router-dom'
import './Header.css';



class Header extends Component {

    render() {
        if (window.location.pathname === '/admin') return <div></div>;
        return (
            <header className="header">
                <div className="headerContainer">
                    <div className="row">
                        <div className="col-xl-3 col-6">
                            <a href="/" className="logo">
                                <img src="/images/logo.png" alt="logo img"></img>
                            </a>
                        </div>
                        <div className="col-lg-6 hide-for-lg-down">
                                <nav>
                                    <ul id="menu-main" className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                                        <li  className="nav-item "><NavLink to='/' exact activeClassName="active">Home</NavLink></li>
                                        <li  className="nav-item "><NavLink to='/about' activeClassName="active">About Us</NavLink></li>
                                        <li  className="nav-item "><NavLink to='/agencies' activeClassName="active">Agencies</NavLink></li>
                                        <li  className="nav-item "><NavLink to='/contactUs' activeClassName="active">Contact Us</NavLink></li>
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