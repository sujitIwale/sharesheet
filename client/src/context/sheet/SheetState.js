import { createContext, useReducer } from "react";
import { parse } from "../../helpers/csvParser";
import {
  addUserToSheet_Url,
  createSheet_Url,
  getSheet_Url,
  getUsersSheets_Url,
  searchUsers_Url,
  updateSheet_Url,
} from "../../utils/apiEndPoints";
import { getRequest, postRequest, putRequest } from "../../utils/apiRequests";
import {
  SET_LOADING,
  SET_SHEET_DATA,
  SET_SORT_BY,
  SET_SHEETS,
  UPDATE_SHEET_NAME,
  UPDATE_SHEET_USERS,
} from "../types";
import SheetReducer from "./SheetReducer";

const SheetContext = createContext();
SheetContext.displayName = "SheetContext";

const SheetState = (props) => {
  const initialState = {
    sheets: [],
    sheetData: null,
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

    try {
      const res = await getRequest(getSheet_Url + `${sheetId}`);
      if (res.data) {
        res.data.data = parse(res.data.data);
        setSheetData(res.data);
      }
      cb();
    } catch (error) {
      console.log(error);
    }
    // console.log(res.data)
    // setLoading();
  };
  const updateSheetData = async () => {
    try {
      let dataString = "";

      state.sheetData.data.forEach((row) => {
        if (Array.isArray(row)) {
          row.forEach((v, i) => {
            if (!v) v = "";
            if (i === 0) {
              dataString = dataString + v;
            } else dataString = dataString + "," + v;
          });
        }
        dataString = dataString + "\n";
      });
      console.log(dataString);
      // const blob = new Blob([JSON.stringify(dataString)], {
      //   type: "text/plain;charset=utf-8",
      // });
      console.log(state.sheetData._id);

      const res = await putRequest(updateSheet_Url, {
        sheetId: state.sheetData._id,
        data: JSON.stringify(dataString),
      });
      if (res && res.data) {
        console.log(res.data);
        res.data.data = parse(res.data.data);
        setSheetData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateSheetName = async (name) => {
    try {
      if (state.sheetData.name === name) return;
      const res = await putRequest(updateSheet_Url, {
        sheetId: state.sheetData._id,
        name,
      });
      if (res && res.data) {
        console.log(res.data);
        dispatch({ type: UPDATE_SHEET_NAME, payload: res.data.name });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchUsers = async (query) => {
    try {
      const res = await getRequest(`${searchUsers_Url}?email=${query}`);
      if (res.data) {
        return res.data;
      }
      return [];
    } catch (error) {
      console.log(error);
    }
  };

  const addUserToSheet = async (data) => {
    try {
      const res = await putRequest(addUserToSheet_Url, {
        sheetId: state.sheetData._id,
        data,
      });
      console.log(res);
      if (res.error) return { usersAdded: false };
      dispatch({ type: UPDATE_SHEET_USERS, payload: res.data.sheet.users });
      if (res.data) return res.data;
    } catch (error) {
      console.log(error);
    }
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
        updateSheetName,
        searchUsers,
        addUserToSheet,
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
