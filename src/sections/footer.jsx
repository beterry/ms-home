import React from 'react'
import styled from 'styled-components'

//brand colors
import colors from '../styles/colors'

//import components
import Margins from '../layout/margins'
import {IconButton} from '../components/ms-buttons'

//import images
import logo from '../images/logo.svg'
import insta from '../images/insta.svg'
import facebook from '../images/fb.svg'

const Link = ({label, link}) => (
    <li>
        <a
            href={link}
            target='_blank'
            rel="noopener noreferrer"
        >
            {label}
        </a>
    </li>
)

const LinkList = ({label, link, children}) => (
    <ul>
        <a href={link}><h5>{label}</h5></a>
        {children}
    </ul>
)

export default function Footer() {
    return (
        <Foot>
            <Margins>
                <FlexWrapper>
                    <Contact>
                        <img src={logo} alt='Mail Shark logo' />
                        <p><a href='tel:4846528359'>(484) 652-8359</a></p>
                        <p>4125 New Holland Rd<br />Mohnton, PA 19540</p>
                    </Contact>
                    <Grid>
                        <LinkList label='About' link='https://www.themailshark.com/about/'>
                            <Link label='Meet the Team' link='https://www.themailshark.com/about/team/' />
                            <Link label='Case Studies' link='https://www.themailshark.com/about/case-studies/' />
                            <Link label='Careers' link='https://www.themailshark.com/about/careers/' />
                            <Link label='Contact Us' link='https://www.themailshark.com/contact-us/' />
                        </LinkList>
                        <LinkList label='Products & Pricing' link='https://www.themailshark.com/products/'>
                            <Link label='Postcards' link='https://www.themailshark.com/products/postcards/' />
                            <Link label='Postcard Magnets' link='https://www.themailshark.com/products/postcard-magnets/' />
                            <Link label='Scratch-Off Postcards' link='https://www.themailshark.com/products/scratch-off-postcards/' />
                            <Link label='Plastic Postcards' link='https://www.themailshark.com/products/plastic-postcards/' />
                            <Link label='Menus' link='https://www.themailshark.com/products/menus/' />
                            <Link label='Brochures' link='https://www.themailshark.com/products/brochures/' />
                            <Link label='Letters' link='https://www.themailshark.com/products/letters/' />
                        </LinkList>
                        <LinkList label='Direct Mail Services' link='https://www.themailshark.com/direct-mailing-services/'>
                            <Link label='Our Strategy' link='https://www.themailshark.com/our-strategy/' />
                            <Link label='Mailing Lists' link='https://www.themailshark.com/direct-mailing-services/mailing-lists/' />
                            <Link label='Every Door Direct Mail®' link='https://www.themailshark.com/direct-mailing-services/every-door-direct-mail/' />
                            <Link label='Design' link='https://www.themailshark.com/design-services/' />
                            <Link label='Print' link='https://www.themailshark.com/printing-services/' />
                        </LinkList>
                        <LinkList label='Resources' link='https://www.themailshark.com/resources/'>
                            <Link label='Blog' link='https://www.themailshark.com/type/blog/' />
                            <Link label='Articles' link='https://www.themailshark.com/type/articles/' />
                            <Link label='Guides' link='https://www.themailshark.com/type/guides/' />
                            <Link label='Calculators' link='https://www.themailshark.com/type/calculators/' />
                            <Link label='FAQs' link='https://www.themailshark.com/faq/' />
                        </LinkList>
                    </Grid>
                    <Social>
                        <IconButton
                            as='a'
                            href='https://www.instagram.com/mail_shark/?hl=en'
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <img src={insta} alt='Instagram'/>
                        </IconButton>
                        <IconButton
                            as='a'
                            href='https://www.facebook.com/themailshark'
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <img src={facebook} alt='Facebook'/>
                        </IconButton>
                    </Social>
                </FlexWrapper>
                <Copyright>
                    <p>Mail Shark © 2020. All rights reserved | <a href='https://www.themailshark.com/privacy-policy/'>Privacy Policy</a></p>
                </Copyright>
            </Margins>
        </Foot>
    )
}

const Foot = styled.footer`
    background: ${colors.p[900]};
    color: white;
    padding: 4rem 0 2rem 0;
    a{
        color: white;
    }
    a:hover{
        color: ${colors.c[600]};
    }
`

const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 40rem){
        flex-wrap: wrap;
    }
`

const Contact = styled.div`
    margin-right: 2rem;
    flex-shrink: 0;
    p{
        margin-top: 1rem;
    }
    a{
        font-size: 1rem;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3rem;
    h5{
        margin-bottom: 1rem;
    }
    li{
        margin-bottom: .5rem;
    }
    @media screen and (max-width: 64rem){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 40rem){
        margin-top: 2.5rem;
        width: 100%;
        order: 3;
        gap: 2rem;
    }
`

const Social = styled.div`
    display: flex;
    a:hover{
        background: ${colors.c.opacity[20]};
    }
    a:first-child{
        margin-right: .25rem;
    }
    @media screen and (max-width: 40rem){
        order: 2;
    }
`

const Copyright = styled.div`
    margin-top: 4rem;
    opacity: .6;
    p{
        text-align: center;
        margin: 0 auto;
    }
    a{
        font-size: 1rem;
    }
`