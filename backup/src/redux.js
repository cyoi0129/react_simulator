import { createStore, combineReducers } from 'redux';

  export const deleteName = () => ({  
    type: 'DELETE_NAME',
    name: ''
  });
  export const setName = name => ({  
    type: 'SET_NAME',
    name: name,
  });
  
  export const userUpdate = user => ({
    type: 'USER_UPDATE',
    user: user,
  })

  const INITIAL_STATE = {
    article: 'test article',
    master: {
      gender: ['male','female'],
      plan:['Lite Plan', 'Normal Plan', 'Prefect Plan']
    },
    user: {
      name:'Test Name',
      age: 20,
      gender: 'male',
      mail:'test@abcd.com',
      phone:'0312345678',
      address:'1-1-1 Chiyoda, Chiyoda-ku, Tokyo, Japan',
      plan:'Lite Plan',
    }
  }
  const reducer = (state = INITIAL_STATE, action) => {  
    switch (action.type) {
      case 'USER_UPDATE':
        return {...state, user: action.user}
      case 'SET_NAME':
        return {
          ...state,
          user: {
            ...state.user,
            name: action.name
          }
        }
      case 'DELETE_NAME':
        return {...state, name: ''}
      default:
        return state;
    }
  }
  
  export const reducers = combineReducers({  
    data: reducer
  })

  export const store = createStore(reducers)

  export default reducer;