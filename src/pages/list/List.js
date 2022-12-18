import React from 'react'
import Datatable from '../../components/Datatable/Datatable.js'
import Navbar from '../../components/Navbar/Navbar.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import "./List.scss"


const List = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default List