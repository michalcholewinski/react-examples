import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from './Footer';
import { Head } from '../components/head/Head';
import { Header } from './Header';

export const Layout = ({ children }) => (
  <div>
    <Head title="Home" />
    <Header />
    {children}
    <Footer />

    <style jsx global>
      {`
      body {
        background: #FFF;
        font: 11px menlo;
        color: #fff;
      }
    `}
    </style>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
