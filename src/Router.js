import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Player from './Components/Player';
import Error from './Components/Error';

const RouterComp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/:pid/:playerName' render={(props) => <Player playerId={Math.abs(props.match.params.pid)} />} />
                <Route component={Error} />
            </Switch>
        </Router>
    )
}

export default RouterComp;