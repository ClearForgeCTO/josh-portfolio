import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { getPostBySlug, getAllPostSlugs, markdownToHtml } from '@/app/lib/blog/markdown'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Shawn Sloan`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const contentHtml = await markdownToHtml(post.content)

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-bg-primary/80 backdrop-blur-lg border-b border-glass-border">
        <div className="container mx-auto px-6 py-4">
          <Link href="/blog" className="inline-flex items-center space-x-2 text-text-secondary hover:text-blue-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="section pt-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
                {post.title}
              </h1>

              <div className="flex items-center space-x-4 text-text-secondary mb-6">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime}</span>
                </div>
              </div>

              {post.tags.length > 0 && (
                <div className="flex items-center space-x-2 flex-wrap gap-2">
                  <Tag className="w-4 h-4 text-text-secondary" />
                  {post.tags.map(tag => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="px-3 py-1 bg-blue-primary/10 rounded-full text-sm text-blue-primary hover:bg-blue-primary/20 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
            </header>

            {/* Content */}
            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-text-primary prose-headings:font-bold
                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                prose-p:text-text-secondary prose-p:leading-relaxed
                prose-a:text-blue-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-text-primary
                prose-code:text-purple-primary prose-code:bg-surface-l1 prose-code:px-1 prose-code:rounded
                prose-pre:bg-surface-l1 prose-pre:border prose-pre:border-glass-border
                prose-ul:text-text-secondary prose-ol:text-text-secondary
                prose-li:text-text-secondary
                prose-blockquote:border-l-4 prose-blockquote:border-blue-primary prose-blockquote:text-text-secondary
                prose-img:rounded-lg"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-glass-border">
              <div className="flex items-center justify-between">
                <Link
                  href="/blog"
                  className="text-blue-primary hover:underline"
                >
                  ← Back to all posts
                </Link>
                <Link
                  href="/#contact"
                  className="text-blue-primary hover:underline"
                >
                  Get in touch →
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </main>
  )
}
