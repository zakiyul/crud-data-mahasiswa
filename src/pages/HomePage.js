import React from "react";
import Jumbotron from "../components/jumbotron";
import NavbarComp from "../components/navbar";
import TableComp from "../components/tableComp";
import { connect, useSelector } from "react-redux";
import { getMahasiswa } from "../actions/mahasiswaAction";

function HomePage(props) {
  React.useEffect(() => {
    props.dispatch(getMahasiswa());
  }, []);

  const dataMhs = useSelector((state) => state.mahasiswa.getMahasiswa.data);
  console.log(dataMhs);
  return (
    <div>
      <NavbarComp />
      <Jumbotron />
      <TableComp data={dataMhs} />
    </div>
  );
}

export default connect()(HomePage);
