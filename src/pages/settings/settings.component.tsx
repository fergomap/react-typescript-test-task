import HeaderComponent from 'components/header/header.component';
import MenuComponent from 'components/menu/menu.component';
import Repository from 'model/repository';
import RepositoryImp from 'model/repository.imp';
import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepository } from 'services/repository.service';
import { HIDE_LOADING_ACTION, SHOW_LOADING_ACTION } from 'store/loading/actions';
import MainState from 'store/model/main.state';
import './settings.component.scss';

const SettingsComponent: FunctionComponent = (): ReactElement => {
    const { commits } = useSelector((state: MainState) => state.commits);
    const dispatch = useDispatch();
    const [ repository, setRepository ] = useState<Repository>(new RepositoryImp());
    
    useEffect(() => {
        dispatch(SHOW_LOADING_ACTION);

        getRepository()
            .then((newRepository: Repository) => setRepository(newRepository))
            .finally(() => dispatch(HIDE_LOADING_ACTION));
    }, []);

    return <section className="dashboard-component">
        <HeaderComponent title="Settings"/>
        <div className="main-content">
            <MenuComponent/>
            <div className="main-container">
                <h1>Secret settings</h1>
                <p>Commits loaded from dashboard: { commits.length }</p>
                <p>Repository: { repository.name }</p>
                <p>{ repository.description }</p>
                <a target="_blank" rel="noopener noreferrer" href={repository.url}><p>View repository</p></a>
            </div>
        </div>
    </section>;
}

export default SettingsComponent;
