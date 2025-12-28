"use client"; // Required for useState and interactivity
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "EcoTrack Dashboard",
    category: "Web",
    slug: "ecotrack-dashboard",
    description: "A real-time environmental monitoring tool built with React and D3.js.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Next.js", "Tailwind", "Supabase"]
  },
  {
    id: 2,
    title: "Luxe E-commerce",
    category: "Design",
    slug: "luxe-ecommerce",
    description: "A high-end retail experience focusing on minimalist aesthetics.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["Figma", "UI/UX", "Next.js"]
  },
  {
    id: 3,
    title: "Quantum API",
    category: "Backend",
    slug: "quantum-api",
    description: "High-performance data fetching layer for crypto analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad09?w=800&q=80",
    tags: ["Node.js", "Docker", "GraphQL"]
  }
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="container py-5 mt-5">
      {/* Header Section */}
      <section className="row mb-5 justify-content-center text-center">
        <div className="col-lg-8">
          <h1 className="fw-black display-3 mb-3" style={{ letterSpacing: '-2px' }}>
            Work <span className="text-muted">/ Portfolio</span>
          </h1>
          <p className="lead text-secondary">
            A curated selection of my digital explorations and professional builds.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <div className="d-flex justify-content-center gap-2 mb-5">
        {['All', 'Web', 'Design', 'Backend'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`btn rounded-pill px-4 transition-all ${
              filter === cat ? 'btn-dark' : 'btn-outline-secondary border-light-subtle'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="row g-5">
        {filteredProjects.map((project) => (
          <div key={project.id} className="col-md-6">
            <Link href={`/projects/${project.slug}`} className="text-decoration-none group">
              <div className="project-card border-0 bg-transparent h-100">
                {/* Image Container with Next.js Image Optimization */}
                <div className="position-relative overflow-hidden rounded-4 mb-3 shadow-hover" style={{ height: '350px' }}>
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="project-image transition-transform"
                  /> */}
                  <div className="overlay d-flex align-items-center justify-content-center">
                    <span className="btn btn-light rounded-pill px-4 shadow-sm">View Case Study</span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="px-1">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-uppercase small fw-bold text-muted tracking-widest" style={{ letterSpacing: '1px' }}>
                      {project.category}
                    </span>
                    <div className="d-flex gap-2">
                       {project.tags.map(tag => (
                         <span key={tag} className="badge rounded-pill bg-light text-dark fw-normal border">{tag}</span>
                       ))}
                    </div>
                  </div>
                  <h3 className="h4 text-dark fw-bold mb-2">{project.title}</h3>
                  <p className="text-secondary small line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Aesthetic Custom CSS */}
      <style jsx>{`
        .transition-all { transition: all 0.3s ease; }
        .transition-transform { transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        
        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .shadow-hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: box-shadow 0.3s ease;
        }

        .project-card:hover .shadow-hover {
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.2);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .overlay {
          opacity: 1;
        }

        .tracking-widest { font-size: 0.75rem; }
      `}</style>
    </main>
  );
}