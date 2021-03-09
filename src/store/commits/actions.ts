import Commit from 'model/commit';
import MainAction from '../model/main.action';
import {CommitsActionTypesEnum} from './types';

export interface SetCommitsAction extends MainAction {
    commits: Commit[];
}

export const SET_COMMITS_ACTION: SetCommitsAction = {
    type: CommitsActionTypesEnum.SET_COMMITS,
    commits: []
};
