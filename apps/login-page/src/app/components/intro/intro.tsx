import { Button, Heading, Text } from '@one-zero-group/ui-components';
import styled from 'styled-components';
import { IoMdOpen } from 'react-icons/io';
/* eslint-disable-next-line */
export interface IntroProps {}

const StyledIntro = styled.div`
  color: white;
  width: 100%;
  text-align: center;
  p {
    width: 50%;
    margin: 1rem auto;
  }
`;
const StyledWrapperButton = styled.span`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
export function Intro(props: IntroProps) {
  return (
    <StyledIntro>
      <Heading fontSize="36px" fontWeight={700}>
        Introducing our
      </Heading>
      <Heading fontSize="36px" fontWeight={700}>
        2020 report
      </Heading>
      <Text color="#fff">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta.
      </Text>
      <StyledWrapperButton>
        <Button icon={<IoMdOpen />} variant="secondary">
          view report
        </Button>
      </StyledWrapperButton>
    </StyledIntro>
  );
}

export default Intro;
