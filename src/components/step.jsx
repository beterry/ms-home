import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

const StepWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const TitleWrapper = styled.hgroup`
    display: flex;
    align-items: flex-end;
    margin-bottom: 1rem;
`

const Number = styled.h3`
    font-size: 5.625rem;
    color: ${colors.gray[10]};
    line-height: 1;
    margin-bottom: -.5rem;
`

const Title = styled.h3`
    margin-left: -1rem;
`

const Messages = styled.div`
    background: white;
    border: 1px solid ${colors.gray[10]};
    border-radius: .25rem;
    padding: 1.5rem 2rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`

export default function step({number, title, children}) {
    return (
        <StepWrapper>
            <TitleWrapper>
                <Number>{number}</Number>
                <Title>{title}</Title>
            </TitleWrapper>
            <Messages>
                {children}
            </Messages>
        </StepWrapper>
    )
}
