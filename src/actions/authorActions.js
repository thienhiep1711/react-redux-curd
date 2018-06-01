import * as types from './actionTypes';
import mockAuthorApi from '../api/mockAuthorApi';
export function loadAuthorSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return function(dispatch) {
    return mockAuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
