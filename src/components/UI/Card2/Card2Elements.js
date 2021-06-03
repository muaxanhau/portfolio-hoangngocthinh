import styled from 'styled-components'
import Color from './../../../constants/Color'

const transitionDuration = '0.5s'

export const ImageWrapper = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${transitionDuration};
  z-index: 2;
`

export const TitleContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 3rem 1.5rem;
  text-align: center;
  transition: ${transitionDuration};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const Card2Container = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 7 / 8;
  overflow: hidden;
  background-color: ${props =>
    props.isNightMode ? Color.color4 : Color.color5};

  &:hover {
    ${ImageWrapper} {
      bottom: 100%;
    }

    ${TitleContainer} {
      top: 0;
    }
  }
`
