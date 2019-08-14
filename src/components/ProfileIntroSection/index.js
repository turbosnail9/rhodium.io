import React from 'react'
import Intro from '../Intro'
import { Wrapper, InfoWrapper, Content, StyledWeekDistance, StyledImage } from './style'
import { Loader } from '../../style/shared'

const ProfileIntroSection = ({ content }) => 
  <Wrapper>
    <InfoWrapper>
      <Intro fixed={false} />
      <Content>{content()}</Content>
    </InfoWrapper>
    <StyledWeekDistance />
    <StyledImage 
      src="/images/profile/profile.jpg"
      alt="Big Towers Look Menacing"
      loader={({ isLoaded }) => <Loader isLoaded={isLoaded} />}
      sources={[{
        media: 'max-width: 40rem',
        srcset: [
          '/images/profile/profile.jpg 1x',
          '/images/profile/profile.jpg 2x',
          '/images/profile/profile.jpg 3x'
        ]
      },{
        srcset: [
          '/images/profile/profile.jpg 1x',
          '/images/profile/profile.jpg 2x',
          '/images/profile/profile.jpg 3x'
        ]       
      }]}
    />
  </Wrapper>

export default ProfileIntroSection
