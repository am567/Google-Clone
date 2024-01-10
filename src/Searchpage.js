import React from 'react';
import './Searchpage.css';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from './response';
import { Link } from 'react-router-dom';
import Search from './Pages/Search';
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";


function Searchpage() {
    // here it will give the search name after you hit the enter button same as you search
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term); // LIVE API CALL

    // mock api call
    //const data = Response;

    console.log(data)
    return (
        <div className='searchPage'>
            <div className='searchPage_header'>
                <Link to="/">
                    <img
                        className='searchPage_logo'
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt=""
                    />
                </Link>
                <div className='searchPage_headerBody'>
                    <Search hideButtons />
                    <div className='searchPage_options'>
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <SearchIcon />
                                <Link to="/all">All</Link>

                            </div>
                            <div className="searchPage_option">
                                <DescriptionIcon />
                                <Link to="/all">News</Link>

                            </div>
                            <div className="searchPage_option">
                                <ImageIcon />
                                <Link to="/all">Images</Link>

                            </div>
                            <div className="searchPage_option">
                                <LocalOfferIcon />
                                <Link to="/all">shopping</Link>

                            </div>
                            <div className="searchPage_option">
                                <RoomIcon />
                                <Link to="/all">maps</Link>

                            </div>
                            <div className="searchPage_option">
                                <MoreVertIcon />
                                <Link to="/all">more</Link>

                            </div>


                        </div>
                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div>



                        </div>


                    </div>
                </div>

            </div>

            {term && (
                <div className="searchPage_results">
                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>
                    {data?.items.map(item => (
                        <div className="searchPage_result">
                            <a
                                className="searchPage_resultLink" href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (

                                    <img
                                        className="searchPage_resultImage"
                                        src={item.pagemap?.cse_image[0]?.src}
                                        alt="" />
                                )}

                            </a>
                            <a className='searchPage_resultTitle' href={item.link}>
                                <h2>{item.title}</h2>

                            </a>
                            <a></a>

                            <p className="searchPage_resultSnippet">{item.snippet}</p>

                        </div>
                    ))}

                </div>
            )}

        </div>
    )
}

export default Searchpage;

