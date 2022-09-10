import './Experience.css'

const Experience = (props) => {
  const { company, role, startDate, endDate, accomplishments } = props;
  return (
    <div className="experience">
      <p><b>{company}<span className="title"> - {role}</span></b></p>
      <p className="date">{startDate} - {endDate}</p>
      <ul>
        {accomplishments.map((accomplishment, index) => (
          <li key={index}>
            {accomplishment}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience