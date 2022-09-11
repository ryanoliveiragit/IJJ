import React, { Fragment } from 'react'
import Header from '../components/header'
import dynamic from 'next/dynamic'

const VideoPlay = dynamic(() => import('../components/videos/index'), {
  ssr: false,
})

function index() {
  return (
    <Fragment>
      <Header />
        <VideoPlay />
    </Fragment>
  )
}

export default index