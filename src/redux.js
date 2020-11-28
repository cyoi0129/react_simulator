import { createStore, combineReducers } from 'redux';  
  export const userUpdate = user => ({
    type: 'USER_UPDATE',
    user: user,
  })

  const INITIAL_STATE = {
    selection: {
      type: [
        {
          value: 1,
          name:'Dog'
        },
        {
          value: 2,
          name:'Cat'
        }
      ],
      variation: [
        {
          value: 1,
          name:'Small'
        },
        {
          value: 2,
          name:'Middle'
        },
        {
          value: 3,
          name:'Large'
        }
      ],
      age: [0,1,2,3,4,5,6,7,8,9,10]
    },
    result: {
      lite:'',
      basic:'',
      prefect:''
    }
  }
  const reducer = (state = INITIAL_STATE, action) => {  
    switch (action.type) {
      case 'USER_UPDATE':
        let price = 0
        if (action.user.type === 1) {
          price = action.user.variation * 1 + action.user.age * 2
        } else {
          price = action.user.age * 2
        }
        return {
          ...state,
          result: {
            ...state.result,
            lite: price,
            basic: price * 2,
            prefect: price * 3,
          }
        }
      default:
        return state;
    }
  }
  
  export const reducers = combineReducers({  
    data: reducer
  })

  export const store = createStore(reducers)
  export default reducer;