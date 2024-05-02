import React, { useContext, useEffect } from 'react'
import newsContext from '../../context/news/newsContext'
import { Link } from 'react-router-dom';

export default function NewsList() {
    const context = useContext(newsContext);
    const {news, getNews} = context;
    useEffect(() =>
    getNews
    ,[])
  return (
    <>
        <main className="pt-3">
            <div className="container-fluid px-4">
                <div className="d-flex justify-content-space">
                    <h1 className="mt-4 mb-4">News</h1>
                    <div className='m-auto text-right'>
                        <Link to="/add-news" className="btn-small btn btn-info">Add</Link>
                    </div>
                </div>
                <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                        {news.map((element, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{element.name}</td>
                                <td><img src={element.image} alt="" width={50} height={50} /></td>
                                <td>Action</td>
                            </tr>
                        ))}
                </tbody>
                </table>
            </div>
        </main>
    </>
  )
}
