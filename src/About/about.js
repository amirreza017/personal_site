import './about.css'

const About = () => {
    return (
        <div className="content-about">
            <div className='content-about_flex-1'>
                <div className='box-info'>
                    <ul className='ul1'>
                        <li><span className='span-li'>تاریخ تولد: </span>13/12/1376</li>
                        <li><span className='span-li'>پروژه های انجام شده: </span></li>
                    </ul>
                    <ol className='ol2'>
                        <li className='li2'>
                            <a className='a-hover' href='https://github.com/amirreza017/Date-conversion.git'>Date Conversion</a>
                            </li>
                        <li className='li2'>
                            <a className='a-hover' href='https://github.com/amirreza017/rock-paper-scissors.git'>Rock Paper Scissors Game</a>
                            </li>
                        <li className='li2'>
                            <a className='a-hover' href='https://github.com/amirreza017/to-do-list.git'>To Do List</a>
                            </li>
                        <li className='li2'>
                            <a className='a-hover' href='https://github.com/amirreza017/Quiz-Application.git'>Quiz Application</a>
                            </li>
                    </ol>
                </div>
            </div>
            <div className='content-about_flex-2'>
                <p>سلام</p>
                <p>من امیررضا فروتن هستم</p>
                <p>25 سالمه</p>
                <p>چند ماهی میشه که در حال یادگیری دوره جامع فرانت اند استاد احسان گازار هستم. </p>
            </div>
        </div>
    )
}

export default About