import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserPlus, faTrash, faInfo} from '@fortawesome/free-solid-svg-icons'
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import {Link} from 'react-router-dom'

const { SearchBar } = Search;

const tableComp = (props) => {
  const columns = [
    {
      sort: true,
      dataField: "id",
      text: "Id",
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      sort: true,
      dataField: "nama",
      text: "Nama",
    },
    {
      sort: true,
      dataField: "nim",
      text: "Nim",
    },
    {
      sort: true,
      dataField: "link",
      text: "Action",
      headerStyle: () => {
        return { width: "20%" };
      },
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={`/mahasiswa/${row.id}`} className="btn btn-success mr-3"><FontAwesomeIcon icon={faInfo} /> Detail</Link>
            <button className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /> Delete</button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="container">
      {props.data ? (
        <ToolkitProvider
          keyField="id"
          data={props.data}
          columns={columns}
          search
        >
          {(props) => (
            <div>
              <Link to="/add" className="btn btn-warning text-white"><FontAwesomeIcon icon={faUserPlus}/> tambah mahasiswa</Link>
              <div className="float-right">
                <SearchBar {...props.searchProps} /> <br />
              </div>
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : null}
    </div>
  );
};

export default tableComp;
