import { combineReducers } from 'redux';
import dataReducer from '../slices/data.slice';
import uiReducer from '../slices/ui.slice';

const rootReducer = combineReducers({
    data: dataReducer,
    ui: uiReducer
})

export {rootReducer};