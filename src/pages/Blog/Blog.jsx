import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Layout from '../../components/Layout/Layout';
import BackgroundGrid from '../../components/BackgroundGrid/BackgroundGrid';
import Controls from '../../components/Controls/Controls';
import { useTheme } from '../../context/ThemeContext';
import returnButtonDay from '../../assets/icon-return/return-button=day.svg';
import returnButtonNight from '../../assets/icon-return/return-button=nigth.svg';
import './_blog.scss';

export const Blog = () => {
  const navigate = useNavigate(); 
  const { isDarkMode } = useTheme();

  return (
    <Layout>
      <main className="page blog">
        <BackgroundGrid />
        
         {/* Translucent Rounded Panel */}
         <div className="blog__panel">
          {/* Header: Return Button + Title */}
          <header className="blog__header">
            <button
              type="button"
              className="blog__return-btn"
              aria-label="Regresar a la página anterior"
              onClick={() => navigate(-1)}
            >
              <img
                src={isDarkMode ? returnButtonDay : returnButtonNight}
                alt="Regresar"
                className="blog__return-icon"
              />
            </button>
          <h1 className="blog__title">Blog</h1>
        </header>
        
        {/* Controls in top-right of panel */}
        <Controls />
        </div>
      </main>
    </Layout>
  );
};

export default Blog;
