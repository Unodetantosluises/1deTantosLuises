import React from 'react';
import Layout from '../../components/Layout/Layout';
import BackgroundGrid from '../../components/BackgroundGrid/BackgroundGrid';
import Controls from '../../components/Controls/Controls';
import ReturnButton from '../../components/ReturnButton/ReturnButton';
import { useTheme } from '../../context/ThemeContext';
import framePhoto from '../../assets/icons/frame-photo.png';
import framePhotoMedium from '../../assets/icons/frame-photo-medium.png';
import framePhotoSmall from '../../assets/icons/frame-photo-small.png';
import photoNeon from '../../images/luis_holding_github_neon_sign.png';
import photoCooper from '../../images/cooper_and_metronomy.png';
import photoVanGogh from '../../images/luis_sitting_van_gogh_bedroom_recreation.png';
import iconInstagramDay from '../../assets/icon-instagram/Instagram=day.svg';
import iconInstagramNight from '../../assets/icon-instagram/Instagram=nigth.svg';
import iconSpotifyLight from '../../assets/icon-spotify/Spotify=ligth.svg';
import iconSpotifyDark from '../../assets/icon-spotify/Spotify=dark.svg';
import './_about.scss';

export const About = () => {
  const { isDarkMode } = useTheme();

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

          {/* Left Content Column */}
          <section className="about__content" aria-label="Información sobre mí">
            {/* Párrafo 1: Introducción */}
            <p className="about__paragraph">
              Bueno aqui mas que hablar de mis habilidades o experiencias laborales, aqui comparto un poco mas sobre quien soy, mas haya de lo tenico y profesional.
            </p>

            {/* Párrafo 2: Filosofía creativa */}
            <p className="about__paragraph">
              Me considero una persona creativa, asi que nunca me limito en conocer, oir, degustar o vivir nuevas experiencias, ya que al final del dia pienso que todos somos producto de nuestras experiencias y el arte siempre ayudara a nutrir nuestra mente y vida.
            </p>

            {/* Lista de Favoritos */}
            <div className="about__favorites">
              <p className="about__fav-item">
                <span className="about__line"><strong>Pelicula Favorita:</strong> Rango, Singin In</span>
                <span className="about__line">The Rain, Casino y Beau Tiene Miedo.</span>
              </p>

              <p className="about__fav-item">
                <span className="about__line"><strong>Escritor Favorito:</strong> Edgar Allan Poe.</span>
              </p>

              <p className="about__fav-item">
                <span className="about__line"><strong>Pintura Favorita:</strong> Desnudo Barroco</span>
                <span className="about__line">de German Gedovias.</span>
              </p>

              <p className="about__fav-item">
                <span className="about__line"><strong>Show de Television Favorito:</strong></span>
                <span className="about__line">Twin Peaks, Fleabag, The Leftovers</span>
                <span className="about__line">& Arrested Development.</span>
              </p>
            </div>

            {/* Enlaces Sociales */}
            <nav className="about__socials" aria-label="Redes sociales">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="about__social-btn"
                aria-label="Instagram"
              >
                <img
                  src={isDarkMode ? iconInstagramDay : iconInstagramNight}
                  alt="Instagram"
                  className="about__social-icon"
                />
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="about__social-btn"
                aria-label="Spotify"
              >
                <img
                  src={isDarkMode ? iconSpotifyLight : iconSpotifyDark}
                  alt="Spotify"
                  className="about__social-icon"
                />
              </a>
            </nav>
          </section>

          {/* Desktop Frames Collage with Photos */}
          <div className="about__frames" aria-label="Marcos decorativos con fotografías">
            {/* Marco Grande */}
            <div className="about__frame about__frame--large">
              <div className="about__frame-photo-wrap">
                <img
                  src={photoNeon}
                  alt="Luis sosteniendo letrero neón de GitHub"
                  className="about__frame-photo"
                />
              </div>
              <img
                src={framePhoto}
                alt="Marco decorativo grande"
                className="about__frame-img"
                aria-hidden="true"
              />
            </div>

            {/* Marco Mediano */}
            <div className="about__frame about__frame--medium">
              <div className="about__frame-photo-wrap">
                <img
                  src={photoCooper}
                  alt="Cooper y vinilos de Metronomy"
                  className="about__frame-photo"
                />
              </div>
              <img
                src={framePhotoMedium}
                alt="Marco decorativo mediano"
                className="about__frame-img"
                aria-hidden="true"
              />
            </div>

            {/* Marco Pequeño */}
            <div className="about__frame about__frame--small">
              <div className="about__frame-photo-wrap">
                <img
                  src={photoVanGogh}
                  alt="Luis en recreación de la habitación de Van Gogh"
                  className="about__frame-photo"
                />
              </div>
              <img
                src={framePhotoSmall}
                alt="Marco decorativo pequeño"
                className="about__frame-img"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
