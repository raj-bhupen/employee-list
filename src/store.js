import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './appReducers';
import rootSaga from './sagas';

export default function configureStore(initialState) { 
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [thunk, sagaMiddleware];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
    sagaMiddleware.run(rootSaga);
    return store;
}

