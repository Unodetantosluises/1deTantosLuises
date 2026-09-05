import React from 'react';
import Layout from '../../components/Layout/Layout';
import BackgroundGrid from '../../components/BackgroundGrid/BackgroundGrid';
import Controls from '../../components/Controls/Controls';
import ReturnButton from '../../components/ReturnButton/ReturnButton';
import './_experience.scss';

export const Experience = () => {
  return (
    <Layout>
      <main className="page experience">
        <BackgroundGrid />

        {/* Translucent Rounded Panel */}
        <div className="experience__panel">
          {/* Header: Return Button + Title */}
          <header className="experience__header">
            <ReturnButton />
            <h1 className="experience__title">Experiencia</h1>
          </header>

          {/* Controls in top-right of panel */}
          <Controls />
        </div>
      </main>
    </Layout>
  );
};

export default Experience;
