import React from 'react';
import styled from 'styled-components';

type Props = {
  label: string | null;
  href: string;
};

const Root = styled.a`
  height: 32px;
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;
  color: white;
  margin: 0px 8px;
  transition: 0.4s all;
  border: none;
  &:hover {
    color: gray;
  }
`;

const HeaderLink: React.FC<Props> = ({ label, href }: Props) => {
  if (label === null) {
    return null;
  }
  return <Root href={href}>{label}</Root>;
};

export default HeaderLink;
