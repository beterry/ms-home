import styled from 'styled-components'

const Padding = styled.div`
  height: ${ props => {
    switch(props.size){
        case 's': 
            return '1rem'
        case 'm': 
            return '2.5rem'
        case 'l': 
            return '4rem'
        default:
            return '6.5rem'
    }
  }};
  @media screen and (max-width: 37.5rem){
    height: ${ props => {
    switch(props.size){
        case 's': 
            return '.75rem'
        case 'm': 
            return '2rem'
        case 'l': 
            return '3rem'
        default:
            return '4rem'
    }
  }};
  }
`;

export default Padding;