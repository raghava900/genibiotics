import './index.css'

const TaskDetails = props => {
  const {Task} = props
  const {name, email, gender, status} = Task
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{gender}</p>
      <p>{status}</p>
    </div>
  )
}
export default TaskDetails
