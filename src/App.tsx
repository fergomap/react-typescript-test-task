import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import { SpinnerComponent } from 'react-element-spinner';
import { APP_CONSTANTS } from 'config/app.config';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LogInComponent from 'pages/log-in/log-in.component';
import {useDispatch, useSelector} from 'react-redux';
import MainState from 'store/model/main.state';
import { USER_CHANGED_ACTION } from 'store/auth/actions';
import DashboardComponent from 'pages/dashboard/dashboard.component';
import SettingsComponent from 'pages/settings/settings.component';

const App: FunctionComponent = (): ReactElement => {
    const dispatch = useDispatch();
	const { loading } = useSelector((state: MainState) => state.loading);
	const { user } = useSelector((state: MainState) => state.auth);
    const [ authDataLoaded, setAuthDataLoaded ] = useState<boolean>(false);

    useEffect(() => {
        app.auth().onAuthStateChanged((userInfo: app.User | null) => {
            const userChangedAction = {...USER_CHANGED_ACTION};
            userChangedAction.user = userInfo;
            dispatch(userChangedAction);
            setAuthDataLoaded(true);
        });
    }, []);

    if (!authDataLoaded) {
        return <SpinnerComponent loading={true} position="global" color="gold"/>;
    }

    return <div>
        <SpinnerComponent loading={loading} position="global" color="gold"/>
        <BrowserRouter>
            <Switch>
                <Route path={APP_CONSTANTS.ROUTES.DASHBOARD} render={() => user ? <DashboardComponent/> : <Redirect to={APP_CONSTANTS.ROUTES.LOG_IN}/>}/>
                <Route path={APP_CONSTANTS.ROUTES.SETTINGS} render={() => user ? <SettingsComponent/> : <Redirect to={APP_CONSTANTS.ROUTES.LOG_IN}/>}/>
                <Route path={APP_CONSTANTS.ROUTES.LOG_IN} render={() => !user ? <LogInComponent/> : <Redirect to={APP_CONSTANTS.ROUTES.DASHBOARD}/>}/>
                <Redirect to={APP_CONSTANTS.ROUTES.DASHBOARD}/>
            </Switch>
        </BrowserRouter>
    </div>;
}

export default App;
