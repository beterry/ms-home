import React, {Component} from 'react'
import styled from 'styled-components'

//brand colors
import colors from '../styles/colors'

//import images
import logo from '../images/logo.svg'
import {MdArrowDropDown} from 'react-icons/md'

//import components
import {ContainedButton, TextButton, IconButton} from '../components/ms-buttons'

const NavLink = ({label, link}) => (
    <a href={link}>{label}</a>
)

class Dropdown extends Component{
    constructor(props){
        super(props)
        this.state = {isOpen: false}
        this.toggleOpen = this.toggleOpen.bind(this)
    }

    toggleOpen() {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return(
            <>
            <MainLinkWrapper>
                <a href={this.props.link}>{this.props.label}</a>
                <DropdownButton
                    flipped={this.state.isOpen}
                    onClick={this.toggleOpen}
                    white
                >
                    <MdArrowDropDown size='1.5rem'/>
                </DropdownButton>
            </MainLinkWrapper>
            <DropdownContent>
                {this.state.isOpen ? 
                    this.props.children :
                    null
                }
            </DropdownContent>
            </>
        )
    }
}

const DrawerLink = ({label, link}) => (
    <MainLinkWrapper>
        <NavLink label={label} link={link} />
    </MainLinkWrapper>
    
) 

const DrawerLinks = () => (
    <LinkWrapper>
        <DrawerLink label='About Us' link='https://www.themailshark.com/about/' />
        <Dropdown label='Products & Pricing' link='https://www.themailshark.com/products/'>
            <NavLink label='Postcards' link='https://www.themailshark.com/products/postcards/' />
            <NavLink label='Postcard Magnets' link='https://www.themailshark.com/products/postcard-magnets/' />
            <NavLink label='Scratch-Off Postcards' link='https://www.themailshark.com/products/scratch-off-postcards/' />
            <NavLink label='Plastic Postcards' link='https://www.themailshark.com/products/plastic-postcards/' />
            <NavLink label='Menus' link='https://www.themailshark.com/products/menus/' />
            <NavLink label='Brochures' link='https://www.themailshark.com/products/brochures/' />
            <NavLink label='Letters' link='https://www.themailshark.com/products/letters/' />
        </Dropdown>
        <Dropdown label='Direct Mail Services' link='https://www.themailshark.com/direct-mailing-services/'>
            <NavLink label='Our Strategy' link='https://www.themailshark.com/our-strategy/' />
            <NavLink label='Mailing Lists' link='https://www.themailshark.com/direct-mailing-services/mailing-lists/' />
            <NavLink label='Every Door Direct Mail' link='https://www.themailshark.com/direct-mailing-services/every-door-direct-mail/' />
            <NavLink label='Design' link='https://www.themailshark.com/design-services/' />
            <NavLink label='Print' link='https://www.themailshark.com/printing-services/' />
        </Dropdown>
        <DrawerLink label='Resources' link='https://www.themailshark.com/resources/' />
    </LinkWrapper>
)

export default function Drawer({isOpen}) {
    return (
        <Nav isOpen={isOpen}>
            <LogoWrapper>
                <img src={logo} alt='Mail Shark logo' />
            </LogoWrapper>
            <DrawerLinks />
            <ButtonWrapper>
                <TextButton
                    as='a'
                    href='https://www.themailshark.net/logon.aspx?ReturnUrl=%2f'
                    target='_blank'
                    rel="noopener noreferrer"
                    white
                >
                    Log in
                </TextButton>
                <ContainedButton
                    as='a'
                    href='https://www.themailshark.com/get-a-quote/'
                >
                    Get a quote
                </ContainedButton>
            </ButtonWrapper>
        </Nav>
    )
}

const Nav = styled.nav`
    z-index: 12;
    position: fixed;
    top: 0;
    background: ${colors.p[900]};
    width: calc(100% - 3.5rem);
    max-width: 25rem;
    height: 100vh;
    padding: 2rem;
    overflow: auto;
    transition: left .2s;
    display: flex;
    flex-direction: column;
    left: ${props => props.isOpen ? '0' : '-25rem'};
    box-shadow: ${props => props.isOpen ? `6px 0 8px ${colors.gray[30]}` : 'none'};
    a{
        color: white;
    }
`

const LogoWrapper = styled.div`
    width: 100%;
    max-width: 10rem;
    margin-bottom: 2rem;
    img{
        width: 100%;
    }
`

const ButtonWrapper = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 2rem;
    a:first-child{
        margin-bottom: .5rem;
    }
`

const LinkWrapper = styled.div`
    a{
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 3rem;
        flex-grow: 1;
    }
`

const MainLinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${colors.p[800]};
    a{
        font-size: 1rem;
        font-weight: 700;
    }
    button{  
        color: white;
    }
    button:hover {
        background: ${colors.p[800]};
    }
`

const DropdownButton = styled(IconButton)`
    transform: ${props => props.flipped ? 'rotate(180deg)' : 'none'};
`

const DropdownContent = styled.div`
    a{
        border-bottom: 1px solid ${colors.p[800]};
        padding-left: 1.5rem;
    }
`