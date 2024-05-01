import React from 'react'

export default function Banner(props) {
  return (
    
    <header className="masthead main_header">
        <div className="container position-relative px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    <div className="site-heading">
                        <h2>{props.title}</h2>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
