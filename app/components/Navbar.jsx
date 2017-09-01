import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav id="myNavbar" className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">Margaret Hamilton Interplanetary Academy of JavaScript</Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="nav navbar-nav navbar-right">
            <li className={
              (!props.match.params.active)
                ? 'active'
                : ''
            }><NavLink to="/">Home</NavLink></li>
            <li className={
              (props.match.params.active === 'campuses')
                ? 'active'
                : ''
            }><NavLink to="/campuses">Campuses</NavLink></li>
            <li className={
              (props.match.params.active === 'students')
                ? 'active'
                : ''
            }><NavLink to="/students">Students</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
