// @ Calvin Lee
import React from 'react';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';

class RootApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router className="router">
            </Router>
        );
    }
}

export default connect()(RootApp)
