import React from 'react'
import styled from 'styled-components'

//brand colors
import colors from '../styles/colors'

//import images
import quote from '../images/icon-quote.svg'

const Testimonial = styled.div`
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

export default function testimonial({profile, name, business, copy}) {
    return (
        <Testimonial>
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
        </Testimonial>
    )
}
