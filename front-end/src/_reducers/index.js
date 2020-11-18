import {combineReducers} from 'redux';
import {itemsReducer} from './items.reduces'

const rootReducer = combineReducers({
    items: itemsReducer
});

export default rootReducer;
