import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
    gap: 2rem;
`

export default function grid({columns, children}) {
    return (
        <Grid columns={columns}>
            {children}
        </Grid>
    )
}
