import React from 'react'

function tableMhsComp({id, nama, nama_panggilan, alamat, nim, pesan}) {

  return (
    <div className="container">
      <table className="table table-striped">
        <tbody>
          <tr>
            <th scope="row" style={{width:180}}>Nama</th>
            <td style={{width:20}}>:</td>
            <td>{nama}</td>
          </tr>
          <tr>
            <th scope="row">Nama Panggilan</th>
            <td>:</td>
            <td>{nama_panggilan}</td>
          </tr>
          <tr>
            <th scope="row">Alamat</th>
            <td>:</td>
            <td>{alamat}</td>
          </tr>
          <tr>
            <th scope="row">Nim</th>
            <td>:</td>
            <td>{nim}</td>
          </tr>
          <tr>
            <th scope="row">Pesan</th>
            <td>:</td>
            <td>"{pesan}"</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default tableMhsComp
