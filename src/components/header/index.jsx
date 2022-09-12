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
                            <li>A Alquimia</li>
                            <li>Quem Joga Junto</li>
                            <li>Quem somos</li>
                            <li>Nossas Fórmulas</li>
                            <li>Transparência</li>
                            <li>Mutant</li>
                            <li><Buttons>Fale conosco</Buttons></li>
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