import MainAction from '../model/main.action';
import {CommitsActionTypesEnum} from './types';
import {SetCommitsAction} from './actions';
import CommitsState from './model/commits.state';
import CommitsStateImp from './model/commits.state.imp';

const initialState: CommitsState = new CommitsStateImp();

const commitsReducer = (state = initialState, action: MainAction) => {
    switch (action.type) {
        case CommitsActionTypesEnum.SET_COMMITS: {
            return Object.assign({}, state, {
                commits: (action as SetCommitsAction).commits
            });
        }
        default:
            return state;
    }
};

export default commitsReducer;
