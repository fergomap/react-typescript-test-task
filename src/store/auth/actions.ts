import MainAction from '../model/main.action';
import {AuthActionTypesEnum} from './types';
import app from 'firebase/app';

export interface UserChangedAction extends MainAction {
    user: app.User | null;
}

export const USER_CHANGED_ACTION: UserChangedAction = {
    type: AuthActionTypesEnum.USER_CHANGED,
    user: null
};
