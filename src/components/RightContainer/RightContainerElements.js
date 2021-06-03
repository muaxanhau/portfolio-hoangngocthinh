import styled from 'styled-components'
import Color from '../../constants/Color'
import Layout from '../../constants/Layout'

export const Container = styled.div`
  padding-top: calc(${Layout.HeaderHeight} * 1px);
  transition: width 0.5s, background 0.2s;
  width: calc(
    100% - ${props => (props.isMinimize ? Layout.NavbarWidth : '0')}%
  );
  min-height: 100vh;
  color: ${props => (props.isNightMode ? Color.color7 : Color.color9)};
  background: ${props => (props.isNightMode ? Color.color12 : Color.color7)};
  overflow: hidden;

  @media screen and (max-width: ${Layout.smallWidthDevice}px) {
    transition: 0s;
    width: 100%;
  }
`
