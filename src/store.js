import { createStore } from 'redux';
import cartReducer from './reducers/cartreducer';

const store = createStore(cartReducer);

export default store;

