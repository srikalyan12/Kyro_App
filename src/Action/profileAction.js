import { axiosInstance } from "./../axios";

export const fetch = (data) => {
  return (dispatch) => {
    dispatch({
      type: "SAVE",
      payload: data,
    });
  };
};

export const save = (payload) => {
  return async (dispatch) => {
    axiosInstance.post("/profile", payload).then((response) => {
      dispatch({
        type: "SAVE",
        payload: response,
      });
    });
  };
};
