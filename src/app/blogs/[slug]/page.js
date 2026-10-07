import { blogData } from '../blogData';
import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.metaTags?.title || post.title,
    description: post.metaTags?.description || post.description || '',
    keywords: post.metaTags?.keywords || '',
    alternates: {
      canonical: post.metaTags?.canonical || `https://www.jeftechno.com/blogs/${slug}`,
    },
    openGraph: {
      title: post.metaTags?.title || post.title,
      description: post.metaTags?.description || post.description || '',
      url: post.metaTags?.canonical || `https://www.jeftechno.com/blogs/${slug}`,
      images: [
        {
          url: post.imageUrl || '',
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTags?.title || post.title,
      description: post.metaTags?.description || post.description || '',
      images: [post.imageUrl || ''],
    }
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = blogData[slug];

  const jsonLd = post ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.metaTags?.title || post.title,
    description: post.metaTags?.description || post.description || '',
    image: post.imageUrl ? `https://www.jeftechno.com${post.imageUrl}` : '',
    url: post.metaTags?.canonical || `https://www.jeftechno.com/blogs/${slug}`,
    author: {
      '@type': 'Organization',
      name: 'JEF Techno',
      url: 'https://www.jeftechno.com/'
    },
    publisher: {
      '@type': 'Organization',
      name: 'JEF Techno',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.jeftechno.com/FooterLogo/jef-logo.png' // assuming standard logo path
      }
    },
    datePublished: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
  } : null;

  const breadcrumbJsonLd = post ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.jeftechno.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blogs',
        item: 'https://www.jeftechno.com/blogs'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: post.metaTags?.canonical || `https://www.jeftechno.com/blogs/${slug}`
      }
    ]
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      <BlogPostClient />
    </>
  );
}
