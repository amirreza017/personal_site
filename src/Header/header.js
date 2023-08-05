import {Link} from "react-router-dom"
import '../Header/header.css'

const Header = () => {
    return (
        <div className="navbar">
            <ul className="ul-header">
                <li className="li-header"><Link to="/">Home</Link></li>
                <li className="li-header"><Link to="/about">About</Link></li>
                <li className="li-header"><Link to="/contact">Contact</Link></li>
            </ul>
            <div>
                <h1 className="name">amirreza forootan</h1>
                <h2 className="position">front end developer</h2>
            </div>
        </div>
    )
}

export default Header