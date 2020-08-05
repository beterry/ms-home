import React from 'react'
import styled from 'styled-components'

const Diff = styled.div`

`

const Title = styled.h3`
    margin-bottom: 1rem;
`

const Copy = styled.p`

`

const IconWrapper = styled.div`
    height: 3.125rem;
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
`

const Icon = styled.img`

`

export default function diff({title, copy, icon}) {
    return (
        <Diff>
            <IconWrapper>
                <Icon src={icon} alt='icon'/>
            </IconWrapper>
            <Title>{title}</Title>
            <Copy>{copy}</Copy>
        </Diff>
    )
}
