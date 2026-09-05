import React from 'react';
import Layout from '../../components/Layout/Layout';
import BackgroundGrid from '../../components/BackgroundGrid/BackgroundGrid';
import Controls from '../../components/Controls/Controls';
import ReturnButton from '../../components/ReturnButton/ReturnButton';
import './_contact.scss';

export const Contact = () => {
  return (
    <Layout>
      <main className="page contact">
        <BackgroundGrid />

        {/* Translucent Rounded Panel */}
        <div className="contact__panel">
          {/* Header: Return Button + Title */}
          <header className="contact__header">
            <ReturnButton />
            <h1 className="contact__title">Contacto</h1>
          </header>

          {/* Controls in top-right of panel */}
          <Controls />
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
