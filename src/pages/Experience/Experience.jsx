import React from 'react';
import Layout from '../../components/Layout/Layout';
import BackgroundGrid from '../../components/BackgroundGrid/BackgroundGrid';
import Controls from '../../components/Controls/Controls';
import './_experience.scss';

export const Experience = () => {
  return (
    <Layout>
      <main className="page experience">
        <BackgroundGrid />
        <Controls />

        <header className="page__header">
          <h1 className="page__title">Experiencia</h1>
        </header>
      </main>
    </Layout>
  );
};

export default Experience;
