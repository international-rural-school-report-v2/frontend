import axios from 'axios';
import { axiosAuth } from '../axiosAuth';

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

export const register = credentials => dispatch => {
  dispatch({ type: LOGIN_LOADING });
  return axios
    .post(`${testURL}/auth/register`, credentials)
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

export const GETTING_ISSUES = 'GETTING_ISSUES';
export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
export const GET_ISSUES_FAILURE = 'GET_ISSUES_FAILURE';
export const ADD_ISSUE_SUCCESS = 'ADD_ISSUE_SUCCESS';

export const getIssues = () => dispatch => {
  dispatch({ type: GETTING_ISSUES });
  axiosAuth()
    .get(`${testURL}/issues`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: GET_ISSUES_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_ISSUES_FAILURE, payload: err })
    })
}

export const addIssue = (issue, org_id) => dispatch => {
  dispatch({ type: GETTING_ISSUES });
  axiosAuth()
    .post(`${testURL}/issues/org/${org_id}`, issue)
    .then(res => {
      console.log(res.data);
      dispatch({ type: ADD_ISSUE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_ISSUES_FAILURE, payload: err })
    })
}

export const updateIssue = (id, issue) => dispatch => {
  dispatch({ type: GETTING_ISSUES });
  return axiosAuth
    .put(`${testURL}stuff`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: GET_ISSUES_SUCCESS })
    })
    .catch(err => {
      dispatch({ type: GET_ISSUES_FAILURE, payload: err })
    })
}

export const deleteIssue = id => dispatch => {
  dispatch({ type: GETTING_ISSUES });
  return axiosAuth
    .delete(`${testURL}stuff`, id)
    .then(res => {
      console.log(res.data);
      dispatch({ type: GET_ISSUES_SUCCESS })
    })
    .catch(err => {
      dispatch({ type: GET_ISSUES_FAILURE, payload: err })
    })
}