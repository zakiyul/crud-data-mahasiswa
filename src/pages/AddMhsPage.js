import React from "react";
import Jumbotron from "../components/jumbotron";
import FormComp from "../components/formComp";
import NavbarComp from "../components/navbar";
import { connect } from "react-redux";
import { postMahasiswa } from "../actions/mahasiswaAction";

let initialState = {
  nama: "",
  nama_panggilan: "",
  alamat: "",
  nim: "",
  pesan: "",
};

function AddMhsPage(props) {
  const [state, setState] = React.useState(initialState);
  const { dispatch } = props;

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postMahasiswa(state));
    setState(initialState);
  };

  return (
    <div>
      <NavbarComp />
      <Jumbotron />
      <h3 className="text-center my-4">Tambah Mahasiswa</h3>
      <div className="container card p-5 rounded mb-5">
        <FormComp
          state={state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default connect()(AddMhsPage);
