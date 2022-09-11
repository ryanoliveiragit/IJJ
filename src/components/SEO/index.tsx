import React from 'react'
import Head from 'next/head'

type Props = {
  title: string
  description: string
  image?: string
}

const SEO: React.FC<Props> = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default SEO