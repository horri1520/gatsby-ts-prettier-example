import React from 'react';
import styled from 'styled-components';

const FooterOuter = styled.div`
  display: inline-block;
  width: 100%;
  background: #2c4f72;
`;

const CopyRight = styled.p`
  text-align: center;
  color: white;
  margin: 40px 0px;
`;

const Footer: React.FC = () => {
  return (
    <FooterOuter>
      <CopyRight>©️2020 Kaito Horiuchi</CopyRight>
    </FooterOuter>
  );
};

export default Footer;
