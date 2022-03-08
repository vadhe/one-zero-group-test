import styled from 'styled-components';
import { Button, Link, Text, TextInput } from '@one-zero-group/ui-components';
import useLoginForm from './useLoginForm';
/* eslint-disable-next-line */
export interface FormLoginProps {}

const StyledFormLogin = styled.div`
  background-color: white;
  width: 100%;
  padding: 1.5rem;
  border: 1px solid white;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;
const StyledFormControl = styled.div`
  margin-top: 1rem;
`;
const StyledWrapperButton = styled.div`
  margin-top: 1rem;
  justify-content: space-between;
  div {
    display: inline;
    a {
      margin-left: 0.2rem;
    }
  }
  button {
    margin-top: 1rem;
  }
  @media (min-width: 1024px) {
    button {
      width: 20%;
      margin-top: 0rem;
    }
    display: flex;
    align-items: center;
    div {
      display: flex;
      align-items: center;
    }
  }
`;

export function FormLogin(props: FormLoginProps) {
  const { email, password, changeEmail, changePassword, login } =
    useLoginForm();
  return (
    <StyledFormLogin>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <StyledFormControl>
          <TextInput
            label="email"
            id="email"
            type="text"
            value={email}
            onChange={changeEmail}
          />
        </StyledFormControl>
        <StyledFormControl>
          <TextInput
            label="password"
            id="password"
            type="password"
            value={password}
            onChange={changePassword}
          />
        </StyledFormControl>
        <StyledFormControl>
          <Link href="#">Forgot password?</Link>
        </StyledFormControl>
        <StyledWrapperButton>
          <div>
            <Text color="#728197">New User?</Text>
            <Link href="#">Create account</Link>
          </div>
          <Button type="submit" variant="primary">
            Sign in
          </Button>
          {/* <button type="submit">Sign in</button> */}
        </StyledWrapperButton>
      </form>
    </StyledFormLogin>
  );
}

export default FormLogin;
