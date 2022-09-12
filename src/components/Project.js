import React from 'react'

const Project = (props) => {
  const { name, url, description } = props;
  return (
    <>
      <li>
        <a target="_blank" href={url} rel="noreferrer">{ name }</a><span>: {description}</span>
      </li>
    </>
  )
}

export default Project