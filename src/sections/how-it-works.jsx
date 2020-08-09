import React from 'react'
import styled from 'styled-components'

//brand colors
import colors from '../styles/colors'

//import components
import Heading from '../components/section-heading'
import Margins from '../layout/margins'
import Padding from '../layout/padding'

function Step({number, title, children}) {
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

function Text(props) {
    return (
        <Message {...props}>
            <p>{props.children}</p>
        </Message>
    )
}

export default function HowItWorks() {
    return (
        <Section>
            <Padding size='1/2' />
            <Margins>
                <Heading title='The Easiest Way to Mail' subtitle='how it works' />
                <Padding size='m' />
                <Grid>
                    <Step number={1} title='Choose a Product'>
                        <Text>Happy to hear you decided on using Mail Shark to reach your marketing goals! What product would you like to mail?</Text>
                        <Text blue>I think an oversized postcard would really stand out in the mailbox.</Text>
                        <Text>You bet! That’s our most popular product with a proven track record of success.</Text>
                    </Step>
                    <Step number={2} title='Choose a Mailing Area'>
                        <Text>Do you have an idea whether you want to target a specific audience or blanket the area around your business?</Text>
                        <Text blue>What would you suggest?</Text>
                        <Text>In your industry, at your budget, we’ve had great response rates doing a 5,000 address targeted mailing.</Text>
                        <Text blue><span role="img" aria-label='thumbs up'>&#128077;</span></Text>
                    </Step>
                    <Step number={3} title='Choose a Schedule'>
                        <Text>Final question: when would you like to start mailing and how many weeks would you like to mail and pay over?</Text>
                        <Text blue>Lets start July 3rd for 8 weeks.</Text>
                        <Text>Great plan. That means we will mail 625 postcards per week and bill you $269 per week for 8 weeks.</Text>
                        <Text>You're all set! <span role="img" aria-label='mailbox'>&#128235;</span></Text>
                    </Step>
                </Grid>
            </Margins>
            <Padding size='1/2' />
        </Section>
    )
}

const Section = styled.section`
    background: ${colors.gray[5]};
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
`

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

const Message = styled.div`
    background: ${props => props.blue ? colors.c[600] : colors.gray[10]};
    color: ${props => props.blue ? 'white' : 'black'};
    border-radius: 1rem;
    padding: .5rem 1rem;
    margin: .5rem 0;
    max-width: 80%;
    align-self: ${props => props.blue ? 'flex-end' : 'flex-start'};
    position: relative;
    span{
        font-size: 1.5rem;
    }
`