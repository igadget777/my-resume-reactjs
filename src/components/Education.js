import React from 'react'

const Education = (props) => {
  const { institution, location, studyType, degree } = props;
  return (
    <div>
      <p>{institution}, {location}<span className="title"> - {studyType}, {degree}.</span>
      </p>
    </div>
  )
}

export default Education