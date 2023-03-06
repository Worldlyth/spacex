import React from 'react'
import { useQuery } from '@apollo/client'

//components
import BenefitsCard from './components/BenefitsCard'

//types
import { IBenefitsData } from '../../types'

//queries
import { BENEFITS_QUERY } from '../../graphql'

interface IBenefitsProps {}

const Benefits: React.FC<IBenefitsProps> = () => {
  const { data } = useQuery<IBenefitsData>(BENEFITS_QUERY)

  return (
    <div
      className={
        'text-white grid grid-cols-2 w-max justify-end ml-auto gap-2'
      }
    >
      {data && (
        <>
          <BenefitsCard
            data={data?.allBenefits[0].content}
            variant={'bottom-right'}
          />
          <BenefitsCard
            data={data?.allBenefits[1].content}
            variant={'bottom-left'}
          />
          <BenefitsCard
            data={data?.allBenefits[2].content}
            variant={'top-right'}
          />
          <BenefitsCard
            data={data?.allBenefits[3].content}
            variant={'top-left'}
          />
        </>
      )}
    </div>
  )
}

export default Benefits
