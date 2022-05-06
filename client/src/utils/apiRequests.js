import axios from "axios";
import { getLocalStorage } from "../helpers/auth";
import setAuthToken from "./setAuthToken";

export const postRequest = async (url, data) => {
  try {
    const res = await axios.post(url, data);
    // console.log(res)
    return res;
  } catch (error) {
    console.log(`Error in Api Request: ${url}` + error);
    if (error.message === "Network Error") return { error: "Network Error" };
    return { error: error?.response?.data?.error };
  }
};

export const getRequest = async (url, options = undefined) => {
  try {
    const token = getLocalStorage("token");
    setAuthToken(token);
    const res = await axios.get(url, options);
    // console.log(res)
    return res;
  } catch (error) {
    console.log(`Error in Api Request: ${url}` + error);

    return { error: error.response.data.error };
  }
};

export const putRequest = async (url, data) => {
  console.log(data);
  try {
    const token = getLocalStorage("token");
    setAuthToken(token);
    const res = await axios.put(url, data);
    // console.log(res)
    return res;
  } catch (error) {
    console.log(`Error in Api Request: ${url}` + error);

    return { error: error.response.data.error };
  }
};
