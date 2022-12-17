import React from 'react'
import Chart from '../../components/Chart/Chart.js';
import Featured from '../../components/Featured/Featured.js';
import Navbar from '../../components/Navbar/Navbar.js';
import Sidebar from '../../components/Sidebar/Sidebar.js';
import Widget from '../../components/Widget/Widget.js';
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  )
}

export default Home;