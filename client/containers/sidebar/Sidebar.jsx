import React, {Component} from 'react';
import {css} from 'aphrodite';

import styles from './Sidebar_Styles.js';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.path_attr = [{name: "mail", label: "SafeMail"},
                      {name: "mail", label: "SafeNotary"},
                      {name: "mail", label: "SafeVolt"},
                      {name: "mail", label: "SafePass"},
    ]
  }

  render() {
    return(
      <div className={css(styles.Sidebar)}>
        <button onClick={()=>{this.props.history.push("mail")}}>mail</button>
        <button onClick={()=>{this.props.history.push("notary")}}>notary</button>
        <button onClick={()=>{this.props.history.push("volt")}}>volt</button>
        <button onClick={()=>{this.props.history.push("pass")}}>pass</button>
      </div>
    )
  }
}
