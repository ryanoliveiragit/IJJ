import React from "react";
import { Container, Content } from './styles'
import Image from 'next/image'
import JogaJuntoLogo from "../../assets/JogaJunto.png"
import Buttons from '../buttons/styles'

const Sidebar = ({ active }) => {
    const closeSidebar = () => {
        active(false)
    }
    return (
        <Container sidebar={active}>
            <div
                className="button">
                <Buttons
                    onClick={closeSidebar}>menu
                </Buttons>
            </div>
            <Content>
                <nav className="sideBarNavigation">
                    <Image
                        src={JogaJuntoLogo}
                        alt="JogajuntoImage"
                    />
                    <ul className="sidebar">
                        <li>Home</li>
                        <li>TRIP</li>
                        <li>Nossas Trilhas</li>
                        <li>Para empresas</li>
                        <li>Quem somos nós</li>
                        <li>Transparencia</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </Content>
        </Container>
    )
}
export default Sidebar