import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Jobdetails extends Component {
  state = {
    jobDtls: this.props.location.state.detail,
  }
  render() {
    return (
      <div className="container-fluid">
        <h1 className='pagetitle'>Job Details</h1>
        <div className='job-section details'>
          <h4 className='mb-15'>{this.state.jobDtls.title}</h4>
          <h6 className='posted'><i className="fa fa-calendar" aria-hidden="true"></i> {this.state.jobDtls.posted}</h6>
          <div className='mb-15'>
            <h6 ><i className="fa fa-building" aria-hidden="true"></i> {this.state.jobDtls.company}</h6>
            <h6><i className="fa fa-map-marker" aria-hidden="true"></i> {this.state.jobDtls.location}</h6>
          </div>
          <div className='mb-15'>
            <h6><i className="fa fa-briefcase" aria-hidden="true"></i> {this.state.jobDtls.experience}</h6>
            <h6><i className="fa fa-black-tie" aria-hidden="true"></i> {this.state.jobDtls.employment_type}</h6>
            <h6><i className="fa fa-money" aria-hidden="true"></i> {this.state.jobDtls.salary}</h6>
          </div>
          <div className='mb-15'>
            <h6><i className="fa fa-cogs" aria-hidden="true"></i> {this.state.jobDtls.techonologies}</h6>
          </div>
          <div className='mb-15'>
            <h6><i className="fa fa-file-text-o" aria-hidden="true"></i> {this.state.jobDtls.description}</h6>
          </div>
          <div className='mb-15'>
            <ul className='actions'>
              <li><Link to='/'><i className="fa fa-undo" aria-hidden="true"></i> Back to List</Link></li>
              <li><Link to='/'><i className="fa fa-star-o" aria-hidden="true"></i> Save for Later</Link></li>
              <li><button className='btn btn-primary' type='button'><i className="fa fa-check" aria-hidden="true"></i> Apply</button></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
};
export default Jobdetails