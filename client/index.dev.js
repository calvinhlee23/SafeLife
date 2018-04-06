import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import configureStore from './stores/configure-store-dev';
import { AppContainer } from 'react-hot-loader';
import RootApp from './root_app.jsx';

const store = configureStore()
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <RootApp className="startofapp" />
        </Provider>
    </AppContainer>
  , document.getElementById('SafeLifeRootApp')
);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./root_app').default;
        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <NextApp className="startofapp" />
                </Provider>
            </AppContainer>,
            document.getElementById('SafeLifeRootApp')
        );
    });
    window.store = store;
}



// const history = browserHistory

// //Hack to be able to set toggle buttons based on path
// history.listen(location => {
//   $('body').attr('data-route', location.pathname);
// })

// ReactDOM.render(
//     <Main history={history} />
//     , document.getElementById('app')
// )
