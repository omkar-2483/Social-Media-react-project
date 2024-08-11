import React from 'react'
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Navbar.scss';
function Navbar() {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}><span>HiFi</span></Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon/>
        <GridViewIcon />
        <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder='search...'/>
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon/>
        <NotificationsNoneOutlinedIcon/>
        <EmailOutlinedIcon/>
        <div className="user">
            <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="DP" />
            <span>Omkar Kasture</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
