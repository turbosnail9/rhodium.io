import React from 'react'
import { Wrapper, Title } from './style'

const Intro = props => 
  <Wrapper {...props} >
    <Title>
      Welcome to Rhodium Labs. We are a <span>technology</span> advisory 
      firm based in Toronto, Canada.
    </Title>
  </Wrapper>

export default Intro
