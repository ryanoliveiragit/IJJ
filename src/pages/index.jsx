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
import { Content } from '../styles/pages'
import Contador from '../components/count'
import Page from '../components/SEO/page'
import TypewriterNext from '../components/Typewriter'
import Title from '../components/Title'

//Home
function index() {
  return (
    <Fragment>
      <Page title="JogaJunto" description="JogaJunto" path="/">
        <GlobalStyle /> {/* Style Global */}
        <Header /> {/* Header */}
        <Layout> {/* Container */}
          <Main> {/* Main */}
            <div>
              <Title
                text="AQUI A GENTE"
                color="Black"
              /> {/* Title */}
              <TypewriterNext /> {/* Textwriter */}
              <Buttons>Seja TRIPPER</Buttons> {/* Button */}
            </div>
          </Main>
        </Layout>
        <img src="/assets/wave.svg" alt="wave" /> {/* Wave */}
        <Content>
          <Layout>
            <Contador /> {/* Count */}
          </Layout>
        </Content>
        <Footer /> {/* Footer */}
      </Page>
    </Fragment>
  )
}

export default index