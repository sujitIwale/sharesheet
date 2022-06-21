import React, { useRef, useState } from 'react'

const SheetListHeader = ({ sheets, searchSheets }) => {
    const [SearchQuery, setSearchQuery] = useState('')
    const timer = useRef()

    const changeHandler = (e) => {
        const value = e.target.value.trim()
        setSearchQuery(value)
        clearTimeout(timer.current)
        if (value === '') {
            searchSheets(null, false)
        }

        timer.current = setTimeout(() => {
            searchSheets(value)
        }, 1500)
    }
    return (
        <div className='sheet-list-header'>
            <h2>Sheets (<span>{sheets.length}</span>)</h2>
            <div className='search-bar'>
                <input type='text' placeholder='Enter Sheet Name' value={SearchQuery} onChange={changeHandler} />
                <h3 className='search-icon'><i className="fa-solid fa-magnifying-glass"></i></h3>
            </div>
        </div>
    )
}

export default SheetListHeader