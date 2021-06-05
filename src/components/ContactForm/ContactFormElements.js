import styled from 'styled-components'
import { GridWrapper, InputStyle } from './../../components/UI/StyledCss'
import Color from './../../constants/Color'
import Layout from './../../constants/Layout'

export const FormContainer = styled.form`
  --defaultNumberColumn: 2;
  ${GridWrapper}
`

export const InputWrapperSpan1 = styled.div`
  width: 100%;
  position: relative;
`

export const InputWrapperSpan2 = styled(InputWrapperSpan1)`
  display: flex;
  justify-content: center;
  grid-column: span 2;

  @media screen and (max-width: ${Layout.smallWidthDevice +
      (window.innerWidth * Layout.NavbarWidth) / 100}px) {
    grid-column: ${props => (props.isMenuOpen ? 'initial' : 'span 2')};
  }

  @media screen and (max-width: ${Layout.smallWidthDevice}px) {
    grid-column: initial;
  }
`

export const RequiredIconWrapper = styled.div`
  position: absolute;
  width: 20px;
  aspect-ratio: 1;
  top: 5px;
  right: 5px;
  color: ${props => (props.isNightMode ? Color.color5 : Color.color4)};
`

export const Textarea = styled.textarea`
  ${InputStyle}
  resize: none;
`
export const SubmitButton = styled.button`
  padding: 1rem 2rem;
`
