import React, { useMemo } from 'react'
import Title from './../Title/index'
import Color from './../../constants/Color'

import {
  BackdropContainer,
  BackdropC,
  TextContainer,
  Content
} from './BackdropElement'

const Backdrop = props => {
  const title = useMemo(() => props.title, [props.title])
  const content = useMemo(() => props.content, [props.content])

  return (
    <BackdropContainer>
      <BackdropC />
      <TextContainer>
        <Title size='size-l' color={Color.color5}>
          {title}
        </Title>
        {content && <Content>{content}</Content>}
      </TextContainer>
    </BackdropContainer>
  )
}

export default Backdrop
