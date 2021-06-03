import React, { useMemo } from 'react'
import { Card2Container, ImageWrapper, TitleContainer } from './Card2Elements'
import Title from './../../Title/index'
import Color from './../../../constants/Color'
import useGlobalStates from './../../../store/globalStates/useGlobalStates'

const Card2 = props => {
  const { state } = useGlobalStates()

  const image = useMemo(
    () => props.image && <ImageWrapper src={props.image} />,
    [props.image]
  )
  const title = useMemo(
    () =>
      props.title && (
        <TitleContainer>
          <Title
            size='size-s'
            colorLightMode={Color.color9}
            colorNightMode={Color.color7}
          >
            {props.title}
          </Title>
        </TitleContainer>
      ),
    [props.title]
  )
  return (
    <Card2Container isNightMode={state.isNightMode}>
      {image}
      {title}
    </Card2Container>
  )
}

export default Card2
