import React,
{
  Fragment
} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Layout from '../components/layout'
import GlobalStyle from '../styles/GlobalStyle'
import Buttons from '../components/buttons/styles'
import { Main } from '../styles/pages'
import Typewriter from 'typewriter-effect';

//Home
function index() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Layout>
        <Main>
          <div>
            <Typewriter
              options={{
                strings: ['AQUI A GENTE', 'JOGA JUNTO'],
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.typeString("AQUI A GENTE JOGA JUNTO")
                  .callFunction(() => {
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                  })
                  .start();
              }}
            />
            <Buttons>Seja TRIPPER</Buttons>
          </div>
        </Main>
      </Layout>
      <Footer />
    </Fragment>
  )
}

export default index