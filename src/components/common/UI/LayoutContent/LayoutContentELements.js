import styled from 'styled-components'
import Color from './../../../../constants/Color'

export const LayoutContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

export const TitleWrapper = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 65%;
    height: 2px;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    background: ${Color.color4};
  }
`

export const Intro = styled.p`
  max-width: 80%;
  text-align: center;
  font-size: 110%;
`

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
