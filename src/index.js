import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers/index';
import App from './containers/App/App';
import PlanetPage from './containers/PlanetPage/PlanetPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route path="/planet/:name">
                    <PlanetPage />
                </Route>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
