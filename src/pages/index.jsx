/* eslint-disable @next/next/no-img-element */
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
import { Content } from '../styles/pages'
import Contador from '../components/count'
import Page from '../components/SEO/page'

//Home
function index() {
  return (
    <Fragment>
      <Page title="JogaJunto" description="JogaJunto" path="/">
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
      <img src="/assets/wave.svg" alt="wave" />
      <Content>
        <Layout>
          <Contador />
        </Layout>
      </Content>
      <Footer />
      </Page>
    </Fragment>
  )
}

export default index