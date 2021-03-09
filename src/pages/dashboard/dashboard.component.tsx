import HeaderComponent from 'components/header/header.component';
import MenuComponent from 'components/menu/menu.component';
import Commit from 'model/commit';
import React, { FunctionComponent, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCommits } from 'services/commits.service';
import { SET_COMMITS_ACTION } from 'store/commits/actions';
import { HIDE_LOADING_ACTION, SHOW_LOADING_ACTION } from 'store/loading/actions';
import MainState from 'store/model/main.state';
import './dashboard.component.scss';

const DashboardComponent: FunctionComponent = (): ReactElement => {
    const dispatch = useDispatch();
    const { commits } = useSelector((state: MainState) => state.commits);
    
    useEffect(() => {
        dispatch(SHOW_LOADING_ACTION);

        getCommits()
            .then((newCommits: Commit[]) => {
                const setCommitsAction = {...SET_COMMITS_ACTION};
                setCommitsAction.commits = newCommits;
                dispatch(setCommitsAction);
            })
            .finally(() => dispatch(HIDE_LOADING_ACTION));
    }, []);

    return <section className="dashboard-component">
        <HeaderComponent title="Dashboard"/>
        <div className="main-content">
            <MenuComponent/>
            <div className="main-container">
                <h1>Secret dashboard</h1>
                <div className="row">
                    { commits.map((commit: Commit) => <div key={commit.sha} className="col-3">
                        <div className="commit">
                            <img alt="user" src={commit.author.avatarUrl} />
                            <div className="commit-info">
                                <a target="_blank" rel="noopener noreferrer" href={commit.url} title={commit.sha} className="commit-link">
                                    <i className="fas fa-code"/>
                                    View commit
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href={commit.author.url}>
                                    <i className="fas fa-user"/>
                                    { commit.author.login }
                                </a>
                            </div>
                        </div>
                    </div>) }
                </div>
            </div>
        </div>
    </section>;
}

export default DashboardComponent;
