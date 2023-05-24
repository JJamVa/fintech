import React, { useState } from 'react'
import HeaderTitle from '../components/News/HeaderTitle'
import SearchInput from '../components/News/SearchInput'
import NewsList from '../components/News/NewsList'

const NewsPage = () => {
    const [searchInput, setsearchInput] = useState("검색어")

    const handleChange = (event) => {
        const { value } = event.target
        setsearchInput(value)
    }

    const handleClick = () => {
        window.alert(searchInput)
    };


    return (
        <div>
            <HeaderTitle title={"뉴스검색"}></HeaderTitle>
            <SearchInput
                handleChange={handleChange}
                handleClick={handleClick}
            ></SearchInput>
            <NewsList></NewsList>
        </div>
    )
}

export default NewsPage