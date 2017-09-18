import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/index';

import { Link } from 'react-router';


class App extends Component {
	componentWillMount() {
    this.props.fetchUsers();
  }
	renderUsers(){
    return this.props.users.map((user) => {
      const is_staff = user.is_staff ? 'Yes':'No';
      return (
        <tr key={user.id}>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{is_staff}</td>
        </tr>
      );
    });
	}
  render() {
    return (
      <div><div className="text-xs-right">
          <Link to="/users/add" className="btn btn-primary">
            Add a User
          </Link>
        </div><table className="table table-striped table-responsive">
      <thead>
        <tr>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Username</td>
        <td>Email</td>
        <td>Is Staff</td>
        </tr>
      </thead>
      <tbody>
      {this.renderUsers()}
      </tbody>
      </table></div>
    );
  }
}


function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers })(App);