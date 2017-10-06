import { USER_IS_LOADING,USER_HAS_ERRORED, USER_FETCH_SUCCESS } from '../constants/users';
import axios from 'axios';

export const userIsLoading = (bool) => {
  const action = {
    type: USER_IS_LOADING,
    isLoading: bool
  }
  return action;
}

export const userHasErrored = (bool) => {
  const action = {
    type: USER_HAS_ERRORED,
    hasErrored: bool
  }
  return action;
}

export const usersFetchSuccess = (users) => {
  const action = {
    type: USER_FETCH_SUCCESS,
    users
  }
  return action;
}

export const usersFetchData = (url,query) => {
  //fetch user data

  return (dispatch) => {
    //set loading to true
    dispatch(userIsLoading(true));

    //request users data from api
    axios.get(url, {
      params: {
        q: query
      }
    })
    .then((response) => {
      dispatch(userIsLoading(false)); //set isLoading to false
      let users = response.data;
      dispatch(usersFetchSuccess(users));
    })
    .then((error) => {
      if(error){
        //if error then set hasErrored to true
          dispatch(userHasErrored(true));
      }
    })
  }
}
