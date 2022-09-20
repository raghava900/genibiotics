import Popup from 'reactjs-popup'
import {IoIosArrowBack, IoIosArrowForward, IoIosCalendar} from 'react-icons/io'
import Header from '../Header'
import Menu from '../Menu'
import Main from '../Main'
import './index.css'

const taskData = [
  {
    id: 1,
    tasks: 'BGV of new Candidates',
    time: '2:00PM',
    date: 'Fri,21 May 2022',
    assignedTo: 'ArvindKarmarkar',
    assignedBy: 'ManoharPatnaik',
    deadLine: 'Fri,21 May 2022',
    status: 'Active',
    priority: 'High',
  },
  {
    id: 2,
    tasks: 'BGV of new Candidates',
    time: '2:00PM',
    date: 'Fri,21 May 2022',
    assignedTo: 'ArvindKarmarkar',
    assignedBy: 'ManoharPatnaik',
    deadLine: 'Fri,21 May 2022',
    status: 'Active',
    priority: 'High',
  },
  {
    id: 3,
    tasks: 'BGV of new Candidates',
    time: '2:00PM',
    date: 'Fri,21 May 2022',
    assignedTo: 'ArvindKarmarkar',
    assignedBy: 'ManoharPatnaik',
    deadLine: 'Fri,21 May 2022',
    status: 'Active',
    priority: 'High',
  },
]

const Task = () => (
  <div className="container-App">
    <Header />
    <div className="home">
      <Menu />
      <div className="task">
        <div className="tt">
          <h1 className="para">Tasks</h1>
          <div className="pp">
            <IoIosArrowBack className="circle" />
            <p>
              <IoIosCalendar />
              <span className="pop-text">May 9,2022</span>
            </p>
            <IoIosArrowForward className="circle" />
          </div>
        </div>

        <hr />
        <div className="task-status">
          <div className="box1">
            <p className="box-para">68</p>
            <p className="box-para">ongoing</p>
          </div>
          <div className="box2">
            <p className="box-para">24</p>
            <p className="box-para">Delayed</p>
          </div>
          <div className="box3">
            <p className="box-para">10</p>
            <p className="box-para">Completed</p>
          </div>
          <div className="box4">
            <p className="box-para">100</p>
            <p className="box-para">Total Assigned</p>
          </div>
        </div>
        <p className="para23">
          Sort by:<span className="all">All</span>
        </p>
        <div className="main-container">
          <h1 className="para">Task List</h1>
          <input
            type="search"
            placeholder="Search Tasks"
            className="search-bar"
          />
          <div className="rr">
            <p className="pop-text">Task</p>
            <p className="pop-text">Time</p>
            <p className="pop-text">Date</p>
            <p className="pop-text">Assigned To</p>
            <p className="pop-text">Assigned By</p>
            <p className="pop-text">DeadLine</p>
            <p className="pop-text">Status</p>
            <p className="pop-text">Priority</p>
          </div>
          {taskData.map(each => (
            <Main taskDetails={each} key={each.id} />
          ))}
        </div>
      </div>

      <div>
        <Popup
          modal
          trigger={
            <button type="button" className="btn">
              + Add New Task
            </button>
          }
        >
          {close => (
            <>
              <div className="popup-container">
                <p className="para">Add Task</p>
                <hr className="line" />
                <div className="pop">
                  <div>
                    <p className="pop-text">Task Name</p>
                    <input type="text" className="input" />
                    <p className="pop-text">Description</p>
                    <input
                      type="text"
                      placeholder="Write Description"
                      className="input1"
                    />
                    <p className="pop-text">Required To</p>
                    <input type="text" className="input" />
                  </div>

                  <div className="vl">
                    <p className="pop-text">Assign To</p>
                    <input type="text" className="input" />
                  </div>
                  <div className="vl">
                    <p className="pop-text">Set Deadline</p>
                    <input type="date" placeholder="Date" className="input" />
                    <p className="pop-text">Set Priority</p>
                    <input type="radio" id="high" name="High" />
                    <label htmlFor="high" className="pop-text">
                      High
                    </label>
                    <input type="radio" id="medium" name="High" />
                    <label htmlFor="medium" className="pop-text">
                      Medium
                    </label>
                    <input type="radio" id="low" name="High" />
                    <label htmlFor="low" className="pop-text">
                      Low
                    </label>
                  </div>
                </div>
                <hr className="line" />
                <div className="pop-buttons">
                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn">
                    Add
                  </button>
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  </div>
)

export default Task
