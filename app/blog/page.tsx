import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { getAllPosts, getAllTags } from '@/app/lib/blog/markdown'
import Card from '@/app/components/ui/Card'
import Button from '@/app/components/ui/Button'

export const metadata = {
  title: 'Blog | Shawn Sloan',
  description: 'Insights on AI, technology democratization, and building for the 90% locked out by complexity.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const allTags = getAllTags()

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-bg-primary/80 backdrop-blur-lg border-b border-glass-border">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center space-x-2 text-text-secondary hover:text-blue-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section pt-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Insights on AI, technology democratization, and building for the 90% locked out by complexity
            </p>
          </div>

          {/* Tags Filter */}
          {allTags.length > 0 && (
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex items-center space-x-2 flex-wrap gap-2">
                <Tag className="w-5 h-5 text-text-secondary" />
                {allTags.map(tag => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase()}`}
                    className="px-3 py-1 bg-surface-l1 rounded-full text-sm text-text-secondary hover:text-blue-primary hover:bg-surface-l2 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Blog Posts */}
          <div className="max-w-4xl mx-auto">
            {posts.length === 0 ? (
              <Card className="text-center py-12">
                <p className="text-xl text-text-secondary mb-4">
                  No blog posts yet. Check back soon!
                </p>
                <p className="text-text-secondary">
                  In the meantime, explore the projects and reach out if you&apos;d like to discuss AI implementation.
                </p>
              </Card>
            ) : (
              <div className="space-y-8">
                {posts.map(post => (
                  <Card key={post.slug} className="hover:border-blue-primary/50 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      <article>
                        <div className="mb-4">
                          <h2 className="text-3xl font-bold text-text-primary mb-3 hover:text-blue-primary transition-colors">
                            {post.title}
                          </h2>
                          <div className="flex items-center space-x-4 text-sm text-text-secondary mb-4">
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
                        </div>

                        <p className="text-text-secondary leading-relaxed mb-4">
                          {post.excerpt}
                        </p>

                        {post.tags.length > 0 && (
                          <div className="flex items-center space-x-2 flex-wrap gap-2 mb-4">
                            {post.tags.map(tag => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-blue-primary/10 rounded text-xs text-blue-primary"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <Button variant="secondary" size="sm">
                          Read More →
                        </Button>
                      </article>
                    </Link>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
