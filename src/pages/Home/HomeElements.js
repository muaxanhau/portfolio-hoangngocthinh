import styled from 'styled-components'
import Layout from './../../constants/Layout'
import Color from './../../constants/Color'
import { GridWrapper } from './../../components/common/UI/StyledCss'

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
`

export const ContentContainer = styled.div`
  width: 90%;
`

export const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  height: calc(100vh - ${Layout.HeaderHeight}px);
  min-height: ${Layout.minHeightDevice - Layout.HeaderHeight}px;
`

export const Avatar = styled.img`
  width: 275px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
`

export const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

export const SocialNetwork = styled.div`
  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
`

export const IconButton = styled.button`
  width: 30px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  transition: 0.2s;
  color: ${props => (props.isNightMode ? Color.color7 : Color.color9)};
  background: ${props => (props.isNightMode ? Color.color11 : Color.color8)};

  &:hover {
    color: ${Color.color5};
    background: ${props => (props.isNightMode ? Color.color4 : Color.color3)};
  }

  &:focus {
    outline: none;
  }
`

export const AboutContentWrapper = styled.div`
  --gap: 2rem;
  --defaultNumberColumn: 2;
  ${GridWrapper}
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const AboutImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
`

export const Span = styled.span`
  font-size: 120%;
  font-weight: 600;
  color: ${props => (props.isNightMode ? Color.color5 : Color.color4)};
`

export const ServicesContentWrapper = styled.div`
  ${GridWrapper}
`
export const ProjectContentWrapper = styled.div`
  ${GridWrapper}
`

export const TestimonialsContentWrapper = styled.div`
  --defaultNumberColumn: 2;
  ${GridWrapper}
`

export const ContactContentWrapper = styled.div`
  width: 100%;
  max-width: ${Layout.smallWidthDevice}px;
`
