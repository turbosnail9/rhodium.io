import React from 'react'
import { getCurrentYear } from '../../utils/functions'
import { Wrapper, Item } from './style'

const Footer = () =>
  <Wrapper>
    <Item position='left'>
      Made (with love) in {getCurrentYear()}
    </Item>
    <Item position='right'>
      <span>☎️   1.514.817.9099&nbsp;-&nbsp;</span>
      
      <a target="_blank" rel="noopener noreferrer" href='https://github.com/turbosnail9/rhodium.io'>Source code</a>
    </Item>
  </Wrapper>

export default Footer
