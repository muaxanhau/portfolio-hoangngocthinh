import styled, { css } from 'styled-components'
import { GridWrapper } from './../../components/UI/StyledCss'
import Color from './../../constants/Color'
import Layout from './../../constants/Layout'

const inputStyle = css`
  --text-color: ${props => (props.isNightMode ? Color.color6 : Color.color9)};
  --background-color: ${props =>
    props.isNightMode ? Color.color11 : Color.color6};
  --shadow-color: 0 0 2px
    ${props => (props.isNightMode ? Color.color8 : Color.color12)};
  width: 100%;
  color: var(--text-color);
  background-color: var(--background-color);
  box-shadow: var(--shadow-color);
  transition: 0.2s;
  border: none;
  font-size: 110%;
  padding: 0.7rem 0.5rem;

  &::placeholder {
    opacity: 0.7;
    color: gray;
  }

  &:focus {
    outline: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    --autofill-background: 0 0 0 50px var(--background-color);
    box-shadow: var(--autofill-background) inset, var(--shadow-color);
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: var(--text-color);
  }
`

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

export const RequiredIcon = styled.div`
  position: absolute;
  width: 20px;
  aspect-ratio: 1;
  top: 5px;
  right: 5px;
  color: ${props => (props.isNightMode ? Color.color5 : Color.color4)};
`

export const Input = styled.input`
  ${inputStyle}
`

export const Textarea = styled.textarea`
  ${inputStyle}
  resize: none;
`
export const SubmitButton = styled.button`
  padding: 1rem 2rem;
`
