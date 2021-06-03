import React, { useMemo } from 'react'
import { Container } from './MainContainerElements'

const MainContainer = props => {
  const children = useMemo(() => props.children, [props.children])
  return <Container>{children}</Container>
}

export default MainContainer
