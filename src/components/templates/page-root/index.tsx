import React from 'react';
import styled from 'styled-components';
import devices from '../../../types/devices';
import Footer from '../../organisms/footer';
import Header from '../../organisms/header';

type Props = {
  agent: devices;
  children: React.ReactChild;
};

const Root = styled.div`
  display: inline-block;
  width: 100vw;
`;

const HeaderWrapper = styled.div`
  position: fixed;
  display: inline-block;
  width: 100%;
  height: 80px;
`;

const ContentsWrapper = styled.div`
  display: inline-block;
  width: 100%;
  padding-top: 80px;
`;

const PageRoot: React.FC<Props> = ({ children, agent }: Props) => {
  return (
    <Root>
      <HeaderWrapper>
        <Header agent={agent} />
      </HeaderWrapper>
      <ContentsWrapper>{children}</ContentsWrapper>
      <Footer />
    </Root>
  );
};

export default PageRoot;
