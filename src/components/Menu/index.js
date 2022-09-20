import {AiOutlineAppstore, AiOutlineHome} from 'react-icons/ai'
import {FiSettings, FiLogOut} from 'react-icons/fi'
import {MdOutlinePersonAddAlt} from 'react-icons/md'
import './index.css'

const Menu = () => (
  <div className="Menu-container">
    <p className="ele">
      <span>
        <AiOutlineAppstore className="space" />
      </span>
      My Apps
    </p>
    <p className="ele">
      <span className="space">
        <MdOutlinePersonAddAlt />
      </span>
      Resources
    </p>

    <div>
      <p className="ele">
        <span>
          <AiOutlineHome className="space" />
        </span>
        My Organisation
      </p>
      <p className="ele">
        <span>
          <FiSettings className="space" />
        </span>
        Settings
      </p>
      <p className="ele">
        <span>
          <FiLogOut className="space" />
        </span>
        Logout
      </p>
    </div>
  </div>
)

export default Menu
