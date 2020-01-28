import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Player from './Components/Player';
import Error from './Components/Error';
import Header from './Components/Header/Header';
import styles from './app.module.scss';

const RouterComp = () => {
    return (
        <div className={styles.app}>
            <Header />
            <Router>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/:pid/:playerName' render={(props) => <Player playerId={Math.abs(props.match.params.pid)} />} />
                    <Route component={Error} />
                </Switch>
            </Router>
        </div>
    )
}

export default RouterComp;