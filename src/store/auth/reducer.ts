import MainAction from '../model/main.action';
import {AuthActionTypesEnum} from './types';
import {UserChangedAction} from './actions';
import AuthState from './model/auth.state';
import AuthStateImp from './model/auth.state.imp';

const initialState: AuthState = new AuthStateImp();

const authReducer = (state = initialState, action: MainAction) => {
    switch (action.type) {
        case AuthActionTypesEnum.USER_CHANGED: {
            return Object.assign({}, state, {
                user: (action as UserChangedAction).user
            });
        }
        default:
            return state;
    }
};

export default authReducer;
