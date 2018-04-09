import React, {Component} from 'react';

import {css} from 'aphrodite';
import styles from './NewButton_Styles.js';

import NewButtonOptions from './NewButtonOptions.jsx';

export default class NewButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <div className={css(styles.NewButton)}
           onClick={()=>this.setState({open: !this.state.open})}
      >
        <span className={css(styles.NewLabel)}>New</span>
        <span className={css(styles.ArrowDown)}/>
        {this.state.open
          && <NewButtonOptions/>
        }
      </div>
    );
  }
}
