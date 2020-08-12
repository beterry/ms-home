import React from 'react'
import styled from 'styled-components'

//brand colors
import colors from '../styles/colors'

//import components
import Margins from '../layout/margins'
import {ContainedButton} from '../components/ms-buttons'

export default function noMoneyDownCTA() {
    return (
        <Section>
            <Margins>
                <FlexWrapper>
                    <TitleWrapper>
                        <Title>Start with No Money Down</Title>
                        <Subtitle className='overline'>Get a quote today</Subtitle>
                    </TitleWrapper>
                    <Copy>We finance the cost of your market analysis, mailing list, artwork, printing, postal sorting, and delivery. You don’t pay a dime until we pay the post office for your first week’s mailing.</Copy>
                    <ContainedButton as='a' primary href='https://www.themailshark.com/get-a-quote/'>Get Started</ContainedButton>
                </FlexWrapper>
            </Margins>
        </Section>
    )
}

const Section = styled.section`
    background: linear-gradient(180deg, ${colors.p[800]} 0%, ${colors.p[900]} 100%) 0% 0% no-repeat padding-box;
    padding: 4rem 0;
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
    margin-bottom: .5rem;
`

const Copy = styled.p`
    max-width: 37.5rem;
    text-align: center;
    color: white;
    margin: 1.5rem 0;
    
`