import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {css} from 'aphrodite';

import styles from './Home_Styles.js';

import Sidebar from '../sidebar/Sidebar.jsx';
import SafeMailDashboard from '../dashboard/mail/Dashboard.jsx';
import SafeNotaryDashboard from '../dashboard/notary/Dashboard.jsx';
import SafeVoltDashboard from '../dashboard/volt/Dashboard.jsx';
import SafePassDashboard from '../dashboard/pass/Dashboard.jsx';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var props = this.props;
    return (
      <div className={css(styles.Home)}>
        <Sidebar {...props}/>
        <Route path=`${props.match}/mail` component={SafeMailDashboard}/>
        <Route path=`${props.match}/notary` component={SafeNotaryDashboard}/>
        <Route path=`${props.match}/volt` component={SafeVoltDashboard}/>
        <Route path=`${props.match}/pass` component={SafePassDashboard}/>
      </div>
    );
  }
}
