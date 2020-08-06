import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

const Text = styled.div`
    background: ${props => props.blue ? colors.c[600] : colors.gray[10]};
    color: ${props => props.blue ? 'white' : 'black'};
    border-radius: 1rem;
    padding: .5rem 1rem;
    margin: .5rem 0;
    max-width: 80%;
    align-self: ${props => props.blue ? 'flex-end' : 'flex-start'};
    position: relative;
    span{
        font-size: 1.5rem;
    }
`

export default function text(props) {
    return (
        <Text {...props}>
            <p>{props.children}</p>
        </Text>
    )
}
