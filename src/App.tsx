import * as React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import './App.css';
import Home from './views/Home';
import Topics from './views/Topics';



interface IState {}
interface IProps {}

export default class App extends React.Component<IProps, IState> {

    public render(): JSX.Element {
        return (
            <Router>
                <div style={{width: 1000, margin: '0 auto'}}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>

                    <hr />

                    <Route
                        exact={true}
                        path="/"
                        component={Home}
                    />
                    <Route
                        path="/topics"
                        component={Topics}
                    />
                </div>
            </Router>
        );
    }

}
