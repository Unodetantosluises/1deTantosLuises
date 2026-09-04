import React from 'react';
import Layout from '../../components/Layout/Layout';
import BackgroundGrid from '../../components/BackgroundGrid/BackgroundGrid';
import Controls from '../../components/Controls/Controls';
import './_about.scss';

export const About = () => {
  return (
    <Layout>
      <main className="page about">
        <BackgroundGrid />
        <Controls />

        <header className="page__header">
          <h1 className="page__title">Sobre Mí</h1>
        </header>
      </main>
    </Layout>
  );
};

export default About;
