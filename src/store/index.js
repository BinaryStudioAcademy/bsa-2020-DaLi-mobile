import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {createWhitelistFilter} from 'redux-persist-transform-filter';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas';

const saga = createSagaMiddleware();
//redux dev tool
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(saga));

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['currentUser'],
  transforms: [createWhitelistFilter('currentUser', ['token'])],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, enhancer);

const persistor = persistStore(store);

saga.run(rootSaga);

export {persistor, store};
