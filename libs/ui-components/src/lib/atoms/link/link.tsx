import React from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LinkProps {
  children?: React.ReactChild;
  href: string;
}

const StyledLink = styled.a`
  color: #6494c5;
  text-decoration: none;
`;

export function Link({ children, ...rest }: LinkProps) {
  return <StyledLink {...rest}>{children}</StyledLink>;
}

export default Link;
