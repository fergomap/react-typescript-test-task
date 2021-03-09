import Commit from 'model/commit';
import CommitsState from './commits.state';

export default class CommitsStateImp implements CommitsState {
    commits: Commit[];

    constructor(commits: Commit[] = []) {
        this.commits = commits;
    }
}
