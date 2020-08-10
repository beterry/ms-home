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

//import components
import Margins from '../layout/margins'

//logo store
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

export default function TrustLogos() {
    return (
        <section>
            <Margins>
                <ContentWrapper>
                    <p className='overline'>They trust Mail Shark</p>
                    <LogoWrapper>
                        {logos.map((trust, index) => 
                            <Logo src={trust.logo} alt={trust.company} key={index} />
                        )}
                    </LogoWrapper>
                </ContentWrapper>
            </Margins>
        </section>
    )
}

const ContentWrapper = styled.div`
    text-align: center;
    p{
        color: ${colors.gray[60]};
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
    margin: 1rem 2rem;
`