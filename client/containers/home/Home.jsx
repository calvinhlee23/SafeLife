import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {css} from 'aphrodite';

import styles from './Home_Styles.js';

import Sidebar from '../sidebar/Sidebar.jsx';
import SafeMailDashboard from '../dashboard/mail/SafeMailDashboard.jsx';
import SafeNotaryDashboard from '../dashboard/notary/SafeNotaryDashboard.jsx';
import SafeVoltDashboard from '../dashboard/volt/SafeVoltDashboard.jsx';
import SafePassDashboard from '../dashboard/pass/SafePassDashboard.jsx';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var props = this.props;
    var currentPath = props.match.path;
    return (
      <div className={css(styles.Home)}>
        <Sidebar {...props}/>
        <Route path={currentPath + "mail"} component={SafeMailDashboard}/>
        <Route path={currentPath + "notary"} component={SafeNotaryDashboard}/>
        <Route path={currentPath + "volt"} component={SafeVoltDashboard}/>
        <Route path={currentPath + "pass"} component={SafePassDashboard}/>
      </div>
    );
  }
}
