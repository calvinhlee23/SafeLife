import React, {Component} from 'react';
import {css} from 'aphrodite';

import styles from './Sidebar_Styles.js';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={css(styles.Sidebar)}>
        <button onClick={()=>{this.props.history.push("hey")}}>Hey</button>
      </div>
    )
  }
}
