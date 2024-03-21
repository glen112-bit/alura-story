import React from 'react';
import { styled } from 'styled-components';

const StyledButton = styled.button`
cursor: pointer;
border: 0;
padding: 8px 14px;
transition: 0.3s;
`
interface ButtonProps {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}
export default function Button({ children, ...props }: ButtonProps) {
  return (
    <StyledButton
      {...props}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  disabled: false,
}
