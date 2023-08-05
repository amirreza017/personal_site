import './home.css'
import myphoto from '../images/img.jpg'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className="content-home">
            <div className="content-home_flex1">
                <img src={myphoto} className="content-home_flex1-img"/>
            </div>
            <div className="content-home_flex2">
                <h3>به سایت شخصی من خوش آمدید</h3>
                <h4>برای این که من رو بیشتر بشناسی، میتونی وارد صفحه About بشی و همچنین جهت ارتباط با من وارد صفحه Contact شوید.</h4>
                <div className="btns-div">
                    <Link to="/about">
                        <button type="button" className="btn">About</button>
                    </Link>
                    <Link to="/contact">
                        <button type="button" className="btn btn-contact">Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home