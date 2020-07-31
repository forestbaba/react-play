import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
 import RootReducer from './reducers';


 export const middleWares = [ReduxThunk];
 export const createStoreWithMiddleWare = applyMiddleware(...middleWares)(createStore)
 export const store = createStoreWithMiddleWare(RootReducer);