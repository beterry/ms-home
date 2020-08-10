import React from 'react'
import styled from 'styled-components'

//brand colors
import colors from '../styles/colors'

//import components
import Padding from '../layout/padding'
import Margins from '../layout/margins'

export default function noMoneyDownCTA() {
    return (
        <Section>
            <Padding size='1/2' />
            <Margins>
                <FlexWrapper>
                    <TitleWrapper>
                        <Title>Start with No Money Down</Title>
                        <Subtitle className='overline'>Get a quote today</Subtitle>
                    </TitleWrapper>
                    <Copy>We finance the cost of your market analysis, mailing list, artwork, printing, postal sorting, and delivery. You don’t pay a dime until we pay the post office for your first week’s mailing.</Copy>
                    <Button primary href=''>Get Started</Button>
                </FlexWrapper>
            </Margins>
            <Padding size='1/2' />
        </Section>
    )
}

const Section = styled.section`
    background: ${colors.p[900]};
`

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-align: center;
`

const Title = styled.h2`
    order: 2;
`

const Subtitle = styled.h3`
    order: 1;
    color: ${colors.c[600]};
`

const Copy = styled.p`
    max-width: 37.5rem;
    text-align: center;
    color: white;
    margin: 1.5rem 0;
    
`

const Button = styled.a`
    background: ${props => props.primary ? colors.s[600] : colors.c[600]};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: .875rem;
    letter-spacing: .7px;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    min-height: 2.25rem;
    min-width: 4rem;
    border-radius: .25rem;
    padding: 0 1rem;
`