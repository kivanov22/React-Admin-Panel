import React from 'react'
import Navbar from '../../components/Navbar/Navbar.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import "./List.scss"


const List = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        datatable
      </div>
    </div>
  )
}

export default List