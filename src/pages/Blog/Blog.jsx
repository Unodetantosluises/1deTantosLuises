import React from 'react';
import Layout from '../../components/Layout/Layout';
import BackgroundGrid from '../../components/BackgroundGrid/BackgroundGrid';
import Controls from '../../components/Controls/Controls';
import ReturnButton from '../../components/ReturnButton/ReturnButton';
import './_blog.scss';

export const Blog = () => {
  return (
    <Layout>
      <main className="page blog">
        <BackgroundGrid />

        {/* Translucent Rounded Panel */}
        <div className="blog__panel">
          {/* Header: Return Button + Title */}
          <header className="blog__header">
            <ReturnButton />
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
