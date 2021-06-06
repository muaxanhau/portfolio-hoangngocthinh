import React, { useMemo } from 'react'
import { TitleContainer } from './TitleElements'
import useGlobalStates from './../../../store/globalStates/useGlobalStates'

const Title = props => {
  const { state } = useGlobalStates()
  const size = useMemo(() => props.size, [props.size])
  const colorLightMode = useMemo(() => props.colorLightMode, [
    props.colorLightMode
  ])
  const colorNightMode = useMemo(() => props.colorNightMode, [
    props.colorNightMode
  ])
  const children = useMemo(() => props.children, [props.children])

  return (
    <TitleContainer
      size={size}
      isNightMode={state.isNightMode}
      colorLightMode={colorLightMode}
      colorNightMode={colorNightMode}
    >
      {children}
    </TitleContainer>
  )
}

export default Title
