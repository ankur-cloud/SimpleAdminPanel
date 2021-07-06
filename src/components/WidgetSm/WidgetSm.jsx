import React from 'react'
import './WidgetSm.css';
import VisibilityIcon from '@material-ui/icons/Visibility';

const WidgetSm = () => {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Joined Memberes</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src='https://source.unsplash.com/800x450/?grizzly' alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Ankur Srivastava</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src='https://source.unsplash.com/800x450/?polarbear' alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Ankur Srivastava</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src='https://source.unsplash.com/800x450/?panda' alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Ankur Srivastava</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src='https://source.unsplash.com/800x450/?bigdog' alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Ankur Srivastava</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src='https://source.unsplash.com/800x450/?crocodile' alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Ankur Srivastava</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className='widgetSmIcon' />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
