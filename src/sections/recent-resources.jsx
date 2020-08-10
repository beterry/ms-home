import React from 'react'
import styled from 'styled-components'

//brand colors
import colors from '../styles/colors'

//import components
import Margins from '../layout/margins'
import Heading from '../components/section-heading'

//import images
import resource1 from '../images/eddm-guide-auto.jpg'

//resource store
const resources = [
    {
        title: 'The EDDM Guide for Auto Repair Shops',
        category: 'EDDM® Basics',
        minutesToRead: 10,
        image: resource1,
        link: ''
    },
    {
        title: 'The EDDM Guide for Auto Repair Shops',
        category: 'EDDM® Basics',
        minutesToRead: 10,
        image: resource1,
        link: ''
    },
    {
        title: 'The EDDM Guide for Auto Repair Shops',
        category: 'EDDM® Basics',
        minutesToRead: 10,
        image: resource1,
        link: ''
    },
    {
        title: 'The EDDM Guide for Auto Repair Shops',
        category: 'EDDM® Basics',
        minutesToRead: 10,
        image: resource1,
        link: ''
    },
]

function Resource({image, title, link, minutesToRead, category}) {
    return (
        <Card href={link}>
            <ImageWrapper>
                <img src={image} alt='' />
            </ImageWrapper>
            <TextWrapper>
                <TitleWrapper>
                    <h3>{title}</h3>
                    <p>{category}</p>
                </TitleWrapper>
                <Time>{`${minutesToRead} min`}</Time>
            </TextWrapper>
        </Card>
    )
}

export default function Resources() {
    return (
        <section>
            <Margins>
                <Heading title='We Are Direct Mail Experts' subtitle='resources' padding />
                <Grid>
                    {resources.map((resource, index) => 
                        <Resource
                            title={resource.title}
                            category={resource.category}
                            minutesToRead={resource.minutesToRead}
                            link={resource.link}
                            image={resource.image}
                            key={index}
                        />
                    )}                    
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

const Card = styled.a`
    border: 1px solid ${colors.gray[10]};
    overflow: hidden;
    border-radius: .25rem;
    transition: box-shadow .2s;
    &:hover{
        box-shadow: 0 0 10px ${colors.gray[20]};
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    img{
        width: 100%;
    }
`

const TextWrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    p{
        order: 1;
        color: ${colors.c[600]};
        font-size: .875rem;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    h3{
        order: 2;
    }
`

const Time = styled.p`
    color: ${colors.gray[60]};
    margin-top: 1rem;
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
`