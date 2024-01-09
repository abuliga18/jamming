import React, {useState} from "react";
import './SearchBar.css'

function SearchBar ({onSearch}) {

    const [term, setTerm] = useState('')

    const passTerm = () => {
      onSearch(term)
    }

    const handleTermChange = (e) => {
      setTerm(e.target.value)
    }

    return (
        <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange}
        />
        <button className="SearchButton" onClick={passTerm} >
          SEARCH
        </button>
      </div>
        );
}

export default SearchBar;