import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTable} from '@fortawesome/free-solid-svg-icons'

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-4">Data Mahasiswa</h1>
        <p className="lead"> <FontAwesomeIcon icon={faTable} /> Tabel data mahasiswa kelas 3C Ilmu Komputer Universitas Bumigora Mataram</p>
      </div>
    </div>
  )
}

export default Jumbotron
