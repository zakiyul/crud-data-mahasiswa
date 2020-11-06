import {
  GET_MAHASISWA,
  POST_MAHASISWA,
  GET_MAHASISWA_DETAIL,
} from "../actions/mahasiswaAction";

let initialState = {
  getMahasiswa: false,
  postMahasiswa: false,
  getMahasiswaDetail: false,
};

const mahasiswa = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAHASISWA:
      return {
        ...state,
        getMahasiswa: action.payload,
      };
    case POST_MAHASISWA:
      return {
        ...state,
        postMahasiswa: action.payload,
      };
    case GET_MAHASISWA_DETAIL:
      return {
        ...state,
        getMahasiswaDetail: action.payload,
      };
    default:
      return state;
  }
};

export default mahasiswa;
