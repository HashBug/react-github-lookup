import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersFetchData } from '../actions/users';
import { ROOT_URL } from '../constants/urls';
import '../index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      users: null,
      isLoading: false,
      hasErrored: false
    }
  }

  searchUser(){
    let url = `${ROOT_URL}/search/users`;
    let { query } = this.state;
    //dispatch the fetch action
    this.props.fetchData(url,query);
  }

  render(){
    if(this.props.hasErrored){
      return(<div>Some error occurred fetching users.</div>)
    }

    if(this.props.isLoading){
      return(<div>Loading users....</div>)
    }

    return(
      <div className="app">
        <div className="app-title">React Github Meet</div>
        <div className="form-inline">
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter a name..."
              className="form-control"
              onChange={event => this.setState({query: event.target.value})}
              onKeyPress={event => {
                if(event.key === 'Enter'){
                  this.searchUser();
                }
              }}
            />
            <button
              type="button"
              onClick={() => this.searchUser()}
              className="btn btn-primary"
              >
                Search
              </button>
          </div>
        </div>
        <div className="users-list">
          <ul className="list-group">
            {
              this.props.users.total_count === 0 ?
              (<li> No user found with this name.</li>) :

              (
              this.props.users.items.map((user,index) => {
                return(
                  <li
                    className="list-group-item"
                    key={index}
                    >
                      <img className="img-responsive user-list-img" src={user.avatar_url} />
                      {user.login}
                  </li>
                )
              }))

            }
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.userIsLoading,
    hasErrored: state.userHasErrored,
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (url,query) => dispatch(usersFetchData(url,query))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
