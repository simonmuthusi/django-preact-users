import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/index';


class App extends Component {
	componentWillMount() {
    this.props.fetchUsers();
  }
	renderUsers(){
    return this.props.users.map((user) => {
      return (
        <li className="list-group-item" key={user.id}>
            <span className="float-right">{user.first_name} {user.last_name} - {user.username}</span></li>
      );
    });
	}
  render() {
    return (
      <div>{this.renderUsers()}</div>
    );
  }
}


function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers })(App);