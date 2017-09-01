import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import store, { fetchCampuses, fetchStudents } from '../store';

import Navbar from './Navbar';
import Home from './Home';
import Campuses from './Campuses';
import AddCampus from './AddCampus';
import EditCampus from './EditCampus';
import SingleCampus from './SingleCampus';
import Students from './Students';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import SingleStudent from './SingleStudent';

///for metadata
// import { Helmet } from 'react-helmet';


export default class Root extends Component {

  componentDidMount () {
    store.dispatch(fetchCampuses());
    store.dispatch(fetchStudents());
  }

  render() {
    return (
      <div>
        <Route path="/" component={Navbar} />
        <Route path="/:active" component={Navbar} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/campuses" component={Campuses} />
            <Route path="/campus/add" component={AddCampus} />
            <Route path="/campus/edit/:campusId" component={EditCampus} />
            <Route path="/campus/:campusId" component={SingleCampus} />
            <Route path="/students" component={Students} />
            <Route path="/student/add" component={AddStudent} />
            <Route path="/student/edit/:studentId" component={EditStudent} />
            <Route path="/student/:studentId" component={SingleStudent} />
            <Redirect to="/" />
          </Switch>
      </div>
    );
  }
}
