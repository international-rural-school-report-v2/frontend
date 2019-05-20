import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const GETTING_ORGS = 'GETTING_ORGS';
export const GET_ORGS_SUCCESS = 'GET_ORGS_SUCCESS';
export const GET_ORGS_FAILURE = 'GET_ORGS_FAILURE';

export const baseURL='https://irsr-backend.herokuapp.com';
export const testURL='https://irsr-be-dev.herokuapp.com';

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_LOADING });
  return axios
    .post(`${testURL}/auth/login`, credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.user);
      localStorage.setItem('role', JSON.stringify(res.data.org_roles));
      console.log(res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const getOrgs = () => dispatch => {
  dispatch({ type: GETTING_ORGS });
  return axios
    .get(`${testURL}/public/orgs`)
    .then(res =>  {
      console.log(res.data);
      dispatch({ type: GET_ORGS_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({ type: GET_ORGS_FAILURE, payload: err });
    });
}