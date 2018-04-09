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
    return (
      <div className={css(styles.Home)}>
        <Sidebar {...props}/>
        <Route path={`${props.match.path + "mail"}`} component={SafeMailDashboard}/>
        <Route path={`${props.match.path + "notary"}`} component={SafeNotaryDashboard}/>
        <Route path={`${props.match.path + "volt"}`} component={SafeVoltDashboard}/>
        <Route path={`${props.match.path + "pass"}`} component={SafePassDashboard}/>
      </div>
    );
  }
}
