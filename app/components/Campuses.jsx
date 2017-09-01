import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCampus, deleteStudent } from '../store'

function Campuses(props) {

  function handleClick(campus) {
    props.removeCampus(campus);
    props.students.length
    && props.students.filter(student => {
      return (student.campusId == campus.id)
    }).forEach(student => {
      props.deleteStudent(student)
    })
  }

  return (
    <div>
      <div className="col-sm-12 col-md-12 col-lg-12 go-right more-padding">
        <Link to="/campus/add">
          <button
            className="btn btn-info">
            <span className="glyphicon glyphicon-plus" /> Add a Campus
          </button>
        </Link>
      </div>

      <div className="row campus-items">
        {
          props.campuses.length
            && props.campuses.map(campus => {
              return (
                <div key={campus.id} className="col-sm-6 col-md-6 col-lg-3">
                  <button
                    style={{float: 'right'}}
                    className="btn btn-danger"
                    onClick={() => handleClick(campus)}>
                    <span className="glyphicon glyphicon-remove" />
                  </button>
                  <Link to={`/campus/${campus.id}`}>
                    <h2>{campus.name.toUpperCase()}</h2>
                    <p><img className="campus" src={campus.imageUrl} /></p>
                    <h4>View Campus</h4>
                  </Link>
                </div>
              )
            })
        }

      </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    students: state.students,
    campuses: state.campuses
  };
};

const mapDispatchToProps = {
    removeCampus,
    deleteStudent
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(Campuses);
