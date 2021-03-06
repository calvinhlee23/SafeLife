import React, {Component} from 'react';
import {css} from 'aphrodite';

import styles from './Header_Styles.js';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(styles.Header)}>
        <div className={css(styles.LogoWrap)}
             onClick={()=>{this.props.history.push("/")}}
        >
          <h1>SafeLife</h1>
        </div>
        <div className={css(styles.SearchWrap)}>
          <input/>
        </div>
        <div className={css(styles.ToolsWrap)}>
          <div>tools</div>
        </div>
      </div>
    )
  }
}
