import React, { useMemo } from 'react'
import { ButtonC } from './ButtonElements'
import useGlobalStates from '../../store/globalStates/useGlobalStates'

const Button = props => {
  const { state } = useGlobalStates()
  const title = useMemo(() => props.title, [props.title])

  return <ButtonC isNightMode={state.isNightMode}>{title}</ButtonC>
}

export default Button
