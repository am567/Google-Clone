import React from 'react'
import "./Home.css";
import { Link } from 'react-router-dom';
/*{import AppsIcon from '@mui/icons-material/Apps';}*/
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from './Search';


function Home() {
  return (
    <div className='home'>

      <div className='home_header'>

        <div className='home_headerleft'>

          <Link to='/about'>About</Link>
          <Link to='/about'>Store</Link>

        </div>

        <div className='home_headerright'>

          <Link to='/about'>Gmail</Link>
          <Link to='/about'>Images</Link>
          <AppsIcon />
          <Avatar />

        </div>



      </div>

      <div className='home_Body'>

        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""

        />
        <div className='home_inputContainer'>
          <Search />
        </div>

      </div>

    </div>
  )
}

export default Home
