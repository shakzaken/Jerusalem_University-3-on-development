import React, { Component } from 'react';
import './course_header.css';
import HeaderSecondary from '../../../components/headers/header_secondary/header_secondary';

export default class CourseHeader extends Component {
  render() {
    const loading = this.props.loading;
    return (
      <div>
        <section className="course-header">
          <div className="course-header-grid">
         
            <div className="course-header-title">
              <h2>{this.props.course.name}</h2>
            </div>
          
            
            <div className="course-header-container">
              <img className="course-header-image" 
                src={loading ? "": this.props.course.image.body} alt="" />
            </div>
            <div className="course-header-overview">
              <strong>Name: </strong>{this.props.course.name} <br />
              <strong>Instructor: </strong>{this.props.course.instructor} <br />
              <strong>Points: </strong>{this.props.course.points}<br />
              <strong>Field: </strong>{this.props.course.field}<br />
              <strong>Description: </strong>{/*this.props.course.description */}
            </div>
          </div>
        </section>
      </div>
    )
  }
}
