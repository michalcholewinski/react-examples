import React from 'react';
import styled from 'styled-components';
import { Head } from '../components/head/Head';
import { Layout } from '../layouts/Layout';

const AnotherPage = () => (
  <Layout>
    <Head title="Another" />
    <Title>My First Another Page</Title>
  </Layout>
);

const Title = styled.h1`
  color: red;
`;

export default AnotherPage;
