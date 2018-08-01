import * as actionTypes from "../actions/actionTypes";
import produce from "immer";

const initialState = {
  contactData: {
    id: 0,
    isDeleted: false,
    name: "string",
    email: "string",
    phone: "string"
  }
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.SET_FORM_DATA:
        draft.contactData[action.key] = action.value;
        break;

      default:
        break;
    }
  });

export default reducer;
