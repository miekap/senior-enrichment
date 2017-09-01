import React from 'react';
import { connect } from 'react-redux';
import { editStudent } from '../store';
import history from '../history'


class EditStudent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentName: props.student.name,
      studentEmail: props.student.email,
      studentCampusId: props.student.campusId
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    history.goBack();
  }

  handleChange(event) {
    if (event.target.name == 'studentName')
      this.setState({studentName: event.target.value})
    if (event.target.name == 'studentEmail')
      this.setState({studentEmail: event.target.value})
    if (event.target.name == 'studentCampusId')
      this.setState({studentCampusId: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const thisStudent = {
      id: this.props.student.id,
      name: this.state.studentName,
      email: this.state.studentEmail,
      campusId: this.state.studentCampusId,
    };
    this.props.editStudent(thisStudent);
    // history.push('/students');
  }


  render() {
    return (
      <div>
        <div className="col-sm-12 col-md-12 col-lg-12 more-padding">
          <button
            className="btn btn-info"
            onClick={this.handleClick}>
            <span className="glyphicon glyphicon-chevron-left" /> Back
          </button>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-12 go-center">
          <h3>Edit Student:</h3>
        </div>

        <form
          className="go-center"
          id="new-student-form"
          onSubmit={this.handleSubmit}>
          <input
            name="studentName"
            type="text"
            required
            placeholder="Enter Name"
            value={this.state.studentName
              || this.props.student.name}
            onChange={this.handleChange}
          /><br /><br />
          <input
            name="studentEmail"
            type="email"
            required
            placeholder="Enter Valid Email"
            value={this.state.studentEmail
              || this.props.student.email}
            onChange={this.handleChange}
          /><br /><br />
          <select
            name="studentCampusId"
            required
            onChange={this.handleChange}
            value={this.state.studentCampusId
              || this.props.student.campusId}
          >
          <option
            value="">Select A Campus
          </option>
            {
              this.props.campuses && this.props.campuses.map(campus => (
                <option
                  key={campus.id}
                  value={campus.id}>
                  {campus.name}
                </option>
              )
              )
            }
          </select><br /><br />
          <button
            type="submit"
            className="btn btn-info">
            Change Student Info
          </button>
      </form>
      </div>

    );
  }
}

const mapStateToProps = (state, ownProps) => (
  {
    student: state.students.length
      && state.students.filter(student => {
      return (student.id == ownProps.match.params.studentId)
    })[0],
    students: state.students,
    campuses: state.campuses
  }
);

const mapDispatchToProps = { editStudent };

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);

