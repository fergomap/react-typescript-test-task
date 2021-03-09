import React, { FunctionComponent, ReactElement } from 'react';
import MainState from 'store/model/main.state';
import './header.component.scss';
import { useSelector } from 'react-redux';
import { firebaseLogOut } from 'services/auth.service';

interface HeaderComponentProps {
    title: string;
}

const HeaderComponent: FunctionComponent<HeaderComponentProps> = ({ title }): ReactElement => {
	const { user } = useSelector((state: MainState) => state.auth);

    const logOut = (): void => {
        firebaseLogOut()
    };

    return <div className="header-component">
        <h4 className="no-margin">{ title }</h4>
        <div className="user-info">
            <div className="user-name">
                <p className="no-margin">{ user?.displayName }</p>
                <p className="no-margin">{ user?.email }</p>
            </div>
            <i className="fas fa-power-off" onClick={logOut}/>
        </div>
    </div>;
}

export default HeaderComponent;
