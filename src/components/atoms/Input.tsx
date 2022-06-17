import { Ref, HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';


type Props = {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  inputRef?: Ref<HTMLInputElement>;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};

const Input = ({
  type,
  placeholder,
  value,
  inputRef,
  onChange,
  onBlur,
  onFocus,
  children,
}: Props): JSX.Element => (
  <>
  <StyledInput
    ref={inputRef}
    type={type}
    value={value}
    placeholder={placeholder ?? ''}
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus}
  />
    {children}
  </>
);

export default Input;

const StyledInput = styled.input`
  background-color: #333333;
  border: transparent;
  padding: 24px 40px;
  width: 100%;
  border-radius: 10px;
  font-size: 1.6rem;
  color: #ffffff;
  letter-spacing: 1px;
 
`;
