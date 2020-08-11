import React from 'react'

class DrawerDropdown extends Component{
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
            <div className={styles.drawer_link}>
                <a href={this.props.link}>{this.props.label}</a>
                <button
                    className={`button_icon ${this.state.isOpen ? styles.flipped : null}`}
                    onClick={this.toggleOpen}
                >
                    <MdArrowDropDown size='1.5rem'/>
                </button>
            </div>
            <div className={styles.drawer_dropdown}>
                {this.state.isOpen ? 
                    this.props.children :
                    null
                }
            </div>
            </>
        )
    }
}

const DrawerLink = ({label, link}) => (
    <div className={styles.drawer_link}>
        <a href={link}>{label}</a>
    </div>
    
) 

const DrawerLinks = () => (
    <div className={styles.drawer_links}>
        <DrawerLink label='About Us' link='https://www.themailshark.com/about/' />
        <DrawerDropdown label='Products & Pricing' link='https://www.themailshark.com/products/'>
            <NavLink label='Postcards' link='https://www.themailshark.com/products/postcards/' />
            <NavLink label='Postcard Magnets' link='https://www.themailshark.com/products/postcard-magnets/' />
            <NavLink label='Scratch-Off Postcards' link='https://www.themailshark.com/products/scratch-off-postcards/' />
            <NavLink label='Plastic Postcards' link='https://www.themailshark.com/products/plastic-postcards/' />
            <NavLink label='Menus' link='https://www.themailshark.com/products/menus/' />
            <NavLink label='Brochures' link='https://www.themailshark.com/products/brochures/' />
            <NavLink label='Letters' link='https://www.themailshark.com/products/letters/' />
        </DrawerDropdown>
        <DrawerDropdown label='Direct Mail Services' link='https://www.themailshark.com/direct-mailing-services/'>
            <NavLink label='Our Strategy' link='https://www.themailshark.com/our-strategy/' />
            <NavLink label='Mailing Lists' link='https://www.themailshark.com/direct-mailing-services/mailing-lists/' />
            <NavLink label='Every Door Direct Mail' link='https://www.themailshark.com/direct-mailing-services/every-door-direct-mail/' />
            <NavLink label='Design' link='https://www.themailshark.com/design-services/' />
            <NavLink label='Print' link='https://www.themailshark.com/printing-services/' />
        </DrawerDropdown>
        <DrawerLink label='Resources' link='https://www.themailshark.com/resources/' />
    </div>
)

export default function Drawer() {
    return (
        <nav className={isOpen ? styles.drawer_open : styles.drawer_closed}>
            <div className={styles.drawer_logo}>
                <img src={logo} alt='Mail Shark logo' />
            </div>
            <DrawerLinks />
            <div className={styles.drawer_login}>
                <a
                    className='button_text'
                    href='https://www.themailshark.net/logon.aspx?ReturnUrl=%2f'
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    Log in
                </a>
                <button className='button_contained vivid'>Get a quote</button>
            </div>
        </nav>
    )
}