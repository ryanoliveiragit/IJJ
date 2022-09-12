import React, { Fragment } from 'react'
import { Container } from './styles'
import CountUp from 'react-countup';

const Contador = () => {
    return (
        <Fragment>
            <Container>
                <div>
                    <CountUp
                        start={0}
                        end={500}
                        duration={4}
                    />
                    <p>Trippers formados</p>
                </div>
                <div>
                    <CountUp
                        start={0}
                        end={50}
                        duration={4}
                    />
                    <p>Trippers contratados</p>
                </div>
                <div>
                    <CountUp
                        start={0}
                        end={10}
                        duration={4}
                    />
                    <p>Turmas</p>
                </div>
            </Container>
        </Fragment>
    )
}

export default Contador