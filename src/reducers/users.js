import { USER_IS_LOADING, USER_HAS_ERRORED, USER_FETCH_SUCCESS } from '../constants/users';

export const userIsLoading = (state=false,action) => {
  switch(action.type){

    case USER_IS_LOADING:
      return action.isLoading;
      break;

    default:
      return state;
  }
}

export const userHasErrored = (state = false, action) => {
  switch (action.type) {

    case USER_HAS_ERRORED:
      return action.hasErrored;
      break;

    default:
      return state;

  }
}

export const users = (state = { items: []}, action) => {
  switch(action.type){

    case USER_FETCH_SUCCESS:
      return action.users;
      break;

    default:
      return state;
  }
}
