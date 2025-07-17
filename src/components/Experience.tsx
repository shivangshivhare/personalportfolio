import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, ExternalLink, Award, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const experienceCards = gsap.utils.toArray('.experience-card');

    gsap.fromTo('.experience-title',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.timeline-line',
      { scaleY: 0, transformOrigin: 'top' },
      {
        scaleY: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    experienceCards.forEach((card, index) => {
      const isEven = index % 2 === 0;

      gsap.fromTo(card as Element,
        { x: isEven ? -100 : 100, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card as Element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(`.timeline-dot-${index}`,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card as Element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      const cardElement = card as HTMLElement;

      cardElement.addEventListener('mouseenter', () => {
        gsap.to(cardElement, {
          scale: 1.02,
          y: -5,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(cardElement.querySelector('.experience-icon'), {
          rotation: 360,
          duration: 0.6,
          ease: 'power2.out'
        });
      });

      cardElement.addEventListener('mouseleave', () => {
        gsap.to(cardElement, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    gsap.to('.experience-bg', {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const experiences = [
    {
      company: 'Alignerr',
      position: 'Machine Learning Model Tester',
      type: 'Freelance',
      duration: 'Nov 2024 – Apr 2025',
      location: 'Remote',
      description:
        'Worked on enhancing the reliability and performance of machine learning models used for advanced analysis. Focused on testing with edge-case inputs and refining prompt engineering strategies.',
      achievements: [
        'Improved ML model efficiency and stability by 15%',
        'Developed reusable frameworks for model validation',
        'Reported and tracked model failure patterns for dev teams'
      ],
      skills: ['Python', 'Machine Learning', 'Prompt Engineering', 'Model Testing'],
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="experience-bg absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-black rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gray-800 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="experience-title text-5xl md:text-6xl font-bold mb-6">
            Professional Experience
          </h2>
          <p className="experience-title text-xl text-gray-600 max-w-3xl mx-auto">
            Hands-on experience with machine learning, system testing, and product optimization in a real-world freelance setup.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-black h-full hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`experience-card relative flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex-col lg:space-x-8`}>
                
                {/* Dot */}
                <div className={`timeline-dot-${index} absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg z-10 hidden lg:block`}></div>

                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} flex-1`}>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="experience-icon text-black">{exp.icon}</div>
                          <span className="text-sm text-gray-500 uppercase tracking-wide font-medium">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                        <h4 className="text-xl font-semibold text-gray-700 mb-2">{exp.company}</h4>
                      </div>
                    </div>

                    <div className={`flex items-center space-x-4 mb-4 text-gray-600 ${
                      index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                    } justify-start`}>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">{exp.description}</p>

                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <TrendingUp size={16} className="mr-2" />
                        Key Achievements
                      </h5>
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                        {exp.achievements.map((a, i) => (
                          <li key={i} className="text-gray-600 text-sm flex items-start">
                            <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                    } justify-start`}>
                      {exp.skills.map((s, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-black hover:text-white transition-colors duration-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-5/12 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Open to Opportunities</h3>
            <p className="text-gray-600 mb-6">
              I’m looking for internship and full-time roles where I can contribute to high-impact tech teams and grow as a software developer.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Let's Connect</span>
              <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
