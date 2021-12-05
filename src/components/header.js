import { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './header.css'
import logo from './logo.png'

class Header extends Component{
    render(){
        return(
            <div>
                <div className="WebPageHeader">
                    <img src={logo} className="logo"></img>
                    <label className="nameofgroup">Mission For Thought</label>
                </div>
                <nav>
                    <ul>
                        <div className='homeLink'>
                            <Link to="/" className='hometext'>Home</Link>
                        </div>
                        <div className='aboutlink'>
                            <Link to="/about" className='hometext'>About</Link>
                        </div>
                        <div className='tutorlink'>
                            <Link to="/tutoring" className='hometext'>Tutoring</Link>
                        </div>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header