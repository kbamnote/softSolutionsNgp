import React from 'react';
import { Calendar, User, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      category: 'Financial Tips',
      title: 'How to Improve Your Credit Score for Better Loan Rates',
      excerpt: 'Learn the essential strategies to boost your credit score and qualify for lower interest rates on your loans.',
      author: 'John Smith',
      date: 'Feb 10, 2026',
      comments: 12,
    },
    {
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
      category: 'Investment',
      title: 'Smart Investment Strategies for First-Time Home Buyers',
      excerpt: 'Discover the best investment approaches to secure your dream home without breaking the bank.',
      author: 'Sarah Johnson',
      date: 'Feb 8, 2026',
      comments: 8,
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      category: 'Business',
      title: '5 Ways Business Loans Can Accelerate Your Growth',
      excerpt: 'Explore how strategic business financing can help you scale your operations and reach new markets.',
      author: 'Michael Chen',
      date: 'Feb 5, 2026',
      comments: 15,
    },
    {
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
      category: 'Personal Finance',
      title: 'Understanding Personal Loan Interest Rates',
      excerpt: 'A comprehensive guide to understanding how personal loan interest rates work and how to get the best deal.',
      author: 'Emily Davis',
      date: 'Feb 3, 2026',
      comments: 6,
    },
    {
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
      category: 'Education',
      title: 'Planning for Higher Education: Loan Options Explained',
      excerpt: 'Navigate the various education loan options available to fund your academic dreams effectively.',
      author: 'David Wilson',
      date: 'Jan 28, 2026',
      comments: 20,
    },
    {
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
      category: 'Auto Finance',
      title: 'New vs Used: Making the Right Car Financing Decision',
      excerpt: 'Compare the pros and cons of financing new versus used vehicles to make an informed choice.',
      author: 'Lisa Anderson',
      date: 'Jan 25, 2026',
      comments: 10,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-easilon-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            className="w-full h-full object-cover opacity-20"
            alt="Blog background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-easilon-navy/95 to-easilon-navy/80"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">Latest Blog</h1>
          <div className="flex items-center justify-center gap-2 text-white">
            <span className="opacity-60">Home</span>
            <span className="text-easilon-cyan">›</span>
            <span className="text-easilon-cyan">Blog</span>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex gap-1">
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
                <div className="w-3 h-[2px] bg-easilon-cyan"></div>
              </div>
              <span className="text-easilon-cyan font-bold uppercase tracking-[0.2em] text-xs">Latest News</span>
              <div className="flex gap-1">
                <div className="w-3 h-[2px] bg-easilon-cyan"></div>
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-easilon-navy">
              Latest Blog From Easilon
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-easilon-cyan text-white px-3 py-1 text-xs font-semibold uppercase">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-easilon-navy mb-3 line-clamp-2 group-hover:text-easilon-cyan transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-easilon-gray mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-easilon-gray mb-4">
                    <span className="flex items-center gap-1">
                      <User size={14} /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={14} /> {post.comments}
                    </span>
                  </div>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-easilon-cyan font-semibold hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;