import React, { useCallback } from 'react'
import {
  NavbarContainer,
  Nav,
  NavItem,
  ChangeMode,
  ButtonIcon,
  ButtonTitle
} from './NavbarElements'
import { useSwipeable } from 'react-swipeable'
import { v4 as uuidv4 } from 'uuid'
import { ButtonData } from './NavbarData'
import useGlobalStates from './../../store/globalStates/useGlobalStates'
import Layout from './../../constants/Layout'
import { FaMoon } from 'react-icons/fa'
import { GiBoomerangSun } from 'react-icons/gi'

const Navbar = () => {
  const { state, setState } = useGlobalStates()
  const swipeHandlers = useSwipeable({
    onSwipedLeft: e => setState.setToggleMenu()
  })
  const linkBtnHandler = useCallback(() => {
    window.innerWidth <= Layout.smallWidthDevice && setState.setToggleMenu()
  }, [setState])
  const changeModeBtnHandler = useCallback(() => {
    setState.setToggleNightMode()
  }, [setState])

  return (
    <NavbarContainer
      {...swipeHandlers}
      isOpen={state.isMenuOpen}
      isNightMode={state.isNightMode}
    >
      <Nav>
        {ButtonData.map(item => (
          <NavItem
            key={uuidv4()}
            to={item.toValue}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
            offset={-Layout.HeaderHeight}
            onClick={linkBtnHandler}
          >
            {item.content}
          </NavItem>
        ))}
      </Nav>
      <ChangeMode>
        <ButtonIcon
          isNightMode={state.isNightMode}
          onClick={changeModeBtnHandler}
        >
          {state.isNightMode ? (
            <GiBoomerangSun size='60%' />
          ) : (
            <FaMoon size='60%' />
          )}
        </ButtonIcon>
        <ButtonTitle isNightMode={state.isNightMode}>
          Switch To {state.isNightMode ? 'Light' : 'Night'} Mode
        </ButtonTitle>
      </ChangeMode>
    </NavbarContainer>
  )
}

export default Navbar
