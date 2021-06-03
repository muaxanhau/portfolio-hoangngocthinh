import React, { useMemo } from 'react'
import {
  Card1Container,
  IconContainer,
  ContentContainer
} from './Card1Elements'
import Title from './../../Title/index'
import Color from './../../../constants/Color'
import useGlobalStates from './../../../store/globalStates/useGlobalStates'

const Card1 = props => {
  const { state } = useGlobalStates()

  const icon = useMemo(
    () =>
      props.icon && (
        <IconContainer isNightMode={state.isNightMode}>
          {props.icon}
        </IconContainer>
      ),
    [props.icon, state.isNightMode]
  )
  const title = props.title && (
    <Title
      size='size-s'
      colorLightMode={Color.color9}
      colorNightMode={Color.color7}
    >
      {props.title}
    </Title>
  )
  const content = props.content && (
    <ContentContainer>{props.content}</ContentContainer>
  )
  return (
    <Card1Container isNightMode={state.isNightMode}>
      {icon}
      {title}
      {content}
    </Card1Container>
  )
}

export default Card1
