import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import BackgroundGrid from '../../components/BackgroundGrid/BackgroundGrid';
import Controls from '../../components/Controls/Controls';
import { useTheme } from '../../context/ThemeContext';
import returnButtonDay from '../../assets/icon-return/return-button=day.svg';
import returnButtonNight from '../../assets/icon-return/return-button=nigth.svg'
import './_contact.scss';

export const Contact = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  return (
    <Layout>
      <main className="page contact">
        <BackgroundGrid />

        {/* Translucent Rounded Panel */}
        <div className="contact__panel">
          {/* Header: Return Button + Title */}
          <header className="contact__header">
            <button
              type="button"
              className="contact__return-btn"
              aria-label="Regregar a la pagina anterior"
              onClick={() => navigate(-1)}
            >
              <img
                src={isDarkMode ? returnButtonDay : returnButtonNight}
                alt="Regresar"
                className="contact__return-icon"
              />
            </button>
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
