import styled from 'styled-components'

const sizeArr = {}
sizeArr['size-s'] = 1.1
sizeArr['size-m'] = 1.5
sizeArr['size-l'] = 1.9

export const TitleContainer = styled.div`
  --color-light-mode: ${props =>
    props.colorLightMode ? props.colorLightMode : 'black'};
  --color-night-mode: ${props =>
    props.colorNightMode ? props.colorNightMode : 'white'};
  font-size: ${props => sizeArr[props.size]}rem;
  text-transform: uppercase;
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
  color: ${props =>
    props.isNightMode ? 'var(--color-night-mode)' : 'var(--color-light-mode)'};
`
