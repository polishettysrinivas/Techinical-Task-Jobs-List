import React, { Component } from 'react';
import Data from '../Data/data';
class Jobslist extends Component {
  jobdetails = (item) => {
    this.props.history.push({
      pathname: '/jobdetails',
      state: { detail: item }
    })
  }
  render() {
    const jobsData = Data.jobData;
    return (
      <div className="container-fluid">
        <h1 className='pagetitle'>List of Jobs</h1>
        <div className='row'>
          <div className='col-md-5 pr-0'><input className='textbox form-control' type='text' placeholder='Skills, Designation, Companies' /></div>
          <div className='col-md-2 pr-0 pl-1'><input className='textbox form-control' type='text' placeholder='Location' /></div>
          <div className='col-md-2 pr-0 pl-1'>
            <select className='selectbox form-control'>
              <option>Experience</option>
              <option>0 Years</option>
              <option>1 Years</option>
              <option>2 Years</option>
              <option>3 Years</option>
              <option>4 Years</option>
              <option>5 Years</option>
              <option>6 Years</option>
              <option>7 Years</option>
              <option>8 Years</option>
              <option>9 Years</option>
              <option>10 Years</option>
              <option>10+ Years</option>
            </select>
          </div>
          <div className='col-md-2 pr-0 pl-1'>
            <select className='selectbox form-control'>
              <option>Salary</option>
              <option>1 Lac</option>
              <option>2 Lac</option>
              <option>3 Lac</option>
              <option>4 Lac</option>
              <option>5 Lac</option>
              <option>6 Lac</option>
              <option>7 Lac</option>
              <option>8 Lac</option>
              <option>9 Lac</option>
              <option>10 Lac</option>
              <option>10+ Lac</option>
            </select>
          </div>
          <div className='col-md-1 pr-0 pl-1'><button type='button' className='searchbtn form-control btn btn-primary'>Search <i className="fa fa-search" aria-hidden="true"></i></button></div>
        </div>
        <div className='row p-t-9'>
          <div className='col-md-9'>
            {jobsData.map(item => (
              <div className='job-section' key={item.id} onClick={this.jobdetails.bind(this, item)}>
                <h4 className='mb-15' key={item.title}>{item.title}</h4>
                <h6 className='posted' key={item.posted}><i className="fa fa-calendar" aria-hidden="true"></i> {item.posted}</h6>
                <div className='mb-15'>
                  <h6 key={item.company}><i className="fa fa-building" aria-hidden="true"></i> {item.company}</h6>
                  <h6 key={item.location}><i className="fa fa-map-marker" aria-hidden="true"></i> {item.location}</h6>
                </div>
                <div className='mb-15'>
                  <h6 key={item.experience}><i className="fa fa-briefcase" aria-hidden="true"></i> {item.experience}</h6>
                  <h6 key={item.employment_type}><i className="fa fa-black-tie" aria-hidden="true"></i> {item.employment_type}</h6>
                  <h6 key={item.salary}><i className="fa fa-money" aria-hidden="true"></i> {item.salary}</h6>
                </div>
                <div className='mb-15'>
                  <h6 key={item.techonologies}><i className="fa fa-cogs" aria-hidden="true"></i> {item.techonologies}</h6>
                </div>
                <div className='mb-15'>
                  <h6 className='description' key={item.description}><i className="fa fa-file-text-o" aria-hidden="true"></i> {item.description}</h6>
                </div>
              </div>
            ))}
          </div>
          <div className='col-md-3 filters'>
            <h3 className='sectionhead'>Filters</h3>
            <div className='options'>
              <h5>Posted</h5>
              <select className='selectbox form-control'>
                <option>Last 60 Days</option>
                <option>Last 30 Days</option>
                <option>Last 15 Days</option>
                <option>Last 07 Days</option>
                <option>Last 1 Day</option>
              </select>
            </div>
            <div className='options'>
              <h5>Employment Type</h5>
              <label className="checkbox">Full Time
                  <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox">Part Time
                  <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox">Part Freelancer
                  <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className='options'>
              <h5>Industry</h5>
              <label className="checkbox">IT Software / Hardware
                  <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox">Travel / Hotels / Restaurants / Airlines / Railways
                  <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox">Automobile / Auto Anciliary / Auto Components
                  <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox">BPO / Call Center / Marketing / Administration
                  <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox">Others
                  <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className='options'>
              <h5>Education</h5>
              <label className="checkbox">Post Graduation
                  <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox">Graduation / Diploma
                  <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox">Under Graduates
                  <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox">Others
                  <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
export default Jobslist