import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <span className="navbar-brand">
                    <div className='logo'></div>
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <Link to='/'><li className="nav-item">Jobs</li></Link>
                    <Link to='/'><li className="nav-item">About Company</li></Link>
                    <Link to='/'><li className="nav-item">Testmonials</li></Link>
                    <Link to='/'><li className="nav-item">Contact Us</li></Link>
                    </ul>
                </div>
            </nav>
        )
    }
};
export default Navbar