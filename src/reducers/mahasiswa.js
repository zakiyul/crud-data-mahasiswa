import { GET_MAHASISWA, POST_MAHASISWA } from "../actions/mahasiswaAction";

let initialState = {
  getMahasiswa: false,
  postMahasiswa: false,
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
    default:
      return state;
  }
};

export default mahasiswa;
