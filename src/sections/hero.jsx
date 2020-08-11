import React from 'react'
import styled from 'styled-components'

//brand colors 
import colors from '../styles/colors'

//import layout components
import Margins from '../layout/margins'
import {ContainedButton, TextButton} from '../components/ms-buttons'

export default function Hero() {
    return (
        <Header>
            <Margins>
                <ContentWrapper>
                    <hgroup>
                        <h1>Direct Mail Marketing</h1>
                        <h2 className='overline'>Easy & Affordable</h2>
                        <Copy>Mail Shark is more than a direct mail company - we’re an extension of your marketing team. We help countless businesses, like yours, to meet their marketing goals with custom direct mail solutions.</Copy>
                    </hgroup>
                    <ButtonWrapper>
                        <MainButton as='a' href='https://www.themailshark.com/' primary>Get Started</MainButton>
                        <VideoButton as='a' href='https://www.themailshark.com/' white>Watch Video</VideoButton>
                    </ButtonWrapper>
                </ContentWrapper>
            </Margins>
        </Header>
    )
}

const Header = styled.header`
    background: linear-gradient(180deg, ${colors.royal} 0%, ${colors.p[900]} 100%) 0% 0% no-repeat padding-box;
    padding: 6rem 0;
`

const ContentWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    hgroup{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        h1{
            order: 2;
            font-size: 4.375rem;   
        }
        h2{
            order: 1;
            color: ${colors.c[600]};
            font-size: 1.5rem;
            letter-spacing: 2.4px;
        }
    }
`

const Copy = styled.p`
    margin: 2rem 0;
    text-align: center;
    order: 2;
    max-width: 37.5rem;
`

const ButtonWrapper = styled.div`
    display: flex;
    & > *{
        margin: 0 .5rem;
    }
`

const MainButton = styled(ContainedButton)`
`

const VideoButton = styled(TextButton)`
`