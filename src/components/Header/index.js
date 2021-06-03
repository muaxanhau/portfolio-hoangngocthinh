import React, { useMemo, useCallback } from 'react'
import { HeaderContainer, ButtonMenu } from './HeaderElements'
import Title from './../Title/index'
import { FiMenu } from 'react-icons/fi'
import { animateScroll as scroll } from 'react-scroll'
import useGlobalStates from './../../store/globalStates/useGlobalStates'
import Layout from '../../constants/Layout'
import Color from '../../constants/Color'

const Header = props => {
  const { state, setState } = useGlobalStates()
  const isMenuOpen = useMemo(() => state.isMenuOpen, [state.isMenuOpen])
  const isNightMode = useMemo(() => state.isNightMode, [state.isNightMode])
  const title = useMemo(() => props.title, [props.title])

  const btnTitleHandler = useCallback(() => {
    if (window.innerWidth <= Layout.smallWidthDevice && isMenuOpen) {
      setState.setToggleMenu()
    }
    scroll.scrollToTop()
  }, [isMenuOpen, setState])
  const btnMenuHandler = useCallback(() => {
    setState.setToggleMenu()
  }, [setState])

  return (
    <HeaderContainer isMinimize={isMenuOpen} isNightMode={isNightMode}>
      <div onClick={btnTitleHandler} style={{ cursor: 'pointer' }}>
        <Title
          size='size-l'
          colorLightMode={Color.color9}
          colorNightMode={Color.color7}
        >
          {title}
        </Title>
      </div>
      <ButtonMenu onClick={btnMenuHandler}>
        <FiMenu size='100%' />
      </ButtonMenu>
    </HeaderContainer>
  )
}

export default Header
