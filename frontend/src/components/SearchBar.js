import React, { useContext, useState } from 'react'
import { AutoComplete } from './AutoComplete';
import { dataContext } from '../App';

const SearchBar = () => {
    const {isFiltered, handleIsFiltered, query, handleQuery} = useContext(dataContext)
    const [autoComplete, setAutoComplete] = useState(0);
    //0: no autoComplete
    //1: default autoComplete
    //2: suggestion

    const handleClick = () => {
        setAutoComplete(1)
    }

    const handleChange = (e) => {
        if (e.target.value === '') setAutoComplete(1)
        else setAutoComplete(2)
        handleQuery(e.target.value)
    }

    const handleBlur = () => {
        setAutoComplete(0)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleIsFiltered(true)
            console.log(isFiltered)
        }
        else handleIsFiltered(false)
    }

    const handleSubmit = () => {
        handleIsFiltered(true)
    }

    return (
            <div className="search-box">
                <img className="icon-search" src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png" alt="icon-search" />
                <input
                    type="text"
                    placeholder="Bạn tìm gì hôm nay"
                    value={query}
                    onClick={handleClick}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleSubmit}>Tìm kiếm</button>
                <AutoComplete autoComplete={autoComplete} query={query}/>
            </div>
    )
}

export default SearchBar