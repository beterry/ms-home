import React, { Component } from 'react'
import styled from 'styled-components'

//brand colors
import colors from '../styles/colors'

//import icons
import logo from '../images/logo.svg'
import {MdArrowDropDown, MdMenu} from 'react-icons/md'

//import components
import Margins from '../layout/margins'
import Drawer from '../components/nav-drawer'
import {ContainedButton, TextButton, IconButton} from '../components/ms-buttons'

const NavLink = ({label, link}) => (
    <a href={link}>{label}</a>
)

const Dropdown = ({label, link, children}) => (
    <DropdownMain>
        <NavLink label={label} link={link} />
        <MdArrowDropDown size='1.5rem'/>
        <DropdownContent>
            {children}
        </DropdownContent>
    </DropdownMain>
)

const TopLinks = () => (
    <Links>
        <NavLink label='About Us' link='https://www.themailshark.com/about/' />
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
            <NavLink label='Every Door Direct Mail®' link='https://www.themailshark.com/direct-mailing-services/every-door-direct-mail/' />
            <NavLink label='Design' link='https://www.themailshark.com/design-services/' />
            <NavLink label='Print' link='https://www.themailshark.com/printing-services/' />
        </Dropdown>
        <NavLink label='Resources' link='https://www.themailshark.com/resources/' />
    </Links>
)

export default class TopBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            drawerOpen: false,
            goingUp: true,
            atTop: true,
            currentPos: 0
        }
        this.toggleDrawer = this.toggleDrawer.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }

    toggleDrawer() {
        this.setState({drawerOpen: !this.state.drawerOpen})
    }

    handleScroll() {
        if (window.scrollY <= 5) {
            this.setState({
                currentPos: window.scrollY,
                goingUp: true,
                atTop: true
            })
        } else if(window.scrollY > this.state.currentPos){
            this.setState({
                currentPos: window.scrollY,
                goingUp: false
            })
        } else {
            this.setState({
                currentPos: window.scrollY,
                goingUp: true,
                atTop: false
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        return (
            <>
                <Nav goingUp={this.state.goingUp} atTop={this.state.atTop}>
                    <Margins>
                        <FlexWrapper>
                            <Left>
                                <MenuButton
                                    onClick={this.toggleDrawer}
                                    white
                                >
                                    <MdMenu size='1.5rem' />
                                </MenuButton>
                                <Logo src={logo} alt='Mail Shark logo' />
                                <TopLinks />
                            </Left>
                            <Right>
                                <LoginButton
                                    as='a'
                                    href='https://www.themailshark.net/logon.aspx?ReturnUrl=%2f'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    white
                                >
                                    Log in
                                </LoginButton>
                                <QuoteButton
                                    as='a'
                                    href='https://www.themailshark.com/get-a-quote/'
                                >
                                    Get a quote
                                </QuoteButton>
                            </Right>
                        </FlexWrapper>
                    </Margins>
                </Nav>
                {this.state.drawerOpen ? <Underlay onClick={this.toggleDrawer}/> : null}
                <Drawer isOpen={this.state.drawerOpen} />
            </>
        )
    }
}

const Nav = styled.nav`
    background: ${props => props.atTop ? 'none' : colors.p[900]};
    min-height: 4rem;
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    z-index: 10;
    transition: all .4s;
    top: ${props => props.goingUp ? '0' : '-4rem'};
    box-shadow: ${props => props.goingUp && !props.atTop ? `0 2px 3px ${colors.gray[20]}` : null};
`

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        color: white;
        min-height: 4rem;
    }
    a:hover{
        color: ${colors.c[600]};
    }
`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        margin-right: .5rem;
    }
`

const Links = styled.div`
    display: none;
    @media screen and (min-width: 64rem){
        display: flex;
        margin-left: 2.5rem;
        & > * {
            margin-right: 2rem;
        }
    }
`

const MenuButton = styled(IconButton)`
    @media screen and (min-width: 64rem){
        display: none;
    }
`

const QuoteButton = styled(ContainedButton)`
    @media screen and (max-width: 26.25rem){
        display: none;
    }
`

const LoginButton = styled(TextButton)`
    @media screen and (max-width: 67.5rem){
        display: none;
    }
`

const Logo = styled.img`
    margin-left: 1rem;
    @media screen and (min-width: 64rem){
        margin-left: 0;
    }
`

const Underlay = styled.button`
    z-index: 11;
    position: fixed;
    top: 0;
    width: 100%;
    bottom: 0;
    left: 0;
    background: ${colors.gray[80]};
    border: none;
    border-radius: none;
`

const DropdownMain = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    color: white;
    a{
        flex-shrink: 0;
    }
    &:hover{
        color: ${colors.c[600]};
    }
`

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background: ${colors.p[900]};
    left: -1rem;
    top: 90%;
    padding: .5rem 0;
    min-width: 13rem;
    border-radius: .25rem;
    box-shadow: 0px 0px 3px ${colors.gray[20]};
    a{
        min-height: auto;
        padding: 1rem 1rem;
        border-bottom: 1px solid ${colors.c.opacity[20]};
    }
    a:hover{
        background: ${colors.c.opacity[20]};
        border-bottom: none;
    }
    a:last-child{
        border-bottom: none;
    }
    ${DropdownMain}:hover & {
        display: block;
    }
`