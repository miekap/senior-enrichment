import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history'

function SingleStudent(props) {

  const student = props.students.length
    && props.students.filter(student => {
      return (student.id == props.match.params.studentId)
    })[0]

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

      <div className="row student-items">
        <div className="col-sm-12 col-md-12 col-lg-12 go-center">
          <h3>Student</h3>
          <table className="single-student-table"><tbody>
            <tr><td className="left">Name:</td><td>{student && student.name}</td></tr>
            <tr><td className="left">Email:</td><td>{student && student.email}</td></tr>
            <tr><td className="left">Campus:</td><td><Link to={`/campus/${student.campusId}`}>{student && student.campus.name}</Link></td></tr>
          </tbody></table>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    students: state.students
  };
};

export default connect(mapStateToProps)(SingleStudent);
