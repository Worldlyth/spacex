import React from 'react'

//components
import Header from './sections/Header'

interface IPageProps {
  children: JSX.Element | JSX.Element[]
  background: string
}

const Page: React.FC<IPageProps> = (props) => {
  const { children, background } = props

  return (
    <section style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div>{children}</div>
    </section>
  )
}

export default Page
