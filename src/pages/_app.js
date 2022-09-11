import { Fragment } from "react"
import GlobalStyle from '../styles/GlobalStyle'
function MyApp({ Component, pageProps }) {
  return (
    <Fragment> {/* Retornar múltiplos elementos */}
    <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp


