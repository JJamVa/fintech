import React from 'react';
import styled from 'styled-components';

const NewsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const NewsItemWrapper = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const NewsTitle = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const NewsImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const NewsDescription = styled.p`
  margin-bottom: 10px;
`;

const NewsAuthor = styled.p`
  margin-bottom: 10px;
  font-style: italic;
`;

const NewsLink = styled.a`
  color: blue;
  text-decoration: none;
`;

const NewsList = ({ newsList }) => {
  return (
    <NewsListWrapper>
      {newsList.map((news, index) => (
        <NewsItemWrapper key={index}>
          <NewsTitle>제목: {news.title}</NewsTitle>
          <NewsImage src={news.urlToImage} alt="News" />
          <NewsDescription>내용: {news.description}</NewsDescription>
          <NewsAuthor>기자: {news.author}</NewsAuthor>
          <NewsLink href={news.url}>기사로 이동하기</NewsLink>
        </NewsItemWrapper>
      ))}
    </NewsListWrapper>
  );
};

export default NewsList;