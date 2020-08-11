import React from 'react'
import styled from 'styled-components'

//brand colors
import colors from '../styles/colors'

//import components
import Margins from '../layout/margins'
import Heading from '../components/section-heading'

//import images
import terryMckim from '../images/terry-mckim@2x.jpg'
import anthonySottasante from '../images/anthony-sottasante@2x.jpg'
import billBrown from '../images/bill-brown@2x.jpg'
import quote from '../images/icon-quote.svg'

function Testimonial({profile, name, business, copy}) {
    return (
        <Card>
            <ImageWrapper>
                <Profile src={profile} alt={name} />
                <Quote>
                    <img src={quote} alt='quote' />
                </Quote>
            </ImageWrapper>
            <Copy>{copy}</Copy>
            <NameWrapper>
                <Name>{name}</Name>
                <Business>{business}</Business>
            </NameWrapper>
        </Card>
    )
}


export default function Testimonials() {
    return (
        <section>
            <Margins>
                <Heading title='What Our Customers Say' subtitle='Testimonials' padding />
            </Margins>
                <Grid>
                    <Testimonial
                        profile={terryMckim}
                        copy='When we open up a new location, we like to send out $25 gift cards to attract new clients. For our most recent salon opening I used Mail Shark and was able to send out 3 times as many mailers which generated over twice as many returns as we’ve received before!'
                        name='Terry McKim'
                        business='Lord & Ladies'
                    />
                    <Testimonial
                        profile={anthonySottasante}
                        copy='The Mail Shark Program is like finding gold. Our business was up 33% and it is a direct result of their program. The customer service is unbelievable. Talking to the other guys in the direct mail business is like talking to the wall.'
                        name='Anthony Sottasante'
                        business='Parma Pizza'
                    />
                    <Testimonial
                        profile={billBrown}
                        copy='The staff at Mail Shark is nothing but professional. Kevin, Liz in the art department, everybody has been extremely helpful. And we plan on using Mail Shark for years to come. We also get a lot of secondary printing done from them. They are very fast, very efficient, very convenient. It’s an all around great experience with them.'
                        name='Bill Brown'
                        business={`Fox's Pizza Den`}
                    />
                </Grid>
        </section>
    )
}

const Grid = styled.div`
    display: grid;
    gap: 2.5%;
    grid-template-columns: 2.5% repeat(3, 80%) 2.5%;
    overflow-x: auto;
    padding-bottom: 2rem; 
    &::before, &::after{
        content: "";
    } 

    @media screen and (min-width: 37.5rem){
        grid-template-columns: 1fr 1fr;
        &::before, &::after{
            content: normal;
        }
        width: 90%;
        max-width: 100rem;
        margin: 0 auto; 
    }

    @media screen and (min-width: 67.5rem){
        grid-template-columns: 1fr 1fr 1fr;
    }
`

const Card = styled.div`
    padding: 2rem;
    border: 1px solid ${colors.gray[10]};
    border-radius: .25rem;
    display: flex;
    flex-direction: column;
`

const ImageWrapper = styled.div`
    width: 6.25rem;
    position: relative;
    margin-bottom: 2rem;
`

const Profile = styled.img`
    width: 100%;
`

const Quote = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    background: ${colors.c[600]};
    border-radius: 50%;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -.5rem;
    left: -.5rem;
`

const Copy = styled.p`
    margin-bottom: 2rem;
`

const NameWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
   justify-content: flex-end;
`

const Name = styled.h4`
`

const Business = styled.p`
    font-style: italic;
    color: ${colors.gray[60]};
`