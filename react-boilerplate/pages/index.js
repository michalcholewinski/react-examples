import React from 'react';
import styled from 'styled-components';
import { Head } from '../components/head/Head';
import { Layout } from '../layouts/Layout';

const Home = () => (
  <Layout>
    <Head title="Home" />
    <Title>My First Next.js Page</Title>
  </Layout>
);

const Title = styled.h1`
  color: red;
`;

export default Home;
