import app from 'firebase/app';
import AuthState from './auth.state';

export default class AuthStateImp implements AuthState {
    user: app.User | null;

    constructor(user: app.User | null = null) {
        this.user = user;
    }
}
