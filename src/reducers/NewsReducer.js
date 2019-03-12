import * as types from "../actions/types";

const initialState = {
  home: [],
  health: [],
  politics: [],
  science: [],
  technology: [],
  world: []
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_HOME}`:
      return {
        ...state,
        home: payload
      };
    case `${types.GET_HEALTH}`:
      return {
        ...state,
        health: payload
      };
    case `${types.GET_POLITICS}`:
      return {
        ...state,
        politics: payload
      };
    case `${types.GET_SCIENCE}`:
      return {
        ...state,
        science: payload
      };
    case `${types.GET_TECHNOLOGY}`:
      return {
        ...state,
        technology: payload
      };
    case `${types.GET_WORLD}`:
      return {
        ...state,
        world: payload
      };
    default:
      return state;
  }
}
