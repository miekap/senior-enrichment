import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeStudent } from '../store'

function Students(props) {

  function handleClick(student) {
    props.removeStudent(student);
  }

  return (
    <div>
      <div className="col-sm-12 col-md-12 col-lg-12 go-right more-padding">
        <Link to="/student/add">
          <button
            className="btn btn-info">
            <span className="glyphicon glyphicon-plus" /> Add a Student
          </button>
        </Link>
      </div>
      <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Campus</th>
          <th></th>
          <th></th>
          </tr>
      </thead>
      <tbody>
        {
          props.students.length
            && props.students.map((student, index) => (
            <tr key={student.id}>
              <td>
                { index + 1 }
              </td>
              <td><Link to={`/student/${student.id}`}>{ student.name }</Link></td>
              <td><Link to={`/campus/${student.campusId}`}>{ student.campus.name }</Link></td>
              <td>
                <Link to={`/student/edit/${student.id}`}>
                  <button
                    className="btn btn-info">
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleClick(student)}>
                  <span className="glyphicon glyphicon-remove" />
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
  );
}

const mapStateToProps = function (state) {
  return {
    students: state.students
  };
};

const mapDispatchToProps = {
    removeStudent
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(Students);
