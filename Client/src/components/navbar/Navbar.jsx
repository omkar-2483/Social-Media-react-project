import React, { useContext} from 'react'
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
import { DarkModeContext } from '../../context/DarkModeContext';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const {darkMode} = useContext(DarkModeContext);
  const {toggle} = useContext(DarkModeContext);
  const {currUser} = useContext(AuthContext);
  return (
    <div className={`navbar navbar-${darkMode? "dark":""}`}>
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}><span>HiFi</span></Link>
        <HomeOutlinedIcon />
        {darkMode ? <WbSunnyOutlinedIcon onClick={toggle}/>: <DarkModeOutlinedIcon onClick={toggle}/> }
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
            <img src={currUser.profilePic} alt="DP" />
            <span>{currUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
