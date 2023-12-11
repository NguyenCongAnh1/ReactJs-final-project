import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import quizReducer from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    quizReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;