import React from 'react';
import styled, { css } from 'styled-components';

const headerStyles = css`
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid #000;
  background-color: green;
  color: white;
`;

const HeaderBlock = styled.div`
  ${headerStyles}
`;

const HeaderTitle = ({ title }) => {
  return <HeaderBlock>{title}</HeaderBlock>;
};

export default HeaderTitle;