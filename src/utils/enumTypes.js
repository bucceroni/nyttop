import * as types from "../actions/types";

const type = {
  "/": types.GET_HOME,
  "/health": types.GET_HEALTH,
  "/politics": types.GET_POLITICS,
  "/science": types.GET_SCIENCE,
  "/technology": types.GET_TECHNOLOGY,
  "/world": types.GET_WORLD
};

export default type;
