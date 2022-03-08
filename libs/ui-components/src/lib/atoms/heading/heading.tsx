import styled from 'styled-components';

/* eslint-disable-next-line */
export interface IStyledHeading {
  color?: string;
  fontWeight?: string | number;
  fontSize?: string;
}
export interface HeadingProps extends IStyledHeading {
  children: React.ReactChild;
}

const StyledHeading = styled.div<IStyledHeading>`
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  background-color: inherit;
`;

export function Heading({
  children,
  color,
  fontSize,
  fontWeight,
}: HeadingProps) {
  return (
    <StyledHeading color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </StyledHeading>
  );
}

export default Heading;
