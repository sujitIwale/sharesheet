import {
  REMOVE_SEARCHED_SHEETS,
  SET_LOADING,
  SET_SEARCHED_SHEETS,
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
    case SET_SEARCHED_SHEETS:
      let filteredSheets = []
      try {
        filteredSheets = state.sheets.filter(sheet => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return sheet.ownerName.match(regex) || sheet.name.match(regex)
        })
      } catch (error) {
        console.log(error, 'Please enter valid name')
      }
      return {
        ...state,
        searching: true,
        searchedSheets: filteredSheets

      };
    case REMOVE_SEARCHED_SHEETS:
      return {
        ...state,
        searching: false,
        searchedSheets: null

      };
    case SET_SHEET_DATA:
      if (!Array.isArray(action.payload.data)) {
        try {
          action.payload.data = JSON.parse(action.payload.data);
        } catch (error) {
          console.log(error);
        }
      }
      action.payload.data.columns = action.payload.data[0]
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
