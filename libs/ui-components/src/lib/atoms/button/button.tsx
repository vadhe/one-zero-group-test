import { HtmlHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface IStyledButton {
  variant: 'primary' | 'secondary';
}
export interface ButtonProps
  extends HtmlHTMLAttributes<HTMLButtonElement>,
    IStyledButton {
  children?: React.ReactChild;
  icon?: React.ReactNode;
}

const StyledButton = styled.button<IStyledButton>`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px;
  border-radius: 4px;
  padding: 0.7rem 0.75rem;
  min-width: inherit;
  width: inherit;
  font-weight: inherit;
  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background: #3182ce;
    `}
  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background: none;
      background: none;
      border-color: white;
      border-style: solid;
    `};
  svg {
    margin-left: 0.5rem;
  }
`;

export function Button({ children, variant, icon, ...rest }: ButtonProps) {
  return (
    <StyledButton variant={variant} {...rest}>
      {children}
      {icon}
    </StyledButton>
  );
}

export default Button;
