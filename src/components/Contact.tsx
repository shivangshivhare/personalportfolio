import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo('.contact-content',
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    gsap.to('.submit-btn', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    data.append('_captcha', 'false');
    data.append('_template', 'table');
    data.append('_subject', `Portfolio Contact: ${formData.subject}`);

    try {
      const response = await fetch("https://formsubmit.co/el/mazilo", {
        method: "POST",
        body: data
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: false });
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => {
          setStatus({ submitting: false, submitted: false, error: false });
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: true });
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="contact-content text-5xl md:text-6xl font-bold mb-6">Let's Connect</h2>
          <p className="contact-content text-xl text-gray-600 max-w-3xl mx-auto">
            I'm actively seeking internship and full-time opportunities. Let’s collaborate to create something impactful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info and Socials */}
          <div className="space-y-8">
            <div className="contact-content">
              <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                I’m in my final year of Computer Science Engineering at LNCT Bhopal, and I’m excited to bring my skills into real-world applications. Whether it’s a freelance project, internship, or collaboration — I’m open to conversations.
              </p>
            </div>

            <div className="contact-content space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-black text-white rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:iamshivangshivhare@gmail.com" className="text-gray-600 hover:text-black transition-colors">
                    iamshivangshivhare@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-black text-white rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Bhopal, Madhya Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="contact-content">
              <h4 className="text-xl font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/shivangshivhare" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-gray-200 rounded-lg hover:bg-black hover:text-white transition-all duration-300">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/shivangrajshivhare" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-gray-200 rounded-lg hover:bg-black hover:text-white transition-all duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="https://leetcode.com/u/iamshivangshivhare/" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-gray-200 rounded-lg hover:bg-black hover:text-white transition-all duration-300">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="contact-content">
              <h4 className="text-xl font-semibold mb-4">What I Bring</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>Strong foundation in AI, Data Science, and System Design</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>400+ LeetCode problems and 3 major deployed projects</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>Freelance experience solving 150+ CS problems (Chegg)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>Leadership in SIH Hackathon and academic research</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-content">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm space-y-6">
              <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" required placeholder="Your Name"
                  value={formData.name} onChange={handleInputChange}
                  className="col-span-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black transition-all" />
                <input type="email" name="email" required placeholder="you@example.com"
                  value={formData.email} onChange={handleInputChange}
                  className="col-span-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black transition-all" />
              </div>

              <input type="text" name="subject" required placeholder="Subject"
                value={formData.subject} onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black transition-all" />

              <textarea name="message" required rows={6} placeholder="Your message..."
                value={formData.message} onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black transition-all" />

              <button type="submit" disabled={status.submitting}
                className={`submit-btn w-full text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${status.submitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-black hover:bg-gray-800'}`}>
                <Send size={20} />
                <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
              </button>

              {status.submitted && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <p className="font-medium">Thank you! Your message has been sent.</p>
                </div>
              )}

              {status.error && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <p className="font-medium">Something went wrong. Please try again later.</p>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="contact-content text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">© 2025 Shivang Raj Shivhare. All rights reserved.</p>
          <p className="text-sm text-gray-500">
            Built with React, TypeScript, GSAP & Tailwind CSS •{" "}
            <a href="https://github.com/shivangshivhare/personalportfolio" className="hover:text-black ml-1" target="_blank" rel="noopener noreferrer">
              View Source
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
