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

export const getContacts = () => dispatch => {
  dispatch(getContactStart());

  axios
    .get("")
    .then(request => {
      dispatch(getContactSuccess(request.data));
    })
    .catch(error => {
      dispatch(getContactFail(error));
    });
};

const getContactSuccess = contacts => {
  return {
    type: actionTypes.GET_CONTACTS_SUCCESS,
    contacts: contacts
  };
};

const getContactFail = error => {
  return {
    type: actionTypes.GET_CONTACTS_FAIL,
    error: error
  };
};

const getContactStart = () => {
  return {
    type: actionTypes.GET_CONTACTS_START
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
