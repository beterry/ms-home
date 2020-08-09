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
        case '1/2':
          return '3.25rem'
        default:
            return '6.5rem'
    }
  }}
`;

export default Padding;