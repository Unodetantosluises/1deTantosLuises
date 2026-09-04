import React from 'react';
import Layout from '../../components/Layout/Layout';
import BackgroundGrid from '../../components/BackgroundGrid/BackgroundGrid';
import Controls from '../../components/Controls/Controls';
import './_contact.scss';

export const Contact = () => {
  return (
    <Layout>
      <main className="page contact">
        <BackgroundGrid />
        <Controls />

        <header className="page__header">
          <h1 className="page__title">Contacto</h1>
        </header>
      </main>
    </Layout>
  );
};

export default Contact;
