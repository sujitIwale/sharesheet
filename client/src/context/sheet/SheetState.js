import { createContext, useReducer } from "react";
import {
  createSheet_Url,
  getSheet_Url,
  getUsersSheets_Url,
  updateSheet_Url,
} from "../../utils/apiEndPoints";
import { getRequest, postRequest, putRequest } from "../../utils/apiRequests";
import { SET_LOADING, SET_SHEET_DATA, SET_SORT_BY, SET_SHEETS } from "../types";
import SheetReducer from "./SheetReducer";

const SheetContext = createContext();
SheetContext.displayName = "SheetContext";

const SheetState = (props) => {
  const initialState = {
    sheets: [],
    sheetData: [],
    sortBy: {
      ASC: true,
      item: "Sr.No.",
    },
    loading: false,
  };

  const [state, dispatch] = useReducer(SheetReducer, initialState);
  const setSheetData = (data) => {
    dispatch({ type: SET_SHEET_DATA, payload: data });
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const fetchSheets = async () => {
    const res = await getRequest(getUsersSheets_Url);
    dispatch({ type: SET_SHEETS, payload: res.data });
  };

  const createNewSheet = async () => {
    const res = await postRequest(createSheet_Url);
    console.log(res.data);
    return res.data;
  };

  const fetchSheetData = async (sheetId, cb) => {
    // logic for fetching
    // setLoading();

    const res = await getRequest(getSheet_Url + `${sheetId}`);
    setSheetData(res.data);
    cb();
    // console.log(res.data)
    // setLoading();
  };
  const updateSheetData = async () => {
    const res = await putRequest(updateSheet_Url, {
      sheetId: state.sheetData._id,
      data: JSON.stringify(state.sheetData.data),
    });
    if (res && res.data) setSheetData(res.data);
  };
  const setSortBy = (value) => {
    dispatch({ type: SET_SORT_BY, payload: value });
  };
  const sortData = (Data, sortBy) => {
    const compare = (a, b) => {
      let p, q;

      p = Number(a[sortBy]);
      q = Number(b[sortBy]);
      if (!isNaN(p)) {
        if (state.sortBy.ASC) return p - q;
        else return q - p;
      }
      let stringReturn = state.sortBy.ASC ? 1 : -1;
      p = String.prototype.toLowerCase.call(a[sortBy]);
      q = String.prototype.toLowerCase.call(b[sortBy]);
      if (p < q) return stringReturn;
      if (p > q) return -stringReturn;
      return 0;
    };

    if (sortBy !== null) {
      Data.sort(compare);
    }
    setSheetData(Data);
  };
  return (
    <SheetContext.Provider
      value={{
        sheets: state.sheets,
        sheetData: state.sheetData,
        loading: state.loading,
        sortBy: state.sortBy,
        fetchSheets,
        createNewSheet,
        fetchSheetData,
        updateSheetData,
        setSheetData,
        setSortBy,
        sortData,
        setLoading,
      }}
    >
      {props.children}
    </SheetContext.Provider>
  );
};

export { SheetContext, SheetState };
