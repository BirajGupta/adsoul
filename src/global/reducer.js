import {
  RECEIVE_API_DATA,
  REQUEST_API_DATA,
  REQUEST_ONE_APP_SAGA,
  RECEIVE_ONE_APP_SAGA,
} from "./actions";

const initialState = {
  users: [],
  loading: true,
  oneApp: ["loading..."],
};

export const reducer = (state = initialState, { type, data }) => {
  switch (type) {
    case REQUEST_API_DATA:
      return {
        ...state,
        loading: true,
      };
    case RECEIVE_API_DATA:
      return {
        ...state,
        users: data.data,
        loading: false,
      };
    case REQUEST_ONE_APP_SAGA:
      return {
        ...state,
        loading: true,
      };
    case RECEIVE_ONE_APP_SAGA:
      return {
        ...state,
        oneApp: data.data,
        loading: false,
      };
    default:
      return state;
  }
};
