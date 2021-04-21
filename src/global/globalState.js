import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/saga";
import { reducer } from "./reducer";

// const reducer = (state = initialState, { type, data }) => {
//   switch (type) {
//     case REQUEST_API_DATA:
//       return {
//         ...state,
//         loading: true,
//       };
//     case RECEIVE_API_DATA:
//       return {
//         ...state,
//         users: data.data,
//         loading: false,
//       };
//     case REQUEST_ONE_APP_SAGA:
//       return {
//         ...state,
//         loading: true,
//       };
//     case RECEIVE_ONE_APP_SAGA:
//       return {
//         ...state,
//         oneApp: data.data,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,

  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
