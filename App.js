import React from 'react';
import { Font } from 'expo';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './app/reducers';

import AppContainer from './app/containers/AppContainer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Lato': require('./assets/fonts/Lato-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ?
      (
        <Provider store={store}>
          <AppContainer />
        </Provider>
      ) : null;
  }
}
