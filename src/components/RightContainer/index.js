import React, { useMemo } from 'react'
import { Container } from './RightContainerElements'
import { useSwipeable } from 'react-swipeable'
import useGlobalStates from './../../store/globalStates/useGlobalStates'

const RightContainer = props => {
  const { state, setState } = useGlobalStates()
  const children = useMemo(() => props.children, [props.children])
  const swipeHandlers = useSwipeable({
    onSwipedRight: e => {
      !state.isMenuOpen && setState.setToggleMenu()
    }
  })

  return (
    <Container
      {...swipeHandlers}
      isNightMode={state.isNightMode}
      isMinimize={state.isMenuOpen}
    >
      {children}
    </Container>
  )
}

export default RightContainer
