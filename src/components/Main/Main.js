import React from 'react'
import './Main.css'
import background from '../../background.jpg'
import { zodiacs } from '../../data'
import ZodiacCard from '../ZodiacCard/ZodiacCard'

export default function Main() {
  return (
    <main>
      <img className="background" src={background} alt="stars" />
      {zodiacs.map((zodiac) => (
        <ZodiacCard key={zodiac.name} {...zodiac} />
      ))}
    </main>
  )
}
