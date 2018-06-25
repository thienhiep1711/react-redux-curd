import React, { Component ,PropTypes } from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>STT</th>
          <th>Title</th>
          <th>Athour</th>
          <th>Category</th>
          <th>Length</th>
          <th>Control</th>
        </tr>
      </thead>
      <tbody>
       {courses.map(course =>
        <CourseListRow key={course.id} course={course}/>
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses:PropTypes.array.isRequired
};

export default CourseList;
