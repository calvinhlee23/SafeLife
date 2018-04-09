// @ Calvin Lee
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {css} from 'aphrodite';

import styles from './RootApp_Styles.js';

import Home from './containers/home/Home.jsx';
import Sidebar from './containers/sidebar/Sidebar.jsx';

class RootApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router className={css(styles.Router)} id="SafeLifeRootAppRouter">
              <div className={css(styles.RouterWrap)}>
                {/*Sidebar Route placed outside of switch to be rendered all the time*/}
                <Route component={Sidebar}/>
                <Switch>
                  <Route path="/" component={Home}/>
                </Switch>
              </div>
            </Router>
        );
    }
}

export default connect()(RootApp)
