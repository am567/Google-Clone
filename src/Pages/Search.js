import React, { useState } from 'react'
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Search({ hideButtons = false }) {

    const [input, setInput] = useState("");    // this one is used to store the value whatever we will search in the search bar to make it the reusable component
    const navigate = useNavigate();

    const search = e => {     // this function is connected to google search buttom 
        e.preventDefault();

        navigate('/Search');
    };

    return (
        <form className='search'>
            <div className='search_input'>
                <SearchIcon className='search_inputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            {!hideButtons ? (
                <div className='search_buttons'>

                    <Button type='submit' onClick={search} variant='outlined'> Google Search </Button>
                    <Button variant='outlined'> I'm Feeling Lucky </Button>

                </div>

            ) : (

                <div className='search_buttons'>

                    <Button className='search_buttonsHidden' type='submit' onClick={search} variant='outlined'> Google Search </Button>
                    <Button variant='outlined'> I'm Feeling Lucky </Button>

                </div>
            )}
        </form>
    )
}

export default Search 
