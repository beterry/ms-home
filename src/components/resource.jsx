import React from 'react'
import styled from 'styled-components'

//brand colors
import colors from '../styles/colors'

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

export default function resource({image, title, link, time, cat}) {
    return (
        <Card href={link}>
            <ImageWrapper>
                <img src={image} alt='' />
            </ImageWrapper>
            <TextWrapper>
                <TitleWrapper>
                    <h3>{title}</h3>
                    <p>{cat}</p>
                </TitleWrapper>
                <Time>{`${time} min`}</Time>
            </TextWrapper>
        </Card>
    )
}
