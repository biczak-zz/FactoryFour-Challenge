import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';
import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'Util/globalStyle';
import StatusPage from './StatusPage';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <StatusPage />
  </Container>
);

setConfig({
  logLevel: 'debug',
});

export default hot(App);
