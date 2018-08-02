import * as actionTypes from "../actions/actionTypes";
import produce from "immer";

const initialState = {
  contactData: {
    isDeleted: false,
    name: "",
    email: "",
    phone: "",
    gender: ""
  },
  contacts: [],
  error: null,
  isCreated: false
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.SET_FORM_DATA:
        draft.contactData[action.key] = action.value;
        break;

      case actionTypes.CREATE_CONTACT_START:
        draft.isCreated = false;
        draft.error = null;
        break;

      case actionTypes.GET_CONTACTS_START:
        draft.isCreated = false;
        draft.error = null;
        break;

      case actionTypes.CREATE_CONTACT_SUCCESS:
        draft.isCreated = true;
        draft.error = null;
        break;

      case actionTypes.GET_CONTACTS_SUCCESS:
        draft.contacts = action.contacts;
        draft.error = null;
        break;

      case actionTypes.GET_CONTACTS_FAIL:
      case actionTypes.CREATE_CONTACT_FAIL:
        draft.error = action.error;
        break;

      default:
        break;
    }
  });

export default reducer;
