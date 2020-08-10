import React from 'react'
import styled from 'styled-components'

//brand colors
import colors from '../styles/colors'

//import components
import Padding from '../layout/padding'

const TitleWrapper = styled.hgroup`
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    order: 2;
`

const Subtitle = styled.h4`
    order: 1;
    color: ${colors.c[600]};
    font-size: .875rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
`

export default function Heading({title, subtitle, padding}) {
    return (
        <>
            <TitleWrapper>
                <Title>{title}</Title>
                {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
            </TitleWrapper>
            {padding ? <Padding size='m' /> : null}
        </>
    )
}
