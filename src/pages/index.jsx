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
            <h2>AQUI A GENTE</h2>
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
            <Buttons>Seja TRIPPER</Buttons>
          </div>
        </Main>
      </Layout>
      <Footer />
    </Fragment>
  )
}

export default index