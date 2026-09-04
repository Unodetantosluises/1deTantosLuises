import React from 'react';
import Layout from '../../components/Layout/Layout';
import BackgroundGrid from '../../components/BackgroundGrid/BackgroundGrid';
import Controls from '../../components/Controls/Controls';
import './_portfolio.scss';

export const Portfolio = () => {
  return (
    <Layout>
      <main className="page portfolio">
        <BackgroundGrid />
        <Controls />

        <header className="page__header">
          <h1 className="page__title">Portafolio</h1>
        </header>
      </main>
    </Layout>
  );
};

export default Portfolio;
