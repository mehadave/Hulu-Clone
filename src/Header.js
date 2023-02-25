// press rfce to get basic react snippet from ES7 extension  
import React from 'react';
import "./Header.css";
import HomeIcon from '@mui/icons-material/Home';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Header() {
  return (
    // BEM naming convention
    <div className="header">
        {/*  <h1> That's my header...</h1> */}

        <div className="header_icons"> 
            <div className="header_icon header_icon--active">
                <HomeIcon />
                <p>Home</p>
            </div>
            <div className="header_icon">
                <BoltOutlinedIcon />
                <p>Trending</p>
            </div>
            <div className="header_icon">
                <LiveTvOutlinedIcon />
                <p>Verified</p>
            </div>
            <div className="header_icon">
                <VideoLibraryOutlinedIcon />
                <p>Collection</p>
            </div>
            <div className="header_icon">
                <SearchOutlinedIcon />
                <p>Search</p>
            </div>
            <div className="header_icon">
                <PersonOutlineOutlinedIcon />
                <p>My Account</p>
            </div>
        
        </div>

        <img 
            src="https://logos-world.net/wp-content/uploads/2020/11/Hulu-Logo.png" 
            alt="Hulu Logo"
        />
    </div>
  );
}

export default Header;