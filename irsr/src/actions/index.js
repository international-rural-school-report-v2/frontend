import axios from 'axios';
import { axiosAuth } from '../axiosAuth';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const GETTING_ORGS = 'GETTING_ORGS';
export const GET_ORGS_SUCCESS = 'GET_ORGS_SUCCESS';
export const GET_ORGS_FAILURE = 'GET_ORGS_FAILURE';
export const FILTER_ISSUES = 'FILTER_ISSUES';

export const baseURL = 'https://irsr-backend.herokuapp.com';
export const testURL = 'https://irsr-be-dev.herokuapp.com';
export const local_testURL = 'http://localhost:4242';
// let token = localStorage.getItem('token');

// globals
// const { teacherAttendanceData } = require('../globals/DummyData.js')

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_LOADING });
  return axios
    .post(`${testURL}/auth/login`, credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.user);
      localStorage.setItem('role', JSON.stringify(res.data.org_roles));
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
    .then(res => {
      dispatch({ type: GET_ORGS_SUCCESS, payload: res.data })
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
      dispatch({ type: GET_ISSUES_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_ISSUES_FAILURE, payload: err })
    })
}

export const addIssue = (issue) => dispatch => {
  dispatch({ type: GETTING_ISSUES });
  axiosAuth()
    .post(`${testURL}/issues`, issue)
    .then(res => {
      dispatch({ type: ADD_ISSUE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_ISSUES_FAILURE, payload: err })
    })
}

export const updateIssue = (issue, id) => dispatch => {
  dispatch({ type: GETTING_ISSUES });
  axiosAuth()
    .put(`${testURL}/issues/${id}`, issue)
    .then(res => {
      dispatch({ type: ADD_ISSUE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_ISSUES_FAILURE, payload: err })
    })
}

export const DELETE_ISSUE_SUCCESS = 'DELETE_ISSUE_SUCCESS';

export const deleteIssue = id => dispatch => {
  dispatch({ type: GETTING_ISSUES });
  axiosAuth()
    .delete(`${testURL}/issues/${id}`, id)
    .then(res => {
      dispatch({ type: DELETE_ISSUE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_ISSUES_FAILURE, payload: err })
    })
}

export const filterIssues = status_id => (
  {
    type: FILTER_ISSUES,
    payload: status_id
  }
)

export const GETTING_TEACERS_ATTENDANCE = 'GETTING_TEACERS_ATTENDANCE';
export const GET_TEACERS_ATTENDANCE_SUCCESS = 'GET_TEACERS_ATTENDANCE_SUCCESS';
export const GET_TEACERS_ATTENDANCE_FAILURE = 'GET_TEACERS_ATTENDANCE_FAILURE';

export const getTeachersAttendance = () => dispatch => {
  dispatch({ type: GETTING_TEACERS_ATTENDANCE });
  // Promise.resolve(teacherAttendanceData)
  //   .then(data => {
  //     dispatch({ type: GET_TEACERS_ATTENDANCE_SUCCESS, payload: data });
  //   })
  //   .catch(err => {
  //     dispatch({ type: GET_TEACERS_ATTENDANCE_FAILURE, payload: err });
  //   });
  axiosAuth()
    .get(`${testURL}/teachers-attendance`)
    .then(res => {
      console.log(res);
      dispatch({ type: GET_TEACERS_ATTENDANCE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_TEACERS_ATTENDANCE_FAILURE, payload: err });
    })
}