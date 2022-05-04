// export const BASE_API_URL = 'https://file-visualizer.herokuapp.com';
export const BASE_API_URL = 'http://localhost:3001';


export const signIn_Url = `${BASE_API_URL}/auth/signin/`;
export const signUp_Url = `${BASE_API_URL}/auth/signup/`;
export const getUser_Url = `${BASE_API_URL}/auth/`;
export const uploadUserSheet_Url = `${BASE_API_URL}/upload/csv/user/`;
export const getSheet_Url = `${BASE_API_URL}/sheet/getSheet/`;
export const createSheet_Url = `${BASE_API_URL}/sheet/createSheet/`;
export const getUsersSheets_Url = `${BASE_API_URL}/sheet/userSheets/`;
export const uploadFile_Url = `${BASE_API_URL}/upload/csv?headers=true`;
