import React from 'react';
import { connect } from 'react-redux';
import { postStudent } from '../store';
import history from '../history'


class AddStudent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentName: '',
      studentEmail: '',
      studentCampusId: ''
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
    const newStudent = {
      name: event.target.studentName.value,
      email: event.target.studentEmail.value,
      campusId: event.target.studentCampusId.value,
    };
    this.props.postStudent(newStudent);
    history.push('/students');
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
          <h3>Add a Student:</h3>
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
            value={this.state.studentName}
            onChange={this.handleChange}
          /><br /><br />
          <input
            name="studentEmail"
            type="email"
            required
            placeholder="Enter Valid Email"
            value={this.state.studentEmail}
            onChange={this.handleChange}
          /><br /><br />
          <select
            name="studentCampusId"
            required
            onChange={this.handleChange}
          >
            <option
              value="">Select A Campus
            </option>
            {
              this.props.campuses && this.props.campuses.map(campus => (
                <option
                  key={campus.id}
                  value={campus.id}
                >{campus.name}
                </option>
              )
              )
            }
          </select><br /><br />
          <button
            type="submit"
            className="btn btn-info">
            Add Student
          </button>
      </form>
      </div>

    );
  }
}

const mapStateToProps = (state) => (
  {
    students: state.students,
    campuses: state.campuses
  }
);

const mapDispatchToProps = { postStudent };

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);

