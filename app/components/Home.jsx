import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {

  return (
    <div>
      <div className="row">
        <div className="jumbotron">
          welcome
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 go-center">
          view our
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 go-center">
          <Link to="/campuses">campuses</Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 go-center">
          <Link to="/students">students</Link>
        </div>
      </div>
    </div>
  )
}
