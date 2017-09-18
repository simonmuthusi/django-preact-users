import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const CREATE_USER = 'CREATE_USER';
export const FETCH_USER = 'FETCH_USER';
export const DELETE_USER = 'DELETE_USER';

const ROOT_URL = 'http://127.0.0.1:9090/api';
const API_KEY = '?key=zfEFB3fGyIdwBeNfj56';
const AUTHORIZATION = {Authorization:"Token 123c28b47eedb9ec91fd71fa7a44457911a785be"};

export function fetchUsers() {
  const request = axios.get(`${ROOT_URL}/users/`, AUTHORIZATION);//[{"data":{"username":"simon","firstname":"simon","lastname":"muthusi"}}];
  return {
    type: FETCH_USERS,
    payload: request
  };
};

export function createUser(props) {
  const request = axios.post(`${ROOT_URL}/users/`, props, {headers:AUTHORIZATION});//axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
  return {
    type: CREATE_USER,
    payload: request
  };
}