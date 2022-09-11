import React, { Fragment } from 'react'
import Image from 'next/image'
import JogaJuntoLogo from "../../assets/JogaJunto.png"
import Container from './styles'
import Buttons from '../buttons/styles'

function Header(){
    return (
        <Fragment>
            <Container>
                <nav>
                    <Image
                        src={JogaJuntoLogo}
                        alt="JogajuntoImage"
                    />
                    <ul>
                        <li>A Alquimia</li>
                        <li>Quem Joga Junto</li>
                        <li>Quem somos</li>
                        <li>Nossas Fórmulas</li>
                        <li>Transparência</li>
                        <li>Mutant</li>
						<Buttons>Fale conosco</Buttons>
                    </ul>
                </nav>
            </Container>
        </Fragment>
    )
}

export default Header;