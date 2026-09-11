import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogPostLayout from '../../components/BlogPostLayout/BlogPostLayout';
import { getBlogPostBySlug, DEFAULT_POST_PARAGRAPHS } from '../../data/blogPosts';

export const BlogPost = () => {
  const { slug } = useParams();

  const post = useMemo(() => {
    return getBlogPostBySlug(slug);
  }, [slug]);

  if (!post) {
    return (
      <BlogPostLayout
        frontmatter={{
          title: 'Publicación no encontrada',
          subtitle: 'El artículo solicitado no existe o fue movido.',
          date: '',
          tags: ['#404', '#Blog'],
        }}
      >
        <p>
          Lo sentimos, no pudimos encontrar el artículo con el identificador{' '}
          <code>{slug}</code>.
        </p>
        <p>
          Puedes explorar todas las publicaciones disponibles en nuestro{' '}
          <Link to="/blog/posts">catálogo general del Blog</Link>.
        </p>
      </BlogPostLayout>
    );
  }

  const frontmatter = {
    title: post.title,
    subtitle: post.subtitle,
    date: post.date,
    tags: post.tags,
    coverImage: post.image,
  };

  return (
    <BlogPostLayout frontmatter={frontmatter}>
      {DEFAULT_POST_PARAGRAPHS.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </BlogPostLayout>
  );
};

export default BlogPost;
