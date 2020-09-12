import React, { useState, onEffect, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Table from 'Components/Table';
const { useInterval } = require('Util/useInterval.js');
const config = require('../../config.json');

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StatusPage = () => {
  const [state, updateState] = useState([]);
  const endpoints = [
    'accounts',
    'assets',
    'customers',
    'datapoints',
    'devices',
    'documents',
    'forms',
    'invites',
    'media',
    'messages',
    'namespaces',
    'orders',
    'patients',
    'relationships',
    'rules',
    'templates',
    'users',
    'workflows',
  ];

  useInterval(
    () => {
      if (state.length >= 15) {
        updateState((state) => []);
      }

      endpoints.forEach(async (endpoint) => {
        await axios
          .get(`https://api.factoryfour.com/${endpoint}/health/status`)
          .then((response) => {
            updateState((state) => [...state, response.data]);
          })
          .catch((error) => {
            console.error('Error fetching endpoint!');
          });
      });
    },
    config.API_POLLING_INTERVAL * 1000,
    []
  );

  return (
    <Container>
      <h1>Endpoint Statuses</h1>
      <Table endpoints={state} />
      <h2>
        This page updates every {config.API_POLLING_INTERVAL} seconds. If you wish to change this
        rate, you can do so by changing the value of "API_POLLING_INTERVAL" in the 'config.json'
        file.
      </h2>
    </Container>
  );
};

export default StatusPage;
