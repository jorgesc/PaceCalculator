import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import appReducer, {IAppState} from "./reducers";

export interface IState {
  app: IAppState;
}

const reducers = combineReducers({app: appReducer});

export default createStore(reducers, applyMiddleware(thunk, logger));
