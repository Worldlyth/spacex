import { StructuredTextGraphQlResponse } from "react-datocms/structured-text"

export type NavigationItem = {
  id: string
  text: string
}

export interface INavigationData {
    allNavigationItems: NavigationItem[]
}

export type BenefitsItem = {
  id: string
  content: StructuredTextGraphQlResponse
}

export interface IBenefitsData {
  allBenefits: BenefitsItem[]
}

export interface IButtonData {
  button: {
    text: string
  }
}


