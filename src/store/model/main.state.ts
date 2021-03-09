import AuthState from 'store/auth/model/auth.state';
import CommitsState from 'store/commits/model/commits.state';
import LoadingState from 'store/loading/model/loading.state';

export default interface MainState {
    auth: AuthState;
    commits: CommitsState;
    loading: LoadingState;
}
