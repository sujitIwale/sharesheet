import {
  SET_LOADING,
  SET_SHEETS,
  SET_SHEET_DATA,
  SET_SORT_BY,
  UPDATE_SHEET_NAME,
  UPDATE_SHEET_USERS,
} from "../types";

const SheetReducer = (state, action) => {
  switch (action.type) {
    case SET_SHEETS:
      return {
        ...state,
        sheets: action.payload,
      };
    case SET_SHEET_DATA:
      return {
        ...state,
        sheetData: action.payload,
      };
    case UPDATE_SHEET_NAME:
      return {
        ...state,
        sheetData: { ...state.sheetData, name: action.payload },
      };
    case UPDATE_SHEET_USERS:
      return {
        ...state,
        sheetData: { ...state.sheetData, users: action.payload },
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: {
          ASC: !state.sortBy.ASC,
          item: action.payload,
        },
      };
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};

export default SheetReducer;
