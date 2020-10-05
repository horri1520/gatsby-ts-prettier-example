import React from 'react';
import styled from 'styled-components';
import devices from '../../../types/devices';
import HeaderInner from '../../molecules/header-inner';

type Props = {
  agent: devices;
};

const HeaderOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #0073cc;
`;

const Header: React.FC<Props> = ({ agent }: Props) => {
  return (
    <HeaderOuter>
      <HeaderInner agent={agent} />
    </HeaderOuter>
  );
};

export default Header;
