import {MdOutlineNotificationsNone} from 'react-icons/md'
import {BsPerson} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="logo">
      <h1 className="heading">CAIT</h1>
      <p className="para">EDUSYS Pvt.Ltd</p>
    </div>
    <p className="para">
      My Apps<span>></span>
      <span className="para1">Tasks</span>
    </p>
    <div className="logo">
      <MdOutlineNotificationsNone className="circle" />
      <BsPerson className="circle" />
    </div>
  </div>
)

export default Header
