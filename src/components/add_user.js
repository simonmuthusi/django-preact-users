import React, {Component} from 'react';

import _ from 'lodash';

import { Link } from 'react-router';
import { reduxForm } from 'redux-form';

import { createUser } from '../actions/index';

const FIELDS = {
  username: {
    type: 'input',
    label: 'Username',
    validationError: 'Enter a username'
  },
  first_name: {
    type: 'input',
    label: 'First Name',
    validationError: 'Enter First Name'
  },
  last_name: {
    type: 'input',
    label: 'Last Name',
    validationError: 'Enter Last Name'
  },
  email: {
    type: 'email',
    label: 'Email Address',
    validationError: 'Enter Email Address'
  },
  password: {
    type: 'password',
    label: 'Password',
    validationError: 'Password Mismatch'
  },
  confirm_password: {
    type: 'password',
    label: 'Re-enter password',
    validationError: 'Password Mismatch'
  }
};

class AddUser extends Component{
  onSubmit(props) {
    this.props.createUser(props);
      // .then(() => {
      //   // blog post has been created, navigate the user to the index
      //   // We navigate by calling this.context.router.push the new path
      //   // to navigate to.
      //   this.context.router.push('/');
      // });
  }
	renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];

    return (
      <div
        className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}
        key={fieldConfig.label}>
          <label>{fieldConfig.label}</label>
          <input type="{fieldConfig.type}" className="form-control" {...fieldHelper} />
          <div className="form-control-feedback">
            {fieldHelper.touched ? fieldHelper.error : ''}
          </div>
      </div>
    );
  }

	render(){
		const { handleSubmit } = this.props;
    return (
		<form onSubmit={handleSubmit(this.onSubmit.bind(this))} method="post">
        <h3>Create a New User</h3>
        {_.map(FIELDS, this.renderField.bind(this))}
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
      )
	}
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, (element, field) => {
    if(!values[field]) {
      errors[field] = element.validationError;
    }
  });

  /*if (!values.title) {
    errors.title = 'Enter a username';
  }
  if (!values.categories) {
    errors.categories = 'Enter categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content';
  }*/

  return errors;
}

export default reduxForm({
  form: 'UsersNewForm',
  fields: _.keys(FIELDS),
  validate
}, null, { createUser })(AddUser);