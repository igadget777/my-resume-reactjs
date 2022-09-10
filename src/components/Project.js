import React from 'react'

const Project = (props) => {
  const { description } = props;
  return (
    <>
      <li>
        {description}
      </li>
    </>
  )
}

export default Project