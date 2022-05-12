import React from 'react'
import s from './Search.module.css'
import search from './../../Assets/Search.svg';
const Search = ({setSearchValue}) => {
  return (
    <div className={s.search}>
      <input className={s.search__input} placeholder={"Поиск"} onChange={(e)=>setSearchValue(e.target.value)} />
      <img src={search} className={s.search__image} />
    </div>
  )
}

export default Search