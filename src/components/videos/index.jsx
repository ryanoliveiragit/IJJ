import React from 'react'
import { VideoPlay } from './styles'

export default function VideoPlayer() {
  return (
    <div>
      <VideoPlay>
        <video muted autoPlay loop style={{ width: '75%', height: 'auto' }}>
          <source src="https://d10nkis4yqan13.cloudfront.net/11107/553945/bb73907c-854a-494b-a197-48c1a3bceb9e_1080p.webm" />
        </video>
        <div className='informations'>
          <section>
            <h2>QUEM SOMOS?</h2>
            <p>Uma associação sem fins lucrativos, que apoia, desenvolve e inspira as comunidades ao seu redor.</p>
          </section>
          <hr />
          <section>
            <h2>O QUE FAZEMOS?</h2>
            <p>Aqui transformamos vidas para aqueles que não tiveram oportunidades.</p>
          </section>
          <hr />
          <section>
            <h2>NOSSO PROPÓSITO</h2>
            <p>Mudar o mundo por meio da aceleração e inclusão tecnológica.</p>
          </section>
        </div>
      </VideoPlay>
    </div>
  )
}