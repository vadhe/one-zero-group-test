import React from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface IStyledText {
  color?: string;
}
export interface TextProps extends IStyledText {
  children?: React.ReactChild;
}

const StyledText = styled.p<IStyledText>`
  color: ${({ color }) => color};
  font-size: 12px;
`;

export function Text({ children, color }: TextProps) {
  return <StyledText color={color}>{children}</StyledText>;
}

export default Text;
