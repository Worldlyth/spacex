import React from 'react'
import {
  StructuredText,
  StructuredTextGraphQlResponse,
} from 'react-datocms/structured-text'
import cls from 'classnames'

//assets
import corner from '/src/assets/images/corner.png'

interface IBenefitsCardProps {
  data: StructuredTextGraphQlResponse
  variant: string
}

const BenefitsCard: React.FC<IBenefitsCardProps> = (props) => {
  const { data, variant } = props

  const setVariant = () => {
    switch (variant) {
      case 'bottom-right':
        return 'bottom-0 right-0'
      case 'bottom-left':
        return 'bottom-0 left-0 transform rotate-90'
      case 'top-right':
        return 'top-0 right-0 transform -rotate-90'
      case 'top-left':
        return 'top-0 left-0 transform -rotate-180'
    }
  }

  return (
    <div
      className={'text-center w-50 h-50 flex flex-col justify-center relative'}
    >
      <img
        src={corner}
        className={cls('absolute opacity-40 hover:opacity-100 transition-opacity duration-200', setVariant())}
      />
      <StructuredText data={data} />
    </div>
  )
}

export default BenefitsCard
