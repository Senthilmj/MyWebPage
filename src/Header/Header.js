import React ,{Component} from 'react';
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
                    <div class="col-lg-6 hide-for-lg-down">
                            <nav>
                                <ul id="menu-main" class="navbar-nav mr-auto mt-2 mt-lg-0 ">
                                <li  class=" nav-item "><a href="/" class="nav-link">Home</a></li>
                                <li  class="  nav-item "><a href="https://sproutsend.com/features/" class="nav-link">Features</a></li>
                                <li  class="  nav-item "><a href="https://sproutsend.com/agencies/" class="nav-link">Agencies</a></li>
                                <li  class="  nav-item "><a href="https://sproutsend.com/contact-us/" class="nav-link">Contact Us</a></li>
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