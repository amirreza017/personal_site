import Heartlogo from '../../images/love.png'
import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <p className="create">
            ساخته شده با
            <img className="svg" src={Heartlogo} />
            توسط <a className="github" href="https://github.com/amirreza017/" title="گیت هاب">امیررضا</a>
        </p>
    )
}

export default Footer