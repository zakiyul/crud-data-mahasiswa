import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'

function FormComp({state, handleChange, handleSubmit}) {
  return (
    <div>
     <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nama">Nama</label>
        <input onChange={event => handleChange(event)} value={state.nama} type="text" name="nama" id="nama" className="form-control"/>
      </div>
      <div className="form-group">
        <label htmlFor="nama_panggilan">Nama Panggilan</label>
        <input onChange={event => handleChange(event)} value={state.nama_panggilan} type="text" name="nama_panggilan" id="nama_panggilan" className="form-control"/>
      </div>
      <div className="form-group">
        <label htmlFor="alamat">Alamat</label>
        <input onChange={event => handleChange(event)} value={state.alamat} type="text" name="alamat" id="alamat" className="form-control"/>
      </div>
      <div className="form-group">
        <label htmlFor="nim">Nim</label>
        <input onChange={event => handleChange(event)} value={state.nim} type="text" name="nim" id="nim" className="form-control"/>
      </div>
      <div className="form-group">
        <label htmlFor="pesan">Pesan</label>
        <textarea onChange={event => handleChange(event)} value={state.pesan} name="pesan" id="pesan" cols="30" rows="10" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faPlusCircle}/> Tambah</button>
     </form> 
    </div>
  )
}

export default FormComp
