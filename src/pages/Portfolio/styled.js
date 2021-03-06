import styled from 'styled-components'
import { device } from '../../config/styled.components'

export const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 10px;
  margin: 0 0 0 2px;
  cursor: pointer;
  color: ${props => props.active ? props.theme.primary : props.theme.secondary};
  
  // @media ${device.pc} {
  //   display: none;
  // }

  // &:hover{
  //   background-color: ${props => props.theme.primary};
  //   @media ${device.pc} {
  //     background-color: ${props => props.active ? props.theme.primary : props.theme.secondary};
  //   }
  // }
  //
  svg {
    max-height: 25px;
  }
`
