const redux = require('redux');
// console.log(redux);

//initial state
const initState = {
    num: 0
}

//create reducer
const rootReducer = (state = initState, action) => {
    return state;
}
//store 

const store = redux.createStore(rootReducer);
console.log(store.getState());