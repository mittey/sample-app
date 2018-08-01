import * as actionTypes from "./actionTypes";
import axios from "../../axios-contact";

export const createContact = contact => dispatch => {
  dispatch(createContactStart());

  axios
    .post("", contact)
    .then(request => {
      dispatch(createContactSuccess(request.data));
    })
    .catch(error => {
      dispatch(createContactFail(error));
    });
};

export const setFormData = (value, key) => {
  return {
    type: actionTypes.SET_FORM_DATA,
    value: value,
    key: key
  };
};

const createContactStart = () => {
  return {
    type: actionTypes.CREATE_CONTACT_START
  };
};

const createContactSuccess = contact => {
  return {
    type: actionTypes.CREATE_CONTACT_SUCCESS,
    contact: contact
  };
};

const createContactFail = error => {
  return {
    type: actionTypes.CREATE_CONTACT_FAIL,
    error: error
  };
};
