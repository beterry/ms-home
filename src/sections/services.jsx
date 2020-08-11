import React from 'react'
import styled from 'styled-components'

//brand colors
import colors from '../styles/colors'

//import components
import Heading from '../components/section-heading'
import Margins from '../layout/margins'

//import icons
import plus from '../images/plus.svg'
import minus from '../images/minus.svg'

function Service({title, copy, includes=[], excludes=[], link}) {
    return (
        <Card>
            <TextWrapper>
                <Title>{title}</Title>
                <Copy>{copy}</Copy>
            </TextWrapper>
            <ListWrapper>
                <List>
                    {includes.map((item, index) => 
                        <ListItem key={`includes${index}`}>
                            <img src={plus} alt='plus' />
                            <p>{item}</p>
                        </ListItem>
                    )}
                    {excludes.map((item, index) => 
                        <ListItem key={`excludes${index}`} gray>
                            <img src={minus} alt='plus' />
                            <p>{item}</p>
                        </ListItem>
                    )}
                </List>
            </ListWrapper>
        </Card>
    )
}

export default function Services() {
    return (
        <section>
            <Margins>
                <Heading title='Custom Direct Mail Solutions' subtitle='our services' padding/>
                <Grid columns={3}>
                    <Service
                        title='Full-Service Mailings'
                        copy='Whether you’re mailing to everyone in your area or targeting a specific demographic, our full-service options take the hard work and confusion out of direct mail. We handle everything: design, print, and mail.'
                        includes={[
                        'Design with Unlimited Revisions',
                        'High-quality Printing',
                        'Mailing List & Area Analysis',
                        'Bundling & Paperwork',
                        'Shipping'
                        ]}
                    />
                    <Service
                        title='Every Door Direct Mail®'
                        copy='Every Door Direct Mail® (EDDM®), is a direct mailing service offered by the United States Postal Service. This do-it-yourself direct mail option gives business owners the ability to pay bulk mail rates without having to purchase a mailing permit.'
                        includes={[
                        'Design with Unlimited Revisions',
                        'High-quality Printing',
                        'Mailing List & Area Analysis',
                        'Bundling & Paperwork'
                        ]}
                        excludes={[
                        'Shipping'
                        ]}
                    />
                    <Service
                        title='Commercial Printing'
                        copy='We do all of our printing in-house, giving us the ability to ensure the best pricing, quality, and customer service.'
                        includes={[
                        'Design with Unlimited Revisions',
                        'High-quality Printing'              
                        ]}
                        excludes={[
                        'Mailing List & Area Analysis',
                        'Bundling & Paperwork',
                        'Shipping'
                        ]}
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

    @media screen and (min-width: 37.5rem){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 67.5rem){
        grid-template-columns: 1fr 1fr 1fr;
    }
`

const Card = styled.div`
    border: 1px solid ${colors.gray[10]};
    border-radius: .25rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const TextWrapper = styled.div`
    margin-bottom: 2rem;
`

const Title = styled.h3`
    margin-bottom: 1rem;
`

const Copy = styled.p`
`

const ListWrapper = styled.div`
`

const List = styled.ul`
`

const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin: .5rem 0;
    p{
        margin-left: .75rem;
        color: ${props => props.gray ? colors.gray[20] : 'black'};
    }
`