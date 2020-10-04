import React from 'react';
import styled from 'styled-components';
import HeaderInner from '../../molecules/header-inner';

const HeaderOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #0073cc;
`;

const Header: React.FC = () => {
  return (
    <HeaderOuter>
      <HeaderInner />
    </HeaderOuter>
  );
};

export default Header;
