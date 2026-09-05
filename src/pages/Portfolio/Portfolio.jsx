import React from 'react';
import Layout from '../../components/Layout/Layout';
import BackgroundGrid from '../../components/BackgroundGrid/BackgroundGrid';
import Controls from '../../components/Controls/Controls';
import ReturnButton from '../../components/ReturnButton/ReturnButton';
import './_portfolio.scss';

export const Portfolio = () => {
  return (
    <Layout>
      <main className="page portfolio">
        <BackgroundGrid />

        {/* Translucent Rounded Panel */}
        <div className="portfolio__panel">
          {/* Header: Return Button + Title */}
          <header className="portfolio__header">
            <ReturnButton />
            <h1 className="portfolio__title">Portafolio</h1>
          </header>

          {/* Controls in top-right of panel */}
          <Controls />
        </div>
      </main>
    </Layout>
  );
};

export default Portfolio;
