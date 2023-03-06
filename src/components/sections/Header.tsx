import React from 'react'
import { useQuery } from '@apollo/client'

//queries
import { NAVIGATION_QUERY } from '../../graphql'

//types
import { INavigationData } from '../../types'

//assets
import logo from '/src/assets/images/logo.png'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const { data } = useQuery<INavigationData>(NAVIGATION_QUERY)

  const renderNavigation = () => {
    return data?.allNavigationItems?.map((item) => (
      <div
        className={'cursor-pointer hover:(underline text-gray-400)'}
        key={item.id}
      >
        {item.text}
      </div>
    ))
  }

  return (
    <section className={'py-7.4 border-b-1 border-t-1 border-gray-600'}>
      <div className={'mx-93.75 flex space-x-45 items-center justify-between'}>
        <img src={logo} />
        <div className={'flex text-white space-x-8 whitespace-nowrap'}>{renderNavigation()}</div>
      </div>
    </section>
  )
}

export default Header
