import React from 'react'
import ProfileIntroSection from '../ProfileIntroSection'
import ProfileListItem from '../ProfileListItem'
import EventListItem from '../EventListItem'
import Head from '../Head'
import ProfileList from '../ProfileList'
import { META } from '../../utils/constants'
import { ContentWrapper } from '../../style/shared'
import { ListsSection, DisciplinesList } from './style'

export default ({ data }) => {
  const { disciplines, people, mentions, articles } = data
  
  return (
      <ContentWrapper>
        <Head 
          {...META.profile}
          image={META.common.image}
        />
        <ProfileIntroSection 
          content={() =>
            <>            
              <p>We tackle complex technology challenges in insurance, finance, and infrastructure. 
                We are trusted by global systemically important institutions in finding answers to 
                important questions not yet asked.{' '}</p>

                <p>Scroll down to learn more about <a href="https://echelon.fund/" target="_blank" rel="noopener noreferrer">what</a> <a href="http://www.wearhacks.com/" target="_blank" rel="noopener noreferrer">we</a> <a href="https://www.knoxcustody.com/" target="_blank" rel="noopener noreferrer">do</a>.</p>
            </>
          }
        />
        <ListsSection>
          {people.edges.length > 0 && 
            <ProfileList 
              title='People'
              list={() => people.edges.map(({ event }, i) => (
                <EventListItem 
                  key={i}
                  {...event}
                />
              ))}
            />}
          {articles.edges.length > 0 && 
            <ProfileList 
              title='Paradigms'
              list={() => articles.edges.map(({ article }, i) => (
                <ProfileListItem 
                  key={i}
                  {...article}
                />
              ))}
            />}
          {mentions.edges.length > 0 && 
            <ProfileList 
              title='Featured on'
              list={() => mentions.edges.map(({ mention }, i) => (
                <ProfileListItem 
                  key={i}
                  {...mention}
                />
              ))}
            />}
          {disciplines.edges.length > 0 && 
            <DisciplinesList 
              title='Services'
              list={() => disciplines.edges.map(({ client }, i) => (
                <ProfileListItem 
                  key={i}
                  {...client}
                />
              ))}
            />}
        </ListsSection>
      </ContentWrapper>
  )
}
