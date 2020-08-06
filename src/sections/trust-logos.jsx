import React from 'react'
import styled from 'styled-components'

//brand colors
import colors from '../styles/colors'

//import logos
import marcos from '../images/trust-logos/marcos.svg'
import meineke from '../images/trust-logos/meineke.svg'
import midas from '../images/trust-logos/midas.svg'
import papa from '../images/trust-logos/papa.svg'
import mikes from '../images/trust-logos/mikes.svg'

const logos = [
    {
        company: 'Marcos Pizza',
        logo: marcos
    },
    {
        company: 'Meineke',
        logo: meineke
    },
    {
        company: 'Midas',
        logo: midas
    },
    {
        company: 'Papa Murphy Pizza',
        logo: papa
    },
    {
        company: 'Mountain Mikes',
        logo: mikes
    }
]

const Container = styled.section`
    width: 90%;
    max-width: 100rem;
    margin: 0 auto;
`

const Rule = styled.div`
    width: 100%;
    background: ${colors.gray[10]};
    height: 1px;
    margin-bottom: 2.5rem;
`

const ContentWrapper = styled.div`
    text-align: center;
    p{
        color: ${colors.gray[60]};
        font-size: .875rem;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 2rem;
    }
`

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    opacity: .4;
`

const Logo = styled.img`
    margin: 0 2rem;
`

export default function TrustLogos() {
    return (
        <Container>
            <Rule />
            <ContentWrapper>
                <p>They trust Mail Shark</p>
                <LogoWrapper>
                    {logos.map((trust, index) => 
                        <Logo src={trust.logo} alt={trust.company} key={index} />
                    )}
                </LogoWrapper>
            </ContentWrapper>
        </Container>
    )
}
