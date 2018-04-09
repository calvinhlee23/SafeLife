import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import configureStore from './stores/configure-store-dev';
import { AppContainer } from 'react-hot-loader';
import RootApp from './RootApp.jsx';

const store = configureStore()
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <RootApp/>
        </Provider>
    </AppContainer>
  , document.getElementById('SafeLifeRootApp')
);

if (module.hot) {
    module.hot.accept('./RootApp', () => {
        const NextApp = require('./RootApp').default;
        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <NextApp/>
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
