import {createStore, compose, applyMiddleware} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import donationReducer from './redux/reducers/donationReducer'
// import cartReducer from './redux/reducers/cartReducer';

// const rootReducer = combineReducers({
//     donationReducer,
//     cartReducer
// })


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(donationReducer, composeEnhancer(applyMiddleware(thunk)))

export default store 