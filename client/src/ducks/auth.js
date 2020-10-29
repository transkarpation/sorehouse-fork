import {appName} from '../config';
import { put, takeEvery } from 'redux-saga/effects'

export const moduleName = 'auth';
const prefix = `${appName}/${moduleName}`;

export const SIGN_UP_REQUEST = `${prefix}/SIGN_UP_REQUEST`;
export const SIGN_UP_START = `${prefix}/SIGN_UP_START`;
export const SIGN_UP_SUCCESS = `${prefix}/SIGN_UP_SUCCESS`;
export const SIGN_UP_ERROR = `${prefix}/SIGN_UP_ERROR`;

const initState = {
  user: null,
  
}


export default function reducer (state = initState, action) {
  const {type} = action;

  switch(type) {
    default: {
      return state;
    }
  }
}

export const signUpRequest = (email, password) => ({
  type: SIGN_UP_REQUEST,
  payload: {
    email,
    password
  }
});

const signUpSaga = function* () {
  yield put({
    type: SIGN_UP_START,
  });
}

export const saga = function* () {
  yield takeEvery(SIGN_UP_REQUEST, signUpSaga)
};

