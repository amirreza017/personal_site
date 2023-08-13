import { Link } from 'react-router-dom';
import Slideshow from '../../Layout/Slideshow/slideshow';
import myphoto from '../../images/img.jpg';
import './home.css';
import Button from 'react-bootstrap/Button';
const Home = () => {
    return (
        <>
            <Slideshow />
            <div className="content-home">
                <div className="content-home_flex1">
                    <img src={myphoto} className="content-home_flex1-img"/>
                </div>
                <div className="content-home_flex2">
                    <h3>به سایت شخصی من خوش آمدید</h3>
                    <h4>برای این که من رو بیشتر بشناسی، میتونی وارد صفحه About بشی و همچنین جهت ارتباط با من وارد صفحه Contact شوید.</h4>
                    <div className="btns-div">
                        <Link to="/about">
                            {/* <button type="button" className="btn">About</button> */}
                        <Button variant="primary">About</Button>
                        </Link>
                        <Link to="/contact">
                            {/* <button type="button" className="btn btn-contact">Contact</button> */}
                            <Button variant="outline-primary">Contact</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home