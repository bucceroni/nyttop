// import * as types from "./types";
//API
import api from "./api";
//UTILS
import enumTypes from "../utils/enumTypes";

export function getNews(category) {
  return async dispatch => {
    dispatch({
      type: enumTypes[category],
      payload: await api.getNews(category)
    });
  };
}