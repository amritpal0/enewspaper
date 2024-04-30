import React, { useContext, useEffect } from 'react'
import Banner from '../component/Banner'
import newsContext from '../context/news/newsContext'
import HomeNews from '../component/HomeNews';

export default function Home() {
    const context = useContext(newsContext);
    const {news, getNews} = context; 
    useEffect(() => 
       getNews
    ,[])
  return (
    <>
    <Banner title="Welcome to Enewspaper" />
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    {
                        news.map((element) => {
                            return <HomeNews key={element.id} news={element}/>
                        })
                    }                  
                    <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                </div>
            </div>
        </div>
    </>
  )
}
