import app from 'firebase/app';

export default interface AuthState {
    user: app.User | null;
}
