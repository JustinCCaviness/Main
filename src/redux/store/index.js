import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import epics from '../epics'
import { createEpicMiddleware } from 'redux-observable';
import { compose } from 'redux'; // and your other imports from before


const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose;

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(epicMiddleware)
    )
);

  epicMiddleware.run(epics);

console.log(store.getState())

export default store;