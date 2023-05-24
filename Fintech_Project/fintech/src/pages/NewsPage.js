import React, { useState } from 'react'
import HeaderTitle from '../components/News/HeaderTitle'
import SearchInput from '../components/News/SearchInput'
import NewsList from '../components/News/NewsList'
import axios from 'axios'

const NewsPage = () => {
    const [searchInput, setsearchInput] = useState("검색어")
    const [newsList,setNewsList] = useState([])

    const handleChange = (event) => {
        const { value } = event.target
        setsearchInput(value)
    }

    const handleClick = () => {
        window.alert(searchInput)
        const apiKey = `375aa120fc304d3b861ac385c6256e5b`
        axios
            .get(`https://newsapi.org/v2/everything?q=${searchInput}&from=2023-04-24&sortBy=publishedAt&apiKey=${apiKey}`)
            .then((data) => {
                console.log(data.data)
                setNewsList(data.data.articles)
                console.log(`'${searchInput}' 검색 완료`)
            })
        //searchInput을 가지고 axios 요청을 작성하기
        //예상결과 : console에서 CORS가 발생!
    };


    return (
        <div>
            <HeaderTitle title={"뉴스검색"}></HeaderTitle>
            <SearchInput
                handleChange={handleChange}
                handleClick={handleClick}
            ></SearchInput>
            <NewsList newsList={newsList}></NewsList>
        </div>
    )
}

export default NewsPage