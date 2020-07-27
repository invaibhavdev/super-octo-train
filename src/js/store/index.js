import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import home from '../reducers/home'
const store = createStore(home, applyMiddleware(thunk))

// console.log(store);

export default store
