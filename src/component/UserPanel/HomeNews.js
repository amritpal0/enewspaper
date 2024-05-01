import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import newsContext from '../../context/news/newsContext';

export default function HomeNews(props) {
    const context = useContext(newsContext);
    const {getSingleNews} = context;
    const handleClick = () => {
        const slug = props.news.slug;
        getSingleNews(slug);
    }

    const dateFormat = (date) => {
        const originalDate = new Date(date);
        const formattedDate = originalDate.toISOString().slice(0, 10);
        return formattedDate;
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
                <a href="#!"> EReporter</a>
                on {dateFormat(props.news.created_at)}
            </p>
        </div>
        <hr className="my-4" />
   </>
  )
}
