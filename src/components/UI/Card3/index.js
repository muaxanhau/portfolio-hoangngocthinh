import React, { useMemo } from 'react'
import {
  Card3Container,
  TopContent,
  AuthorContainer,
  ImageWrapper,
  ContentWrapper,
  TagWrapper
} from './Card3Elements'
import Title from './../../Title/index'
import Color from './../../../constants/Color'
import useGlobalStates from './../../../store/globalStates/useGlobalStates'

const Card3 = props => {
  const { state } = useGlobalStates()

  const image = useMemo(
    () => props.image && <ImageWrapper src={props.image} />,
    [props.image]
  )
  const content = useMemo(
    () => props.content && <ContentWrapper>{props.content}</ContentWrapper>,
    [props.content]
  )
  const author = useMemo(
    () =>
      props.author && (
        <Title
          size='size-s'
          colorLightMode={Color.color9}
          colorNightMode={Color.color7}
        >
          {props.author}
        </Title>
      ),
    [props.author]
  )
  const tag = useMemo(() => props.tag && <TagWrapper>{props.tag}</TagWrapper>, [
    props.tag
  ])
  return (
    <Card3Container isNightMode={state.isNightMode}>
      <TopContent>
        {image}
        {content}
      </TopContent>
      <AuthorContainer isNightMode={state.isNightMode}>
        {author}
        {tag}
      </AuthorContainer>
    </Card3Container>
  )
}

export default Card3
