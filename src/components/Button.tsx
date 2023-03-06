import React from 'react'
import { useQuery } from '@apollo/client'
import cls from 'classnames'

//queries
import { BUTTON_QUERY } from '../graphql'

//types
import { IButtonData } from '../types/index'

//assets
import button from '/src/assets/images/button.png'

interface IButtonProps {
  className?: string
}

const Button: React.FC<IButtonProps> = (props) => {
  const { className } = props

  const { data } = useQuery<IButtonData>(BUTTON_QUERY)

  return (
    <div className={cls('text-white font-thin text-14px', className)}>
      {data?.button.text}
    </div>
  )
}

export default Button
