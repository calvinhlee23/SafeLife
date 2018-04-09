import React, {Component} from 'react';

export default class homePathButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {label, path, sub} = this.props;
    return(
      <div onClick={() => {history.push(path)}}>
        {label}
      </div>
    )
  }
}
