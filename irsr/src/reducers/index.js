import {} from '../actions';
import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

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
  ]
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
      return {
        ...state,
        login_loading: false,
        error: "",
        message: action.payload.message,
        user: action.payload.user
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        login_loading: false,
        error: action.payload,
        message: "",
        user: {}
      }

    default:
      return state
  }
}