import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAvCjdymdouUCEjevYZ6nwo2kgerPLhw1U',
      authDomain: 'manager-a6942.firebaseapp.com',
      databaseURL: 'https://manager-a6942.firebaseio.com',
      projectId: 'manager-a6942',
      storageBucket: 'manager-a6942.appspot.com',
      messagingSenderId: '617503106914'
    };

firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
