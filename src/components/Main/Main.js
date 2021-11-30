import React from 'react'
import './Main.css'
import { zodiacs } from '../../data'
import ZodiacCard from '../ZodiacCard/ZodiacCard'

export default function Main() {
  return (
    <main className="main">
      {zodiacs.map((zodiac) => (
        <ZodiacCard key={zodiac.name} {...zodiac} />
      ))}
    </main>
  )
}
