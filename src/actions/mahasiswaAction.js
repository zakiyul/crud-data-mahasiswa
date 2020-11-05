import axios from "axios";

export const GET_MAHASISWA = "GET_MAHASISWA";
export const POST_MAHASISWA = "POST_MAHASISWA";

export const getMahasiswa = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8000/api/mahasiswa/`)
      .then((res) => {
        dispatch({
          type: GET_MAHASISWA,
          payload: {
            data: res.data,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: GET_MAHASISWA,
          payload: {
            data: false,
          },
        });
      });
  };
};

export const postMahasiswa = (data) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:8000/api/mahasiswa/`, data)
      .then((res) =>
        dispatch({
          type: POST_MAHASISWA,
          payload: {
            data: res.data,
          },
        })
      )
      .catch(() => {
        dispatch({
          type: POST_MAHASISWA,
          data: false,
        });
      });
  };
};
