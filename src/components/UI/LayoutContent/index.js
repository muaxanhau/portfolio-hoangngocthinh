import React, { useMemo } from 'react'
import Title from './../../Title/index'
import Color from './../../../constants/Color'
import {
  LayoutContentContainer,
  TitleContainer,
  TitleWrapper,
  Intro,
  ContentContainer
} from './LayoutContentELements'

const LayoutContent = props => {
  const title = useMemo(() => props.title, [props.title])
  const intro = useMemo(() => props.intro && <Intro>{props.intro}</Intro>, [
    props.intro
  ])
  const children = useMemo(() => props.children, [props.children])
  return (
    <LayoutContentContainer>
      <TitleContainer>
        <TitleWrapper>
          <Title
            size='size-m'
            colorLightMode={Color.color9}
            colorNightMode={Color.color7}
          >
            {title}
          </Title>
        </TitleWrapper>
        {intro}
      </TitleContainer>
      <ContentContainer>{children}</ContentContainer>
    </LayoutContentContainer>
  )
}

export default LayoutContent
