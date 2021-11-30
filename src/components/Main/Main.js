import React from 'react'
import './Main.css'
import background from '../../background.jpg'

export default function Main() {
  return (
    <main>
      <img className="background" src={background} alt="stars" />
    </main>
  )
}
