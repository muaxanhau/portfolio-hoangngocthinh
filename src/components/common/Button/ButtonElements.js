import styled from 'styled-components'
import Color from '../../../constants/Color'

export const ButtonC = styled.button`
  position: relative;
  padding: 0.8rem 1.2rem;
  font-weight: 700;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  color: ${props => (props.isNightMode ? Color.color6 : Color.color7)};
  background: ${props => (props.isNightMode ? Color.color11 : Color.color2)};

  &:before {
    content: '';
    position: absolute;
    width: 0.3rem;
    height: 80%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: ${Color.color4};
    transition: 0.2s;
    opacity: 0;
  }

  &:hover {
    color: ${Color.color5};
    ${props => (!props.isNightMode ? 'background: ' + Color.color1 : '')};

    &:before {
      opacity: 1;
    }
  }

  &:focus {
    outline: none;
  }
`
