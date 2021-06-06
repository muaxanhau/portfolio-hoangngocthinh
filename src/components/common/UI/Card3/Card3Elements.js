import styled from 'styled-components'
import Color from './../../../../constants/Color'

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ImageWrapper = styled.img`
  width: 80px;
  aspect-ratio: 1;
  object-fit: cover;
`

export const ContentWrapper = styled.p`
  font-style: italic;
`

export const AuthorContainer = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 1rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 3px;
    background-color: ${props =>
      props.isNightMode ? Color.color5 : Color.color4};
  }
`

export const TagWrapper = styled.p`
  font-size: 80%;
  opacity: 0.6;
`

export const Card3Container = styled.div`
  width: 100%;
  aspect-ratio: 13 / 9;

  background-color: ${props =>
    props.isNightMode ? Color.color11 : Color.color6};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  transform-origin: bottom;
  transition: transform 0.2s;

  &:hover {
    transition: background 0.2s;
    background-color: ${props =>
      props.isNightMode ? Color.color4 : Color.color5};
    transform: scale(1.025);
  }
`
