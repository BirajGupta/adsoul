export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const RECEIVE_ONE_APP_SAGA = "RECEIVE_ONE_APP_SAGA";
export const REQUEST_ONE_APP_SAGA = "REQUEST_ONE_APP_SAGA";

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = (data) => ({ type: RECEIVE_API_DATA, data });
export const requestOneAppData = (data) => ({
  type: REQUEST_ONE_APP_SAGA,
  data,
});
export const receiveOneAppData = (data) => ({
  type: RECEIVE_ONE_APP_SAGA,
  data: data,
});
