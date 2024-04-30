import React, { useState } from 'react';
import NewsContext from './newsContext';

const NewsState = (props) => {
    const [news, setNews] = useState([]);
    const [singleNews, setSingleNews] = useState({});
    const getNews = async() => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/student/blogs`);
        const allNews = await response.json();
        if(allNews.success === true){
            setNews(allNews.data.data);
        }
    }

    const getSingleNews = async(slug) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/student/blogs/${slug}`);
        const singleNews = await response.json();
        if(singleNews.success === true){
            setSingleNews(singleNews.data);
        }
    }
    return(
        <NewsContext.Provider value={{news, getNews, singleNews, getSingleNews}}>
            {props.children}
        </NewsContext.Provider>

    )
}

export default NewsState;