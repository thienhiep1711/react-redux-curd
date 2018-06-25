import React, { Component ,PropTypes} from 'react';
import {Link} from 'react-router';



const CourseListRow = ({course, removeCourse}) => {

  return (
    <tr>
      <td><a href={course.watchHref} _target="_blank" className="btn btn-sm btn-primary btn-block">Watch</a></td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
      <td className="table__control">
        <Link to={'/course/' + course.id} className="btn btn-sm btn-warning">Edit</Link>
        <button type="button" className="btn btn-sm btn-danger" onClick={removeCourse}>Remove</button>
      </td>
    </tr>
  );
};
CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;
