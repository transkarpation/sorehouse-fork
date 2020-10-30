import {appName} from '../config';
import { call, put, takeEvery } from 'redux-saga/effects'
import apiService from '../services/api.service';

export const moduleName = 'auth';
const prefix = `${appName}/${moduleName}`;

export const SIGN_UP_REQUEST = `${prefix}/SIGN_UP_REQUEST`;
export const SIGN_UP_START = `${prefix}/SIGN_UP_START`;
export const SIGN_UP_SUCCESS = `${prefix}/SIGN_UP_SUCCESS`;
export const SIGN_UP_ERROR = `${prefix}/SIGN_UP_ERROR`;

const initState = {
  user: null,
  token: null,
  authError: null
}


export default function reducer (state = initState, action) {
  const {type} = action;

  switch(type) {
    case SIGN_UP_SUCCESS: {
      const {payload: {user, token}} = action; 
      console.log('===== ', action)
      return {
        ...state,
        user,
        token
      }
    }
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

const signUpSaga = function* ({payload: {email, password}}) {
  yield put({
    type: SIGN_UP_START,
  });

  try {
    const {data} = yield call(apiService.signup, email, password)
    yield put({
      type: SIGN_UP_SUCCESS,
      payload: {
        ...data
      }
    })
    yield call(apiService.setToken, data.token)
  } catch(error) {
    yield put({
      type: SIGN_UP_ERROR,
      error
    })
  }
}

export const saga = function* () {
  yield takeEvery(SIGN_UP_REQUEST, signUpSaga)
};

