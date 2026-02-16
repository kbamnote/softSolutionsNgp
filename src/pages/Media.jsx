import React from 'react';
import { Play, Download, ExternalLink, Newspaper, Video, Image as ImageIcon } from 'lucide-react';

const Media = () => {
  const pressReleases = [
    {
      date: 'Feb 10, 2026',
      title: 'Easilon Announces Record-Breaking Q4 2025 Performance',
      excerpt: 'Company reports 45% year-over-year growth in loan disbursements and expands operations to 5 new markets.',
      category: 'Press Release',
    },
    {
      date: 'Jan 28, 2026',
      title: 'Easilon Launches New Digital Lending Platform',
      excerpt: 'State-of-the-art platform enables faster loan approvals and enhanced customer experience.',
      category: 'Technology',
    },
    {
      date: 'Jan 15, 2026',
      title: 'Easilon Partners with Leading Financial Institutions',
      excerpt: 'Strategic partnerships aim to expand access to affordable credit for underserved communities.',
      category: 'Partnership',
    },
  ];

  const mediaKit = [
    { icon: ImageIcon, title: 'Company Logos', size: '2.5 MB', format: 'PNG, SVG' },
    { icon: Newspaper, title: 'Fact Sheet', size: '850 KB', format: 'PDF' },
    { icon: ImageIcon, title: 'Executive Photos', size: '15 MB', format: 'High-res JPG' },
    { icon: Video, title: 'Brand Video', size: '125 MB', format: 'MP4' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-easilon-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            className="w-full h-full object-cover opacity-20"
            alt="Media background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-easilon-navy/95 to-easilon-navy/80"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">Media Center</h1>
          <div className="flex items-center justify-center gap-2 text-white">
            <span className="opacity-60">Home</span>
            <span className="text-easilon-cyan">›</span>
            <span className="text-easilon-cyan">Media</span>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex gap-1">
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
                <div className="w-3 h-[2px] bg-easilon-cyan"></div>
              </div>
              <span className="text-easilon-cyan font-bold uppercase tracking-[0.2em] text-xs">News</span>
              <div className="flex gap-1">
                <div className="w-3 h-[2px] bg-easilon-cyan"></div>
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-easilon-navy">
              Latest Press Releases
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((item, index) => (
              <article
                key={index}
                className="bg-white border border-gray-100 p-8 rounded-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-easilon-cyan font-semibold">{item.category}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-sm text-easilon-gray">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-easilon-navy mb-3 hover:text-easilon-cyan transition-colors cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-easilon-gray mb-4">{item.excerpt}</p>
                <button className="inline-flex items-center gap-2 text-easilon-cyan font-semibold hover:gap-3 transition-all">
                  Read More <ExternalLink size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex gap-1">
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
                <div className="w-3 h-[2px] bg-easilon-cyan"></div>
              </div>
              <span className="text-easilon-cyan font-bold uppercase tracking-[0.2em] text-xs">Resources</span>
              <div className="flex gap-1">
                <div className="w-3 h-[2px] bg-easilon-cyan"></div>
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-easilon-navy">
              Media Kit
            </h2>
            <p className="mt-4 text-easilon-gray max-w-2xl mx-auto">
              Download official Easilon brand assets, logos, and media resources for press and promotional use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKit.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center cursor-pointer group"
              >
                <div className="w-16 h-16 bg-easilon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-easilon-cyan transition-colors">
                  <item.icon size={28} className="text-easilon-cyan group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-easilon-navy mb-2">{item.title}</h3>
                <p className="text-sm text-easilon-gray mb-4">{item.format}</p>
                <div className="flex items-center justify-center gap-2 text-easilon-cyan">
                  <Download size={16} />
                  <span className="text-sm font-semibold">{item.size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-easilon-navy">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Featured Video
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Learn more about our mission to provide smart financial solutions for bright futures.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80"
                alt="Video thumbnail"
                className="w-full h-full object-cover opacity-60"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-easilon-cyan rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Play size={32} className="text-white ml-1" fill="white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
