import styled from 'styled-components'
import Color from './../../constants/Color'
import Layout from './../../constants/Layout'

export const HeaderContainer = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  width: calc(
    100% - ${props => (props.isMinimize ? Layout.NavbarWidth : '0')}%
  );
  height: calc(${Layout.HeaderHeight} * 1px);
  padding: 0 20px;
  color: ${props => (props.isNightMode ? Color.color6 : Color.color9)};
  background-color: ${props =>
    props.isNightMode ? Color.color11 : Color.color8};
  @media screen and (max-width: ${Layout.smallWidthDevice}px) {
    width: 100%;
    transition: 0s;
  }
`
export const Title = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 900;
`

export const ButtonMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: inherit;
  border: none;
  height: 70%;
  aspect-ratio: 1;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: ${Color.color4};
  }
  &:focus {
    outline: none;
  }
`
