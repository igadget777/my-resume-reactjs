import React, { useState } from 'react'
import './Footer.css'

const Footer = () => {
  const [date] = useState(new Date().getFullYear())
  return (
    <footer>
      <p>Created by: Brett Stephen &copy;<span><em>{date}</em></span></p>
    </footer>
  )
}

export default Footer