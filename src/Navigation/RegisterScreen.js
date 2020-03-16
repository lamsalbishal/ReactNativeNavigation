import React from 'react';
import { Navigation } from 'react-native-navigation';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {PersistGate} from 'redux-persist/lib/integration/react';
import FSStorage from 'redux-persist-fs-storage';

import Login from '../Pages/Login';
import SplashScreen from '../Pages/SplashScreen';
import PageOne from '../Pages/PageOne';
import Signup from '../Pages/Signup';
import PageThree from '../Pages/PageThree';
import PageTwo from '../Pages/PageTwo';
import ForgetPassword from '../Pages/ForgetPassword';
import reducers from '../store/reducer';


const middleware = [thunk, logger];

const persistConfig = {
  key: 'root',
  storage: FSStorage(),
  keyPrefix: '',
  timeout: 0,
  stateReconciler: autoMergeLevel2,
};

const preducer = persistReducer(persistConfig, reducers);
const store = createStore(preducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

function ReduxProvider(Component) {
  return props => (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...props} />
      </PersistGate>
    </Provider>
  );
}


export function RegisterScreen() {
    Navigation.registerComponent(
        'Login',
        () => Login,
    );
    Navigation.registerComponent(
        'SplashScreen',
        () => SplashScreen,
    );
    Navigation.registerComponent(
        'PageOne',
        () => ReduxProvider(PageOne),
        () => PageOne,
    );
    Navigation.registerComponent(
        'Signup',
        () => Signup,
    );
    Navigation.registerComponent(
        'PageTwo',
        () => PageTwo,
    );
    Navigation.registerComponent(
        'PageThree',
        () => PageThree,
    );
    Navigation.registerComponent(
        'ForgerPassword',
        () => ForgetPassword,
    );
    
}

