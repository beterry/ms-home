import React from 'react'
import styled from 'styled-components'

//brand colors
import colors from '../styles/colors'

//import components
import Heading from '../components/section-heading'
import Margins from '../layout/margins'
import {TextButton, IconButton} from '../components/ms-buttons'

//import icons
import plus from '../images/plus.svg'
import minus from '../images/minus.svg'
import {MdExpandMore} from 'react-icons/md'

class Service extends React.Component {
    constructor(props){
        super(props)
        this.state = {showList: true}
        this.toggleList = this.toggleList.bind(this)
    }

    toggleList() {
        this.setState({showList: !this.state.showList})
    }

    componentDidMount() {
        if (window.innerWidth < 600){
            this.setState({showList: false})
        }
    }

    render() {
        const {title, copy, includes=[], excludes=[], link} = this.props
        return (
            <Card>
                <TextWrapper>
                    <Title>{title}</Title>
                    <Copy>{copy}</Copy>
                </TextWrapper>
                {this.state.showList ?
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
                    </ListWrapper> :
                    null
                }
                <ButtonWrapper>
                    <ShowMoreButton onClick={this.toggleList} flipped={this.state.showList}><MdExpandMore size='1.5rem' /></ShowMoreButton>
                    <TextButton as='a' href={link}>Learn More</TextButton>
                </ButtonWrapper>
            </Card>
        )
    }
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
                        link='https://www.themailshark.com/direct-mailing-services/mailing-lists/'
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
                        link='https://www.themailshark.com/direct-mailing-services/every-door-direct-mail/'
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
                        link='https://www.themailshark.com/printing-services/'
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
`

const TextWrapper = styled.div`
    flex-grow: 1;
`

const Title = styled.h3`
    margin-bottom: 1rem;
`

const Copy = styled.p`
`

const ListWrapper = styled.div`
    margin-top: 2rem;
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

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
`

const ShowMoreButton = styled(IconButton)`
    transform: ${props => props.flipped ? 'rotate(180deg)' : 'none'};
    @media screen and (min-width: 37.5rem){
        display: none;
    }
`