import React, { Fragment } from 'react'
import { FooterStyled, Content, MadeWith } from './styles'
import Layout from '../layout'
import JogaJuntoLogo from "../../assets/JogaJunto.png"
import Heart from "../../assets/heart.png"
import Image from 'next/image'

const Footer = () => {
  return (
    <Fragment>
      <FooterStyled>
        <Layout>
          <div className="footer">
            <Content>
              <Image
                width={"180%"}
                height={"35%"}
                src={JogaJuntoLogo}
                alt="JogajuntoImage"
              />
              <p>+ 55 11 3094-2130
                R. Hungria, 574 - Cidade Jardim, São Paulo - SP, 01455-903</p>
            </Content>
            <Content>
              <ul>
                <li>O que fazemos</li>
                <li>Nossas empresas</li>
                <li>Executivos</li>
                <li>Projetos</li>
                <li>Fale Conosco</li>
                <li>Alquimistas</li>
                <li>Mutant</li>
              </ul>
            </Content>

            <Content>
              <h1>Também estamos aqui</h1>
              <span>Sociais</span>
            </Content>
          </div>
        </Layout>
      </FooterStyled>
      <MadeWith>
        <div className="footer-copy">
          <div className="footer-copy-items">
            <a href="#">Política de Privacidade</a>
            <p>Jogajunto © 2022 - 46.066.846/0001-25</p>
            <p><span>Made with</span>
              <Image
                src={Heart}
                width="12"
                height="12"
                alt='heart'>
              </Image>
              <span>by Ryanvs</span>
            </p>
          </div>
        </div>
      </MadeWith>
    </Fragment>
  )
}

export default Footer