import React from 'react'

//components
import Page from './components/Page'
import Benefits from './components/benefits'
import Button from './components/Button'

//assets
import background from '/src/assets/images/background.png'
import travel from '/src/assets/images/travel.png'
import line from '/src/assets/images/line.png'
import button from '/src/assets/images/button.png'

const App = () => {
  return (
    <Page background={background}>
      <section className={'flex justify-center'}>
        <img src={travel} className={'absolute top-53.7 left-94.6'} />
        <img src={button} className={'absolute top-91 left-90'} />
        <Button className={'absolute top-97.5 left-100'} />
        <img src={line} className={'absolute top-100 left-139.2'} />

        <Benefits />
      </section>
    </Page>
  )
}

export default App
