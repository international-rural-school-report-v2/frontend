import { 
  LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE, GETTING_ORGS, GET_ORGS_FAILURE, GET_ORGS_SUCCESS }  from '../actions';

const initialState = {
  issues: [
    { 
      title: 'sample issue',
      description: 'sample description1',
      id: 1
    },
    { 
      title: 'sample issue',
      description: 'sample description2',
      id: 2
    },
    { 
      title: 'sample issue',
      description: 'sample description3',
      id: 3
    },
    { 
      title: 'sample issue',
      description: 'sample description4',
      id: 4
    },
    { 
      title: 'sample issue',
      description: 'sample description5',
      id: 5
    }
  ],
  isLoggedIn: null,
  orgsFetched: false
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
      const org = Object.keys(action.payload.org_roles)[0];
      const role = action.payload.org_roles[org][0];
      return {
        ...state,
        login_loading: false,
        isLoggedIn: true,
        error: "",
        message: action.payload.message,
        user: action.payload.user,
        org,
        role
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
        orgs: action.payload.map( item => {
          return item.name
        })
      }
    default:
      return state
  }
}