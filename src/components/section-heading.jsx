import React from 'react'
import styled from 'styled-components'

//brand colors
import colors from '../styles/colors'

//import components
import Padding from '../layout/padding'

//import icons
import {MdArrowForward} from 'react-icons/md'

export default function Heading({title, subtitle, link, padding}) {
    return (
        <>
            <TitleWrapper>
                <Title>{title}</Title>
                {subtitle ? 
                    <Subtitle as={link ? 'a' : 'div'} href={link}>
                        <h4 className='overline'>{subtitle}</h4>
                        {link ? <IconWrapper><MdArrowForward size='1.5rem'/></IconWrapper> : null}
                    </Subtitle> 
                    : null}
            </TitleWrapper>
            {padding ? <Padding size='l' /> : null}
        </>
    )
}

const TitleWrapper = styled.hgroup`
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    order: 2;
`

const IconWrapper = styled.div`
    margin-left: .5rem;
    position: relative;
    left: 0;
    transition: left .4s;
`

const Subtitle = styled.div`
    order: 1;
    color: ${colors.c[600]};
    display: flex;
    align-items: center;
    margin-bottom: .25rem;
    &:hover{
        ${IconWrapper}{
            left: .5rem;
        }
    }
`

