import React from 'react';
import { connect } from 'react-redux';
import { postCampus } from '../store';
import history from '../history'


class AddCampus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campusName: '',
      campusStudents: ''
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
    if (event.target.name == 'campusName')
      this.setState({campusName: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const newCampus = {
      name: event.target.campusName.value,
    };
    this.props.postCampus(newCampus);
    history.push('/campuses');
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
          <h3>Add a Campus:</h3>
        </div>

        <form
          className="go-center"
          id="new-campus-form"
          onSubmit={this.handleSubmit}>
          <input
            name="campusName"
            type="text"
            required
            placeholder="Enter Name"
            value={this.state.campusName}
            onChange={this.handleChange}
          /><br /><br />
          <button
            type="submit"
            className="btn btn-info">
            Add Campus
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

const mapDispatchToProps = { postCampus };

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus);

