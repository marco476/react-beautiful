import styled from 'styled-components';

import breakpoints from '../utils/responsive';

const Image = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${props => props.height}px;
  background-image: url(${props => props.src});
  
  ${props => !props.persistent && `display: none;`}
  
  ${props => props.grayed && `
    transform: transale3d(0,0,0);
    transition: all 0.5s ease-in-out;
    filter: grayscale(0.8);
    
    &:hover,
    &:focus {
      filter: grayscale(0);
    }
  `}
  
  ${props => props.grayed && props.active && 'filter: grayscale(0);'}
  
  @media screen and ${breakpoints.md.min} {
    display: block;
  }
`;

export default Image;
