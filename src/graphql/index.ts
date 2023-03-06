import { gql } from '@apollo/client'

export const NAVIGATION_QUERY = gql`
  query Navigation {
    allNavigationItems(orderBy: _createdAt_ASC) {
      id
      text
    }
  }
`

export const BENEFITS_QUERY = gql`
  query Benefits {
    allBenefits(orderBy: _firstPublishedAt_ASC) {
      id
      content {
        value
      }
    }
  }
`

export const BUTTON_QUERY = gql`
  query Button {
    button {
      text
    }
  }
`
