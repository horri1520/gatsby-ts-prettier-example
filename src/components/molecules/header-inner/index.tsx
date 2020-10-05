import React from 'react';
import styled from 'styled-components';
import pages from '../../../constants/pages';
import devices from '../../../types/devices';
import HeaderLink from '../../atoms/header-link';

type Props = {
  agent: devices;
};

const HeaderContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96%;
  height: 100%;
`;

const SiteLogo = styled.a`
  font-size: 32px;
  font-weight: 500;
  color: white;
  text-decoration: none;
`;

const HeaderLinks = styled.div`
  display: flex;
`;

const HeaderInner: React.FC<Props> = ({ agent }: Props) => {
  return (
    <HeaderContentsWrapper>
      <SiteLogo href="/">ほりぶろぐ</SiteLogo>
      {agent === devices.pc ? (
        <HeaderLinks>
          {pages.map(page => (
            <HeaderLink label={page.label} href={page.path} key={page.name} />
          ))}
        </HeaderLinks>
      ) : null}
    </HeaderContentsWrapper>
  );
};

export default HeaderInner;
