import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history'

function SingleCampus(props) {

  function handleClick(event) {
    event.preventDefault();
    history.goBack();
  }

  return (
    <div>

      <div className="col-sm-12 col-md-12 col-lg-12 more-padding">
        <button className="btn btn-default" onClick={handleClick}>
          <span className="glyphicon glyphicon-chevron-left" />
        </button>
      </div>

      <div className="row campus-items">
        <div className="col-sm-12 col-md-6 col-lg-6 go-center">
        <h3>Campus:</h3>
        {
          props.campuses.length
            && props.campuses.filter(campus => {
              return (campus.id == props.match.params.campusId)
            }).map(campus => {
              return (
                <h4 key={campus.id}>{campus.name}<br />
                  <img className="campus" src={campus.imageUrl} />
                </h4>
              )
            })
        }
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          Students:
          <ol>
          {
            props.students.length
            && props.students.filter(student => {
              return (
                student.campusId == props.match.params.campusId
              )
            }).map(student => {
              return (
                <li key={student.id}><Link to={`/student/${student.id}`}>{student.name}</Link></li>
              )
            })
          }
          </ol>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

export default connect(mapStateToProps)(SingleCampus);
