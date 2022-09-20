import React, { Fragment } from 'react'
import { TitleContainer } from './styles'

const Title = ({text, color}) => {
    return (
        <Fragment>
            <TitleContainer>
                <h1 className={color}>{text}</h1>
            </TitleContainer>
        </Fragment>
    )
}

export default Title