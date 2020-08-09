import React from 'react'
import styled from 'styled-components'

//import components
import Heading from '../components/section-heading'
import Margins from '../layout/margins'
import Padding from '../layout/padding'

//import icons
import weekIcon from '../images/icon-week.svg'
import moneyIcon from '../images/icon-money.svg'
import designIcon from '../images/icon-design.svg'

function Diff({title, copy, icon}) {
    return (
        <div>
            <IconWrapper>
                <img src={icon} alt='icon'/>
            </IconWrapper>
            <Title>{title}</Title>
            <p>{copy}</p>
        </div>
    )
}

export default function WhyMS() {
    return (
        <section>
            <Margins>
                <Heading title='We Do Direct Mail Differently' subtitle='why mail shark?' />
                <Padding size='m' />
                <Grid>
                    <Diff
                        icon={weekIcon}
                        title='Mail and Pay Weekly'
                        copy='We take the total number of mail pieces, as well as the total cost of your campaign, and spread them out evenly over a period of weeks or months. You can then rely on a steadier, more predictable return over time, instead of a rush of new business all at once.'
                    />
                    <Diff
                        icon={moneyIcon}
                        title='No Money Down'
                        copy='We finance the cost of your market analysis, mailing list, artwork, printing, postal sorting, and delivery. You don’t pay a dime until we pay the post office for your first week’s mailing.'
                    />
                    <Diff
                        icon={designIcon}
                        title='Free Professional Design'
                        copy='Free custom design and unlimited revisions come standard with our Full-Service, EDDM®, and Print Only options. Our team of graphic designers have the skills and expertise to create compelling pieces that get results.'
                    />
                </Grid>
            </Margins>
        </section>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
`

const Title = styled.h3`
    margin-bottom: 1rem;
`

const IconWrapper = styled.div`
    height: 3.125rem;
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
`