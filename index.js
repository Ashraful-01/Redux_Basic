const redux = require('redux');
// console.log(redux);

//initial state
const initState = {
    num: 0
}

//create reducer
const rootReducer = (state = initState, action) => {
    if (action.type === 'INC_NUM') {
        return {
            ...state,
            num: state.num + 1
        }
    }
    if (action.type === 'ADD_NUM') {
        return {
            ...state,
            num: state.num + action.value
        }
    }
    return state;
}
//store 

const store = redux.createStore(rootReducer);
console.log(store.getState());

//dicpatching Action 

// console.log(store);
//when i define type it must be all upperCase 
store.dispatch({
    type: 'INC_NUM'
})

store.dispatch({
    type: 'ADD_NUM',
    value: 34
})

console.log(store.getState());
