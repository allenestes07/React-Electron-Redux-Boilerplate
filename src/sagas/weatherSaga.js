import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  GET_WEATHER,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL
} from "../actions/weatherActions";

function* getWeatherData(action) {
  try {
    const response = yield call(
      axios.get,
      'http://api.test.com'
    );
    yield put({
      type: GET_WEATHER_SUCCESS,
      weather: response.data
    });
  } catch (e) {
    yield put({
      type: GET_WEATHER_FAIL,
      weather: []
    });
  }
}

export const weather = [takeEvery(GET_WEATHER, getWeatherData)];
