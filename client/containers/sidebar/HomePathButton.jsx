import React, {Component} from 'react';
import {css} from 'aphrodite';
import styles from './HomePathButton_Styles.js';

export default class HomePathButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {label, path, sub, history} = this.props;
    return(
      <div className={css(styles.HomePathButton)}
           onClick={() => {history.push(path)}}
      >
        {label}
      </div>
    )
  }
}
