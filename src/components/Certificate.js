import React from 'react'
import { AddLibrary } from '../utils/EmbedScript'

const Certificate = (props) => {
  const { badgeHtml, cdnUrl } = props;
  return (
    <>
      <li dangerouslySetInnerHTML={{ __html: badgeHtml }}>
        {AddLibrary(cdnUrl)}
      </li>
    </>
  )
}

export default Certificate;
