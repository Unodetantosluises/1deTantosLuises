import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import BackgroundGrid from '../../components/BackgroundGrid/BackgroundGrid';
import Controls from '../../components/Controls/Controls';
import { useTheme } from '../../context/ThemeContext';
import returnButtonDay from '../../assets/icon-return/return-button=day.svg';
import returnButtonNight from '../../assets/icon-return/return-button=nigth.svg';
import './_experience.scss';

export const Experience = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  return (
    <Layout>
      <main className="page experience">
        <BackgroundGrid />

        {/* Translucent Rounded Panel */}
        <div className="experience__panel">
          {/* Header: Return Button + Title */}
          <header className="experience__header">
            <button
              type="button"
              className="experience__return-btn"
              aria-label="Regresar a la pagina anterior"
              onClick={() => navigate(-1)}
            >
              <img
                src={isDarkMode ? returnButtonDay : returnButtonNight}
                alt="Regresar"
                className="experience__return-icon"
              />
            </button>
            <h1 className="experience__title">Experiencia</h1>
          </header>

          {/*  Controls in top-right of panel */}
          <Controls />
        </div>
      </main>
    </Layout>
  );
};

export default Experience;
