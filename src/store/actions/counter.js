import * as actionTypes from "./actionTypes";

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const add_counter = value => {
  return {
    type: actionTypes.ADD_COUNTER,
    value: value
  };
};

export const minus_counter = value => {
  return {
    type: actionTypes.MINUS_COUNTER,
    value: value
  };
};
