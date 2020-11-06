import React from "react";
import NavbarComp from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import TabelMhsComp from "../components/tableMhsComp";
import { connect, useSelector } from "react-redux";
import { getMahasiswaDetail } from "../actions/mahasiswaAction";

function DetailMhsPage(props) {
  const { params } = props.match;
  const { dispatch } = props;

  React.useEffect(() => {
    dispatch(getMahasiswaDetail(params.id));
  }, []);

  const dataMhs = useSelector((state) => state.mahasiswa.getMahasiswaDetail);
  console.log(dataMhs);

  return (
    <div>
      <NavbarComp />
      <Jumbotron />
      <TabelMhsComp
        nama={dataMhs.nama}
        nama_panggilan={dataMhs.nama_panggilan}
        alamat={dataMhs.alamat}
        nim={dataMhs.nim}
        pesan={dataMhs.pesan}
      />
    </div>
  );
}

export default connect()(DetailMhsPage);
