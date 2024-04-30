import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import newsContext from '../context/news/newsContext';

export default function HomeNews(props) {
    const context = useContext(newsContext);
    const {getSingleNews} = context;
    const handleClick = () => {
        const slug = props.news.slug;
        getSingleNews(slug);
    }
  return (
   <>
        <div className="post-preview">
            <Link to={props.news.slug} onClick={handleClick}>
                <h2 className="post-title">{props.news.name}</h2>
                <h3 className="post-subtitle">{(props.news.description.length > 10)? (props.news.description).slice(0,50)+' ....' : props.news.description}</h3>
            </Link>
            <p className="post-meta">
                Posted by
                <a href="#!">Start Bootstrap</a>
                on September 24, 2023
            </p>
        </div>
        <hr className="my-4" />
   </>
  )
}
