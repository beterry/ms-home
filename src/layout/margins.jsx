import React from 'react'
import styled from 'styled-components'

export default function Margins(props) {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 90%;
    max-width: 100rem;
    margin: 0 auto;
`