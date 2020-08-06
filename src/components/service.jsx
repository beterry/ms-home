import React from 'react'
import styled from 'styled-components'

//brand colors
import colors from '../styles/colors'

//import icons
import plus from '../images/plus.svg'
import minus from '../images/minus.svg'

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

export default function service({title, copy, includes=[], excludes=[], link}) {
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
