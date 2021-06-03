import styled from 'styled-components'
import Color from './../../../constants/Color'

export const Card1Container = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 7 / 8;
  background-color: ${props =>
    props.isNightMode ? Color.color11 : Color.color6};
  ${props => (props.isNightMode ? '' : 'border: 1px solid ' + Color.color8)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 3rem 1.5rem;
  transform-origin: bottom;
  transition: transform 0.2s;

  &:hover {
    transition: background 0.2s;
    background-color: ${props =>
      props.isNightMode ? Color.color4 : Color.color5};
    transform: scale(1.025);
  }
`
export const IconContainer = styled.div`
  width: 55px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isNightMode ? Color.color5 : Color.color4)};
`
export const ContentContainer = styled.div`
  text-align: center;
`
