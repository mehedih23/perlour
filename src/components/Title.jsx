import React from 'react'
import styled from 'styled-components'

const Title = ({value}) => {
  return (
    <Div>
        <h1>{value}</h1>
    </Div>
  )
}

const Div = styled.div`
position: relative;
    h1{
        position: absolute;
        transform: translateX(-30%) translateY(20vw) rotate(-90deg);
        font-size: 7rem;
        font-weight: 400;
        color: var(--secondary-color);
        text-transform: uppercase;
    }
`


export default Title