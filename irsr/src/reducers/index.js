import {} from '../actions';

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
  switch (action.type) {
    default:
      return state;
  }
}