import React from 'react'
import './ZodiacCard.css'

export default function ZodiacCard({ name, dates }) {
  return (
    <>
      <div className="zodiac-card div">
        <img src={`${process.env.PUBLIC_URL}/zodiac-img/${name}.png`} />
        <h1>{name}</h1>
        <h2>{dates}</h2>
      </div>
    </>
  )
}
