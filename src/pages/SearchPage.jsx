import React from 'react';
import './SearchPage.css'
import {useStateValue} from '../components/StateProvider';
import UseGoogleSearch from '../components/UseGoogleSearch';


function SearchPage () {
    const [{ term }, dispatch] = useStateValue();
    const {data} = UseGoogleSearch(term)
    
    console.log(data)
    return (
        <div className='search__page'>
            <div className="search__page--header">
                
            </div>
            <div className="search__page--results">

            </div>
        </div>
    );
}

export default SearchPage;


