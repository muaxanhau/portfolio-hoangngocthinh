import { css } from 'styled-components'
import Layout from './../../../constants/Layout'
import Color from './../../../constants/Color'

export const GridWrapper = css`
  width: 100%;
  transition: 0.2s;
  display: grid;
  grid-template-columns: repeat(var(--defaultNumberColumn, 3), 1fr);
  gap: var(--gap, 1rem);

  @media screen and (max-width: ${Layout.mediumWidthDevice +
      (window.innerWidth * Layout.NavbarWidth) / 100}px) {
    grid-template-columns: repeat(
      ${props =>
        props.isMenuOpen
          ? 'var(--mediumNumberColumn, 2)'
          : 'var(--defaultNumberColumn, 3)'},
      1fr
    );
  }

  @media screen and (max-width: ${Layout.mediumWidthDevice}px) {
    grid-template-columns: repeat(var(--mediumNumberColumn, 2), 1fr);
  }

  @media screen and (max-width: ${Layout.smallWidthDevice +
      (window.innerWidth * Layout.NavbarWidth) / 100}px) {
    grid-template-columns: repeat(
      ${props =>
        props.isMenuOpen
          ? 'var(--smallNumberColumn, 1)'
          : 'var(--mediumNumberColumn, 2)'},
      1fr
    );
  }

  @media screen and (max-width: ${Layout.smallWidthDevice}px) {
    grid-template-columns: repeat(var(--smallNumberColumn, 1), 1fr);
  }
`
export const InputStyle = css`
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
