import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

const Section = styled.section`
    margin: 3.75rem 0;
    padding: ${props => props.bk ? '3.75rem 0' : null};
    background: ${props => props.bk || 'none'};
    position: relative;
`

const Wrapper = styled.div`
    width: 90%;
    max-width: 100rem;
    margin: 0 auto;
`

const TitleWrapper = styled.hgroup`
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
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

export default function section(props) {
    return (
        <Section bk={props.bk}>
            <Wrapper>
                <TitleWrapper>
                    <Title>{props.title}</Title>
                    {props.subtitle ? <Subtitle>{props.subtitle}</Subtitle> : null}
                </TitleWrapper>
                {props.children}
            </Wrapper>
        </Section>
    )
}