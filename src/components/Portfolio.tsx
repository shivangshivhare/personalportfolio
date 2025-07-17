import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo('.project-item',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.projects-title',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const projects = [
    {
  title: 'ZaikaMap',
  category: 'Full-Stack Web App',
  description:
    'ZaikaMap is a smart and simple restaurant recommender to help users discover the best places to eat nearby. Built for food lovers across India with real-time filtering and Google Maps integration.',
  image: '../assets/zaykamap.jpg', // Or replace with your custom image
  technologies: ['Next.js', 'Tailwind CSS', 'Google Maps API', 'Gemini API', 'TypeScript'],
  link: 'https://zaikamap.vercel.app/',
  github: 'https://github.com/shivangshivhare/ZaikaMap',
  featured: true
}
  ,
    {
      title: 'Traffic Violation Detection System',
      category: 'Computer Vision',
      description: 'OpenCV-based system for detecting traffic violations in real time with dashboard reports and auto-notification for law enforcement.',
      image: '../assets/trafficCS.jpg',
      technologies: ['Python', 'OpenCV', 'Flask', 'Real-Time Alerts'],
      link: 'https://github.com/shivangshivhare/traffic-violation-control-system',
      github: 'https://github.com/shivangshivhare/traffic-violation-control-system',
      featured: true
    },
      ,
    {
      title: 'TechInspiree',
      category: 'Knowledge Sharing Platform',
      description: 'AI-driven platform for students to share educational content with plagiarism checks, real-time collaboration, and personalized recommendations.',
      image: '../assets/techinspire.jpg',
      technologies: ['Next.js', 'MongoDB', 'Express.js', 'Tailwind', 'Node.js'],
      link: 'https://techinspire.vercel.app/',
      github: 'https://github.com/shivangshivhare/techinspiree',
      featured: true
    },
    // {
    //   title: 'Jewellery E-Commerce Website',
    //   category: 'E-Commerce Platform',
    //   description: 'Responsive MERN-based jewellery store with secure payments, SEO, admin dashboard, and loyalty integrations.',
    //   image: 'https://images.pexels.com/photos/538192/pexels-photo-538192.jpeg',
    //   technologies: ['MERN Stack', 'Stripe', 'Vercel', 'Admin Dashboard', 'SEO'],
    //   link: '#',
    //   github: '#',
    //   featured: true
    // }
  ];

  const achievements = [
    {
      title: 'Smart India Hackathon 2023',
      description: 'Team Lead — Delivered complete solution ahead of schedule',
      icon: <Award className="text-yellow-400" size={24} />
    },
    {
      title: 'Chegg Subject Expert',
      description: 'Solved 150+ advanced CS queries with 95% accuracy',
      icon: <Award className="text-green-400" size={24} />
    },
    {
      title: 'LeetCode Problem Solver',
      description: 'Solved 400+ coding problems consistently',
      icon: <Award className="text-blue-400" size={24} />
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="projects-title text-5xl md:text-6xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="projects-title text-xl text-gray-300 max-w-3xl mx-auto">
            Full-stack platforms, AI tools, and scalable web systems built with performance in mind.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, i) => (
            <div key={i} className="project-item group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>

                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                    <Github size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <span className="text-sm text-gray-400 uppercase tracking-wide">{project.category}</span>
                <h3 className="text-2xl font-semibold mt-2 mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded group-hover:bg-gray-700 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.filter(p => !p.featured).map((project, i) => (
            <div key={i} className="project-item group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <span className="text-sm text-gray-400 uppercase tracking-wide">{project.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded group-hover:bg-gray-700 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gray-900 rounded-lg p-8">
          <h3 className="text-3xl font-bold mb-8 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <div key={i} className="text-center p-6 bg-gray-800 rounded-lg">
                <div className="flex justify-center mb-4">{a.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{a.title}</h4>
                <p className="text-gray-400 text-sm">{a.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/shivangshivhare"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
