import React from 'react';
import Layout from '../../components/Layout/Layout';
import BackgroundGrid from '../../components/BackgroundGrid/BackgroundGrid';
import Controls from '../../components/Controls/Controls';
import ReturnButton from '../../components/ReturnButton/ReturnButton';
import './_about.scss';

export const About = () => {
  return (
    <Layout>
      <main className="page about">
        <BackgroundGrid />

        {/* Translucent Rounded Panel */}
        <div className="about__panel">
          {/* Header: Return Button + Title */}
          <header className="about__header">
            <ReturnButton />
            <h1 className="about__title">Sobre Mi</h1>
          </header>

          {/* Controls in top-right of panel */}
          <Controls />
        </div>
      </main>
    </Layout>
  );
};

export default About;
