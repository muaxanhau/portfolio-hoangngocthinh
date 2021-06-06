import styled from 'styled-components'
import Color from '../../../constants/Color'

export const BackdropContainer = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
export const BackdropC = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Color.color9};
  opacity: 0.8;
`
export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`
export const Content = styled.p`
  text-align: center;
  color: ${Color.color6};
`
