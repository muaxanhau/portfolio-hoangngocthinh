import { css } from 'styled-components'
import Layout from './../../constants/Layout'

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
