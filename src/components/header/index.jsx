import React,
{
    Fragment,
    useState
}
    from 'react'

import Image from 'next/image'
import JogaJuntoLogo from "../../assets/JogaJunto.png"
import ContainerHeader from './styles'
import Buttons from '../buttons/styles'
import Sidebar from '../sidebar'
import Layout from '../layout'

function Header() {
    const [sidebar, setSidebar] = useState(false)
    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <Fragment>
            <ContainerHeader>
                <Layout>
                    <nav className='navigation'>
                        <Image
                            width={"180%"}
                            height={"35%"}
                            src={JogaJuntoLogo}
                            alt="JogajuntoImage"
                        />
                        <ul className='list'>
                            <li>Home</li>
                            <li>TRIP</li>
                            <li>Nossas Trilhas</li>
                            <li>Para empresas</li>
                            <li>Quem somos nós</li>
                            <li>Transparencia</li>
                            <li>Contato</li>
                            <li><Buttons>Jogue Junto</Buttons></li>
                        </ul>
                        <button
                            className='amburger'
                            onClick={showSiderbar}>menu
                        </button>
                        {sidebar &&
                            <Sidebar
                                active={setSidebar}
                            />}
                    </nav>
                </Layout>
            </ContainerHeader>
        </Fragment>
    )
}

export default Header;