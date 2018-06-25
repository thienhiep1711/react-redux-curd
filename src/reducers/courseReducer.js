import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSES_SUCCESS:
      return [
        ...state, Object.assign({}, action.course)
      ];
    case types.DELETE_COURSES_SUCCESS:
      return [
        ...state.items.slice(0, action.payload),
        ...state.items.slice(action.payload + 1),
        console.log("Dem")
      ];

    case types.UPDATE_COURSES_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
