import React, { useState, useTransition } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import fetchWeatherApi from '../redux/weatherApi/weatherApiAction';
import {getSuggestions} from '../helper/functions'
import Spinner from '../assets/svg/Spinner.svg'

const SearchPage = () => {
  const [isPending,startTransition]=useTransition()
  const dispatch=useDispatch()
  const [openSearchModal,setOpenSearchModal]=useState(false)
  const citiesState = useSelector((state) => state.citiesState);
  const [search,setSearch]=useState('')
  const [suggestionList, setSuggestionList] = useState([]);

  const submitForm=(e)=>{
    e.preventDefault()
    dispatch(fetchWeatherApi(search));
  }

  const changeHandler=(e)=>{
    setSearch(e.target.value);
    startTransition(()=>{
      setSuggestionList(getSuggestions(citiesState.cities, e.target.value));
    })
  }
  const closeModal=()=>{
    setOpenSearchModal(false)
    setSearch('')
    setSuggestionList([])
  }
  const suggestionHandler = (item) => {
    setSearch(item)
    setSuggestionList([]);
  };

  return (
    <div className="search_container">
      <div className={`search_modal ${openSearchModal ? "show" : ""} `}>
        <form id="search_form" onSubmit={submitForm}>
          <div className="input_box">
            <input
              type="text"
              id="search_text"
              placeholder="search by city"
              required
              autoComplete="off"
              value={search}
              onChange={changeHandler}
            />
            {
              isPending &&
              <img src={Spinner} alt="loading" className='loading' />
            }
          </div>
          <button type="submit">
            <span className="search-btn">search</span>
            <span className="material-icons">search</span>
          </button>
          {suggestionList.length > 0 && (
            <ul className="suggestions">
              {suggestionList.map((item, index) => (
                <li
                  key={index}
                  onClick={() => suggestionHandler(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </form>
        <button id="close_modal" onClick={closeModal}>
          <span className="cancel">cancel</span>
          <span className="material-icons">cancel</span>
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