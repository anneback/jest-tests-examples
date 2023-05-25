import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  const { onClick = () => {}, children } = props;
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
