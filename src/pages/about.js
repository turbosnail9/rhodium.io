import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import ProfileContent from '../components/ProfileContent'

const profileQuery = graphql`
  query ProfileQuery {
    disciplines: allDisciplinesJson {
      edges {
        client: node {
          name
        }
      }
    }
    people: allPeopleJson {
      edges {
        event: node {
          year
          name
          role
        }
      }
    }
    mentions: allMentionsJson {
      edges {
        mention: node {
          name
          url
        }
      }
    }
    articles: allArticlesJson {
      edges {
        article: node {
          name
          url
        }
      }
    }
  }
`

export default ({ location }) =>
  <StaticQuery 
    query={profileQuery}
    render={data => 
      <Layout location={location}>
        <ProfileContent data={data}/>
      </Layout>
    }
  />
