import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import BackgroundGrid from '../../components/BackgroundGrid/BackgroundGrid';
import './_home.scss';

// Import folder icons (.png) exported from Aseprite
import folderAquablue from '../../assets/icons/Folder-Azul-Cerrado.png';
import folderAquablueOpen from '../../assets/icons/Folder-Azul-Abierto.png';
import folderYellow from '../../assets/icons/Folder-Amarillo-Cerrado.png';
import folderYellowOpen from '../../assets/icons/Folder-Amarrillo-Abierto.png';
import folderBlue from '../../assets/icons/Folder-Morado-Oscuro-Cerrado.png';
import folderBlueOpen from '../../assets/icons/Folder-Morado-Oscuro-Abierto.png';
import folderPink from '../../assets/icons/Folder-Rosa-Cerrado.png';
import folderPinkOpen from '../../assets/icons/Folder-Rosa-Abierto.png';
import folderGreen from '../../assets/icons/Folder-Verde-Claro-Cerrado.png';
import folderGreenOpen from '../../assets/icons/Folder-Verde-Claro-Abierto.png';

// Import control button icons (.svg)
import iconThemeDark from '../../assets/icon-theme/theme=dark.svg';
import iconThemeLight from '../../assets/icon-theme/theme=light.svg';
import iconHomeDay from '../../assets/icon-home/home-button=nigth.svg';
import { useTheme } from '../../context/ThemeContext';

const NAV_ITEMS = [
  {
    id: 'item-portfolio',
    label: 'Portafolio',
    path: '/portafolio',
    folderClass: 'folder--aquablue',
    iconSrc: folderAquablue,
    iconSrcOpen: folderAquablueOpen,  // hover state: folder opens
    desktopPos: { left: '15.625%', top: '10.295%' },
    mobilePos: { left: '21.667%', top: '6.375%' }
  },
  {
    id: 'item-experience',
    label: 'Experiencia',
    path: '/experiencia',
    folderClass: 'folder--yellow',
    iconSrc: folderYellow,
    iconSrcOpen: folderYellowOpen, // hover state: folder opens
    desktopPos: { left: '42.824%', top: '5.103%' },
    mobilePos: { left: '7.778%', top: '29.313%' }
  },
  {
    id: 'item-blog',
    label: 'Blog',
    path: '/blog',
    folderClass: 'folder--blue',
    iconSrc: folderBlue,
    iconSrcOpen: folderBlueOpen,
    desktopPos: { left: '81.481%', top: '19.964%' },
    mobilePos: { left: '68.056%', top: '27.000%' }
  },
  {
    id: 'item-contact',
    label: 'Contacto',
    path: '/contacto',
    folderClass: 'folder--pink',
    iconSrc: folderPink,
    iconSrcOpen: folderPinkOpen,
    desktopPos: { left: '17.419%', top: '62.847%' },
    mobilePos: { left: '27.639%', top: '72.813%' }
  },
  {
    id: 'item-about',
    label: 'Sobre Mi',
    path: '/sobre-mi',
    folderClass: 'folder--green',
    iconSrc: folderGreen,
    iconSrcOpen: folderGreenOpen,
    desktopPos: { left: '80.093%', top: '74.217%' },
    mobilePos: { left: '60.833%', top: '56.750%' }
  }
];

export const Home = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Layout>
      <main className="home">
        {/* Exact Non-Uniform Figma Grid & Black Pixel Blocks Component */}
        <BackgroundGrid />

        {/* Dynamic Navigation Items (Folders) */}
        <nav className="home__nav" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`home__nav-item ${item.id}`}
              style={{
                '--desktop-left': item.desktopPos.left,
                '--desktop-top': item.desktopPos.top,
                '--mobile-left': item.mobilePos.left,
                '--mobile-top': item.mobilePos.top
              }}
            >
              {/* Folder icon: swap closed→open on hover via CSS opacity */}
              {item.iconSrcOpen ? (
                <div className={`home__folder-icon-wrap ${item.folderClass}`}>
                  <img
                    src={item.iconSrc}
                    alt={`Carpeta ${item.label} cerrada`}
                    className="home__folder-icon home__folder-icon--closed"
                  />
                  <img
                    src={item.iconSrcOpen}
                    alt={`Carpeta ${item.label} abierta`}
                    className="home__folder-icon home__folder-icon--open"
                    aria-hidden="true"
                  />
                </div>
              ) : (
                <img
                  src={item.iconSrc}
                  alt={`Carpeta ${item.label}`}
                  className={`home__folder-icon ${item.folderClass}`}
                />
              )}
              <span className="home__folder-label">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Hero / Intro Card */}
        <header className="home__hero">
          <h1 className="home__hero-title">Soy Luis Antonio Diaz Martinez,</h1>
          <p className="home__hero-subtitle">Ingeniero de Software</p>
        </header>

        {/* Control Buttons */}
        <aside className="home__controls">
          <button
            type="button"
            className="home__control-btn home__control-btn--theme"
            aria-label={isDarkMode ? 'Cambiar a modo día' : 'Cambiar a modo noche'}
            onClick={toggleTheme}
          >
            <img
              src={isDarkMode ? iconThemeLight : iconThemeDark}
              alt={isDarkMode ? 'Modo Día' : 'Modo Noche'}
              className="home__control-icon"
            />
          </button>
          <button
            type="button"
            className="home__control-btn home__control-btn--home"
            aria-label="Inicio"
          >
            <img
              src={iconHomeDay}
              alt="Inicio"
              className="home__control-icon"
            />
          </button>
        </aside>

        {/* Footer */}
        <footer className="home__footer">
          <p>Sitio Web Desarrollado con <span className="home__heart">💚</span> por Luis Diaz</p>
        </footer>
      </main>
    </Layout>
  );
};

export default Home;
