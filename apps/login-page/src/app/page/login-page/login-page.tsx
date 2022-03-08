import { Heading, Text } from '@one-zero-group/ui-components';
import styled from 'styled-components';
import FormLogin from '../../components/form-login/form-login';
import Intro from '../../components/intro/intro';

/* eslint-disable-next-line */
export interface LoginPageProps {}

const StyledWrapperBrand = styled.div`
  padding: 1rem 2rem;
  position: absolute;
  top: 0;
`;
const StyledLoginPage = styled.div`
  height: 100vh;
  display: flex;
`;

const StyledLoginItem = styled.div`
  padding: 0 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledLoginItemLeft = styled(StyledLoginItem)`
  position: relative;
  display: none;
  background-color: #2b6cb0;
  @media (min-width: 1024px) {
    display: flex;
  }
  div {
    width: 100%;
  }
`;
const StyledLoginItemRight = styled(StyledLoginItem)`
  background-color: #f7fafc;
  div {
    width: 100%;
  }
`;
const StyledWrapperHeading = styled.div`
  margin: 1rem 0;
`;
export function LoginPage(props: LoginPageProps) {
  return (
    // <StyledLoginContainer>
    <StyledLoginPage>
      <StyledLoginItemLeft>
        <StyledWrapperBrand>
          <Heading fontWeight={700} fontSize="24px" color="#fff">
            Envelope
          </Heading>
        </StyledWrapperBrand>
        <div>
          <Intro />
        </div>
      </StyledLoginItemLeft>
      <StyledLoginItemRight>
        {/* <StyledWrapperBrand>
          <Heading fontWeight={700} fontSize="24px" color="#2b6cb0">
            Envelope
          </Heading>
        </StyledWrapperBrand> */}
        <div>
          <StyledWrapperHeading>
            <Heading fontWeight={700} fontSize="36px" color="#2b6cb0">
              Welcome Back
            </Heading>
          </StyledWrapperHeading>
          <StyledWrapperHeading>
            <Heading fontWeight={600} fontSize="24px" color="#728197">
              Sign in to continue
            </Heading>
          </StyledWrapperHeading>
          <FormLogin />
        </div>
      </StyledLoginItemRight>
    </StyledLoginPage>
    // </StyledLoginContainer>
  );
}

export default LoginPage;
