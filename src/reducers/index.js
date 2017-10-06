import { combineReducers } from 'redux';
import { userIsLoading, userHasErrored, users } from './users';

export default combineReducers(
{
  userIsLoading,
  userHasErrored,
  users
});
