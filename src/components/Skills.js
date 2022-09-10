import React from 'react'

const Skills = (props) => {
  const { name, description } = props;
  return (
    <>
      <li>
        <b>{name}: </b><span>{description}</span>
      </li>
    </>
  )
}

export default Skills