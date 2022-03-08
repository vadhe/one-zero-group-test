import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TextInputProps {
  type: 'text' | 'password';
  label: string;
  id: string;
}

const StyledTextInput = styled.div`
  color: pink;
  position: relative;
  width: 100%;
  label {
    position: absolute;
    left: 10px;
    top: 10px;
    background-color: white;
    color: #6f7786;
    transition: 0.2s ease all;
  }
  input {
    padding: 0.7rem 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    box-sizing: border-box;
    width: 100%;
  }
  input:focus {
    outline: none;
  }

  input:focus + label {
    /* background-color: #ced4da; */
    top: -10px;
    left: 10px;
  }
`;

export function TextInput({ type, label, id }: TextInputProps) {
  return (
    <StyledTextInput>
      <input id={id} type={type} />
      <label htmlFor={id}>{label}</label>
    </StyledTextInput>
  );
}

export default TextInput;
