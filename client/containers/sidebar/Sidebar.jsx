import React, {Component} from 'react';
import {css} from 'aphrodite';

import styles from './Sidebar_Styles.js';

import HomePathButton from './HomePathButton.jsx';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.pathAttr = [{path: "mail", label: "SafeMail"},
                      {path: "notary", label: "SafeNotary"},
                      {path: "volt", label: "SafeVolt"},
                      {path: "pass", label: "SafePass",
                        sub: [
                          {path: "ebay", label: "eBay"},
                          {path: "amazon", label: "Amazon"},
                          {path: "wells_fargo", label: "Wells Fargo"},
                          {path: "expedia", label: "Expedia"},
                        ],
                      },
    ];
  }
  createPath = () => {

  }
  // createPathButtons = () => {
  //   return (
  //     this.pathAttr.map((el, i) => {
  //       return (
  //         <HomePathButton key={`HomePathButton-${i}}`/>
  //       );
  //     });
  //   );
  // }

  render() {
    // var homePathButtons = this.createPathButtons();
    return(
      <div className={css(styles.Sidebar)}>
      </div>
    )
  }
}
