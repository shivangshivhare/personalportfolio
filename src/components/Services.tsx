import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Database, Brain, Smartphone, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo('.skill-item',
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.skills-title',
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

  const skills = [
    {
      icon: <Code size={40} />,
      number: '01',
      title: 'Programming Languages',
      description: 'Strong foundation in structured and object-oriented programming with real-world implementation in projects.',
      technologies: ['Python', 'C++', 'Java']
    },
    {
      icon: <Brain size={40} />,
      number: '02',
      title: 'Artificial Intelligence & ML',
      description: 'Working with supervised learning algorithms and model deployment for healthcare and automation solutions.',
      technologies: ['Pandas', 'NumPy', 'scikit-learn', 'Jupyter']
    },
    {
      icon: <Smartphone size={40} />,
      number: '03',
      title: 'Full Stack Web Development',
      description: 'Building responsive, dynamic web applications with frontend-backend integration and RESTful APIs.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS']
    },
    {
      icon: <Database size={40} />,
      number: '04',
      title: 'Database & Backend',
      description: 'Experienced in schema design, SQL queries, and backend services for CRUD and analytics workflows.',
      technologies: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase']
    },
    {
      icon: <Zap size={40} />,
      number: '05',
      title: 'Problem Solving',
      description: 'Consistent DSA practice on LeetCode and platforms like HackerRank to improve logic and performance.',
      technologies: ['Data Structures', 'Algorithms', 'OOPs Concepts']
    },
    {
      icon: <Code size={40} />,
      number: '06',
      title: 'Tools & DevOps',
      description: 'Efficient at using development tools and platforms for testing, collaboration, and deployment.',
      technologies: ['Git', 'GitHub', 'Postman', 'VS Code']
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="skills-title text-5xl md:text-6xl font-bold mb-6">
            Technical Skills
          </h2>
          <p className="skills-title text-xl text-gray-600 max-w-3xl mx-auto">
            Core technical expertise developed through academic training, internship experience, and personal projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item group bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-black group-hover:text-blue-600 transition-colors duration-300">
                  {skill.icon}
                </div>
                <span className="text-4xl font-bold text-gray-200 group-hover:text-gray-400 transition-colors duration-300">
                  {skill.number}
                </span>
              </div>

              <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {skill.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Technologies Snapshot</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Languages</h4>
                <p className="text-sm text-gray-600">Python, C++, Java, JavaScript, SQL</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Frontend</h4>
                <p className="text-sm text-gray-600">React.js, HTML5, Tailwind CSS</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Backend</h4>
                <p className="text-sm text-gray-600">Node.js, Firebase, MongoDB</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Tools</h4>
                <p className="text-sm text-gray-600">Git, GitHub, Postman, VS Code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
