import {
  LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_SUCCESS, GET_ORGS_SUCCESS,
  GETTING_ISSUES, GET_ISSUES_SUCCESS, GET_ISSUES_FAILURE,
  ADD_ISSUE_SUCCESS, FILTER_ISSUES, DELETE_ISSUE_SUCCESS,
  GETTING_TEACERS_ATTENDANCE, GET_TEACERS_ATTENDANCE_SUCCESS,
  GET_TEACERS_ATTENDANCE_FAILURE
} from '../actions';

const isLoggedIn = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
}

const initialState = {
  issues: [],
  isLoggedIn: isLoggedIn(),
  // orgsFetched: false,
  teachersAttendanceLoading: false,
  teachersAttendance: [],
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case LOGIN_LOADING:
      return {
        ...state,
        login_loading: true,
        message: "",
        error: ""
      }
    case LOGIN_SUCCESS:
      const org = action.payload.org_roles[0].org_name;
      const role = action.payload.org_roles[0].roles[0].role_name;
      const org_id = action.payload.org_roles[0].org_id;
      return {
        ...state,
        login_loading: false,
        isLoggedIn: true,
        error: "",
        message: action.payload.message,
        user: action.payload.username,
        org,
        role,
        org_id
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        login_loading: false,
        error: action.payload,
        message: "",
        user: {}
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      }
    case GET_ORGS_SUCCESS:
      return {
        ...state,
        orgsFetched: true,
        orgs: action.payload
        // .map( item => {
        //   return item.name
        // })
      }
    case GETTING_ISSUES:
      return {
        ...state
      }
    case GET_ISSUES_SUCCESS:
      return {
        ...state,
        issues: action.payload,
        displayedIssues: action.payload
      }
    case GET_ISSUES_FAILURE:
      return {
        ...state,
        error: action.payload,
        message: ""
      }
    case ADD_ISSUE_SUCCESS:
      return {
        ...state,
        issues: action.payload,
        displayedIssues: action.payload
      }
    case GETTING_TEACERS_ATTENDANCE:
      return {
        ...state,
        teachersAttendanceLoading: true
      }
    case GET_TEACERS_ATTENDANCE_SUCCESS:
      return {
        ...state,
        teachersAttendance: action.payload,
        teachersAttendanceLoading: false
      }
    case GET_TEACERS_ATTENDANCE_FAILURE:
      return {
        ...state,
        error: action.payload,
        teachersAttendanceLoading: false
      }
    case FILTER_ISSUES:
      return {
        ...state,
        displayedIssues: state.issues.filter(issue => {
          if (action.payload === 0) {
            return true;
          } else if (issue.status_id === action.payload) {
            return true;
          } else {
            return false;
          }
        })
      }
    case DELETE_ISSUE_SUCCESS:
      return {
        ...state,
        issues: action.payload,
        displayedIssues: action.payload
      }
    default:
      return state
  }
}