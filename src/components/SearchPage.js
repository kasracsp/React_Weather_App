import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import fetchWeatherApi from '../redux/weatherApi/weatherApiAction';

const SearchPage = () => {
  const dispatch=useDispatch()
  const [openSearchModal,setOpenSearchModal]=useState(false)
  const [search,setSearch]=useState('')
  const submitForm=(e)=>{
    e.preventDefault()
    dispatch(fetchWeatherApi(search));
  }

  return (
    <div className="search_container">
      <div className={`search_modal ${openSearchModal ? "show" : ""} `}>
        <form id="search_form" onSubmit={submitForm}>
          <input
            type="text"
            id="search_text"
            placeholder="City name"
            required
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">search</button>
        </form>
        <button
          id="close_modal"
          onClick={() => setOpenSearchModal(false)}
        >
          cancel
        </button>
      </div>
      <button
        className={`search ${openSearchModal ? "hide" : ""} `}
        onClick={() => setOpenSearchModal(true)}
      >
        <span className="material-icons">search</span>
      </button>
    </div>
  );
}

export default SearchPage