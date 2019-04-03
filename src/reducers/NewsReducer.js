import * as types from "../actions/types";

const initialState = {
  news: []
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_HOME}`:
      return {
        ...state,
        news: payload
      };
    case `${types.GET_HEALTH}`:
      return {
        ...state,
        news: payload
      };
    case `${types.GET_POLITICS}`:
      return {
        ...state,
        news: payload
      };
    case `${types.GET_SCIENCE}`:
      return {
        ...state,
        news: payload
      };
    case `${types.GET_TECHNOLOGY}`:
      return {
        ...state,
        news: payload
      };
    case `${types.GET_WORLD}`:
      return {
        ...state,
        news: payload
      };
    default:
      return state;
  }
}
