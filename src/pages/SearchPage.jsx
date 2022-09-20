import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../components/StateProvider";
import UseGoogleSearch from "../components/UseGoogleSearch";
import Response from "../components/Response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const {data} = UseGoogleSearch(term)

    // Mock Api Call
    // const data = Response

  return (
    <div className="search__page">
      <div className="search__page--header">
        <Link to="/">
          <img
            className="search__page--logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="search__page--header-body">
          <Search hideButtons />
          <div className="search__page--options">
            <div className="search__page--options-left">
              <div className="search__page--option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="search__page--option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="search__page--option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="search__page--option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="search__page--option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="search__page--option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="search__page--options-right">
              <div className="search__page--option">
                <SettingsIcon />
                <Link to="/settings">Settings</Link>
              </div>
              <div className="search__page--option">
                <BuildIcon />
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="search__page--results">
          <p className="search__page--result-count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for
            {term}
          </p>
          {data?.items.map((item) => (
            <div className="search__page--result">
              <a href={item.link} className="search__page--result-itemLink" >
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="search__page--result-image"
                      src={item.pagemap?.cse_image[0]?.src}
                    />
                  )}
                {item.displayLink}
              </a>
              <a href={item.link} className="search__page--result-title">
                <h2>{item.title}</h2>
              </a>
              <p className="search__page--result-snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
