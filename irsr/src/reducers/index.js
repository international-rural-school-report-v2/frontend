import { 
  LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE, 
  GET_ORGS_FAILURE, GETTING_ORGS, GET_ORGS_SUCCESS, 
  GETTING_ISSUES, GET_ISSUES_SUCCESS, GET_ISSUES_FAILURE,
  ADD_ISSUE_SUCCESS
}  from '../actions';

const initialState = {
  issues: []
  // isLoggedIn: null,
  // orgsFetched: false
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
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
        issues: action.payload
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
        issues: action.payload
      }
    default:
      return state
  }
}