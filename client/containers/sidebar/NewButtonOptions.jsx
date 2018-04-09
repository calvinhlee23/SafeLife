import React, {Component} from 'react';

import {css} from 'aphrodite';
import styles from './NewButtonOptions_Styles.js';

export default class NewButtonOptions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(styles.NewButtonOptions)}>
        <div className={css(styles.Options)}>
          Mail
        </div>
        <div className={css(styles.Options)}>
          Notary
        </div>
        <div className={css(styles.Options)}>
          Volt
        </div>
        <div className={css(styles.Options)}>
          Pass
        </div>
      </div>
    )
  }
}
