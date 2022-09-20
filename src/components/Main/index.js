import './index.css'

const Main = props => {
  const {taskDetails} = props
  const {
    tasks,
    time,
    date,
    assignedBy,
    assignedTo,
    deadLine,
    status,
    priority,
  } = taskDetails
  return (
    <div>
      <div className="main-1">
        <p className="pop-text3">{tasks}</p>
        <p className="pop-text3">{time}</p>
        <p className="pop-text3">{date}</p>
        <p className="pop-text3">{assignedBy}</p>
        <p className="pop-text3">{assignedTo}</p>
        <p className="pop-text3">{deadLine}</p>
        <p className="pop-text3">{status}</p>
        <p className="pop-text3">{priority}</p>
      </div>
    </div>
  )
}

export default Main
