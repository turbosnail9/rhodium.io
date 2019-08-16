import React from 'react'
import { ListItem } from '../../style/shared'
import { Wrapper, Name } from './style'

const EventListItem = ({ year, name, role }) =>
  <ListItem>
    <Wrapper>
      <div className="name"><Name>{name}</Name> | <span>{role}</span></div>
      <div className="year">{year}</div>
    </Wrapper>
  </ListItem>

export default EventListItem
