import React from 'react';
import Layout from '../../components/Layout/Layout';
import BackgroundGrid from '../../components/BackgroundGrid/BackgroundGrid';
import Controls from '../../components/Controls/Controls';
import './_blog.scss';

export const Blog = () => {
  return (
    <Layout>
      <main className="page blog">
        <BackgroundGrid />
        <Controls />

        <header className="page__header">
          <h1 className="page__title">Blog</h1>
        </header>
      </main>
    </Layout>
  );
};

export default Blog;
