import { Fragment } from "react"
import GlobalStyle from '../styles/GlobalStyle'
import {DefaultSeo} from 'next-seo'
import SEO from '../components/SEO/next-seo-config'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment> {/* Retornar múltiplos elementos */}
    <DefaultSeo {...SEO} />
    <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp


