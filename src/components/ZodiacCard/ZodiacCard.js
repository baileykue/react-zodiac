import React from 'react'

export default function ZodiacCard({ name, dates }) {
  return (
    <>
      <div>
        <img src={`${process.env.PUBLIC_URL}/zodiac-img/${name}.png`} />
        <span className="name">{name}</span>
        <span>{dates}</span>
      </div>
    </>
  )
}
