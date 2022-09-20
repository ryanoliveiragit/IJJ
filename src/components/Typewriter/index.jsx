import React from 'react'
import Typewriter from 'typewriter-effect';

const TypewriterNext = () => {
  return (
    <Typewriter
    options={{
      strings: ['APRENDE JUNTO', 'CRESCE JUNTO', 'JOGA JUNTO',],
      autoStart: true,
      loop: true,
    }}
    onInit={(typewriter) => {
      typewriter.typeString("")
        .callFunction(() => {
        })
        .pauseFor(1500)
        .deleteAll()
        .callFunction(() => {
        })
        .start();
    }}
  />
  )
}

export default TypewriterNext