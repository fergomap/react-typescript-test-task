import {combineReducers} from 'redux';
import authReducer from './auth/reducer';
import commitsReducer from './commits/reducer';
import loadingReducer from './loading/reducer';

export const mainReducer = combineReducers({
    auth: authReducer,
    commits: commitsReducer,
    loading: loadingReducer
});
