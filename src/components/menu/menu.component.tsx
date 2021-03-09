import React, { FunctionComponent, ReactElement } from 'react';
import MainState from 'store/model/main.state';
import './menu.component.scss';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { APP_CONSTANTS } from 'config/app.config';

const MenuComponent: FunctionComponent = (): ReactElement => {
    const { pathname } = useLocation();

    return <div className="menu-component">
        <Link to={APP_CONSTANTS.ROUTES.DASHBOARD} className={pathname === APP_CONSTANTS.ROUTES.DASHBOARD ? 'active-link' : ''}>
            <i className="fas fa-tachometer-alt"/>
            Dashboard
        </Link>
        <Link to={APP_CONSTANTS.ROUTES.SETTINGS} className={pathname === APP_CONSTANTS.ROUTES.SETTINGS ? 'active-link' : ''}>
            <i className="fas fa-cog"/>
            Settings
        </Link>
    </div>;
}

export default MenuComponent;
