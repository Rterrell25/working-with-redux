export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const MINUS_COUNTER = "MINUS_COUNTER";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add_counter = value => {
  return {
    type: ADD_COUNTER,
    value: value
  };
};

export const minus_counter = value => {
  return {
    type: MINUS_COUNTER,
    value: value
  };
};

export const saveResult = res => {
  return {
    type: STORE_RESULT,
    result: res
  };
};

export const store_result = res => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const delete_result = resultElId => {
  return {
    type: DELETE_RESULT,
    resultElId: resultElId
  };
};
