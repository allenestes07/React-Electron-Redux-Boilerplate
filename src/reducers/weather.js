import {
  GET_WEATHER,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL
} from "../actions/weatherActions.jsx";

const INITIAL_STATE = {
};

const getWeatherSuccess = (state, action) => {
  return {
      ...state.weather,
      ...action.weather
  };
};

const getWeatherFail = (state, action) => {
  return {
      ...state.weather
  };
};

const handlers = {
  [GET_WEATHER_SUCCESS]: getWeatherSuccess,
  [GET_WEATHER_FAIL]: getWeatherFail
}

export default function weather(state = INITIAL_STATE, action = {}) {
  const handler = handlers[action.type];

  if (!handler) return state;
  return handler(state, action);
}

export const getWeatherInfo = (state) => {
  return state.weather ? state.weather : {};
}
