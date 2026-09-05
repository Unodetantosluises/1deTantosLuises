import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import BackgroundGrid from '../../components/BackgroundGrid/BackgroundGrid';
import Controls from '../../components/Controls/Controls';
import { useTheme } from '../../context/ThemeContext';
import returnButtonDay from '../../assets/icon-return/return-button=day.svg';
import returnButtonNight from '../../assets/icon-return/return-button=nigth.svg';
import './_about.scss';

export const About = () => {
  const navigate = useNavigate();
  const { isDarkMode} = useTheme();

  return (
    <Layout>
      <main className="page about">
        <BackgroundGrid />

        {/* Translucent Rounded Panel */}
        <div className="about__panel">
          {/* Header: Return Button + Title */}
          <header className="about__header">
            <button
              type="button"
              className="about__return-btn"
              aria-label="Regresar a la página anterior"
              onClick={() => navigate(-1)}
            >
              <img
                src={isDarkMode ? returnButtonDay : returnButtonNight}
                alt="Regresar"
                className="about__return-icon"
              />
            </button>
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
