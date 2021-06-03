import styled from 'styled-components'
import Color from './../../constants/Color'
import Layout from './../../constants/Layout'
import { Link as LinkS } from 'react-scroll'

export const NavbarContainer = styled.div`
  z-index: 100;
  position: fixed;
  top: 0px;
  left: 0;
  width: ${props => (props.isOpen ? Layout.NavbarWidth : '0')}%;
  height: 100vh;
  min-height: ${Layout.minHeightDevice}px;
  background: ${props => (props.isNightMode ? Color.color11 : Color.color9)};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: width 0.5s, height 0s, background 0.2s, border 0.2s;
  box-sizing: border-box;
  ${props =>
    props.isOpen && props.isNightMode
      ? 'border-right: 1px solid ' + Color.color8
      : ''};

  @media screen and (max-width: ${Layout.smallWidthDevice}px) {
    top: ${Layout.HeaderHeight}px;
    width: ${({ isOpen }) => (isOpen ? '100%' : 0)};
    height: calc(100vh - ${Layout.HeaderHeight} * 1px);
    border: none;
    opacity: 0.9;
  }
`

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const NavItem = styled(LinkS)`
  color: ${Color.color8};
  list-style: none;
  font-size: 1.1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0.2rem;
    height: 100%;
    transition: 0.2s;
    transform: translateX(-200%);
    background: ${Color.color4};
    opacity: 0;
  }

  &:hover {
    color: ${Color.color6};
  }

  &.active {
    color: ${Color.color5};
    &:before {
      opacity: 1;
    }
  }
`
export const ChangeMode = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  width: max-content;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const ButtonIcon = styled.button`
  height: 30px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  color: ${props => (props.isNightMode ? Color.color11 : Color.color9)};
  background-color: ${props =>
    props.isNightMode ? Color.color6 : Color.color8};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${props => (props.isNightMode ? Color.color9 : Color.color4)};
    ${props => (props.isNightMode ? 'background-color: ' + Color.color5 : '')};
  }

  &:focus {
    outline: none;
  }
`
export const ButtonTitle = styled.p`
  font-size: 70%;
  font-weight: 700;
  color: ${props => (props.isNightMode ? Color.color6 : Color.color8)};
`
