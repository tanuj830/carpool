import React from 'react'
import { Link } from 'react-router-dom'
const Error404 = () => {
  return (
    <div className='d-flex justify-content-center'>

        <div>
           <h6 className='pt-5 text-center text-danger'> Error 404, Page not found: <Link to="/">Home page</Link></h6>
            <img className='' src="https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif" alt="" />
        </div>

    </div>
  )
}

export default Error404