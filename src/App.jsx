import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'publications', 'timeline', 'team', 'impact', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const timelineEvents = [
    { year: '2008', title: 'Company Founded', description: 'iPhase was established with a vision to revolutionize industrial automation.' },
    { year: '2010', title: 'First Product Launch', description: 'Released the first line of smart sensors for manufacturing environments.' },
    { year: '2014', title: 'Expansion into IoT', description: 'Introduced cloud-connected devices that enabled real-time monitoring and analytics.' },
    { year: '2018', title: 'AI Integration', description: 'Launched predictive maintenance solutions powered by machine learning algorithms.' },
    { year: '2022', title: 'Global Reach', description: 'Expanded operations to serve clients in North America, Europe, and Asia-Pacific regions.' },
    { year: '2025', title: 'Next-gen Platform', description: 'Unveiled an all-in-one intelligent control platform for smart factories.' },
  ];

  const products = [
    {
      id: 1,
      name: 'SmartSensor X1',
      description: 'High-precision sensor for real-time environmental monitoring.',
      image: 'https://placehold.co/600x400?text=SmartSensor+X1'
    },
    {
      id: 2,
      name: 'iControl Hub',
      description: 'Centralized control unit for managing connected factory systems.',
      image: 'https://placehold.co/600x400?text=iControl+Hub'
    },
    {
      id: 3,
      name: 'Predictive Analytics Suite',
      description: 'Machine learning-powered software for predictive maintenance.',
      image: 'https://placehold.co/600x400?text=Analytics+Suite'
    },
    {
      id: 4,
      name: 'Edge Gateway',
      description: 'Secure edge computing device for local data processing and connectivity.',
      image: 'https://placehold.co/600x400?text=Edge+Gateway'
    },
  ];

  const teamMembers = [
    {
      name: 'Dr. Emily Zhang',
      role: 'Chief Technology Officer',
      bio: 'Leading innovation in intelligent automation systems with over 15 years of experience in industrial IoT.',
      email: 'ezhang@iphase.com.au',
      linkedin: '#'
    },
    {
      name: 'Michael Thompson',
      role: 'Head of Product Design',
      bio: 'Passionate about human-centered design and creating intuitive interfaces for smart manufacturing environments.',
      email: 'mthompson@iphase.com.au',
      linkedin: '#'
    },
    {
      name: 'Sophia Lee',
      role: 'Senior Software Engineer',
      bio: 'Specializes in AI-powered predictive maintenance and real-time data processing at scale.',
      email: 'slee@iphase.com.au',
      linkedin: '#'
    },
    {
      name: 'David Kim',
      role: 'Operations Director',
      bio: 'Ensures seamless delivery and deployment of iPhase systems across global manufacturing clients.',
      email: 'dkim@iphase.com.au',
      linkedin: '#'
    }
  ];

  const publications = [
    {
      title: 'Real-Time Monitoring of Industrial Processes Using SmartSensor X1',
      authors: 'J. Smith, A. Kumar, M. Lee',
      journal: 'Journal of Industrial Automation, 2024',
      link: '#'
    },
    {
      title: 'Predictive Maintenance Strategies Enabled by iControl Hub',
      authors: 'R. Chen, T. Nguyen',
      journal: 'IEEE Transactions on Manufacturing, 2023',
      link: '#'
    },
    {
      title: 'Edge Computing for Factory Optimization: A Case Study',
      authors: 'L. Williams, P. Patel',
      journal: 'Smart Manufacturing Review, 2025',
      link: '#'
    }
  ];

  const researchData = [
    { year: '2018', pubs: 3 },
    { year: '2019', pubs: 5 },
    { year: '2020', pubs: 7 },
    { year: '2021', pubs: 9 },
    { year: '2022', pubs: 13 },
    { year: '2023', pubs: 18 },
    { year: '2024', pubs: 24 }
  ];

  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <img 
              src="./src/assets/logo.png" 
              alt="iPhase Logo"
              className="h-8 md:h-10 object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8">
            {['Home', 'Products', 'Publications', 'Team', 'About', 'Impact', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className={`hover:text-primary transition-colors ${activeSection === item.toLowerCase().replace(' ', '') ? 'text-primary font-medium' : ''}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                />
                <button className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </div>
            </div>

            <ul className="flex flex-col space-y-4 p-4">
              {['Home', 'Products', 'Publications', 'Team', 'About', 'Impact', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className={`block py-2 hover:text-primary ${activeSection === item.toLowerCase().replace(' ', '') ? 'text-primary font-medium' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-24 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 animate-gradient-x"></div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slideUp text-white drop-shadow-lg">
              Intelligent Automation Solutions for Industry 4.0
            </h1>
            <p className="text-xl mb-8 text-white drop-shadow-md animate-slideUp delay-200">
              Empowering manufacturers with cutting-edge technology to optimize productivity, reduce downtime, and drive innovation.
            </p>
            <div className="flex flex-wrap gap-4 animate-slideUp delay-300">
              <a href="#products" className="px-8 py-3 bg-primary text-white rounded-full hover:bg-[#08244d] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore Products
              </a>
              <a href="#contact" className="px-8 py-3 border border-white text-white rounded-full hover:bg-white/20 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <style jsx>{`
          .animate-gradient-x {
            background: linear-gradient(-45deg, #0A2E5D, #C0392B, #F1C40F, #0A2E5D);
            background-size: 400% 400%;
            animation: gradient-x 15s ease infinite;
            position: absolute;
            width: 100%;
            height: 100%;
          }
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Products</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive suite of intelligent automation solutions designed to meet modern manufacturing challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
                  <a href="#" className="mt-4 inline-block text-primary hover:text-accent font-medium">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Publications Section */}
      <section id="publications" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Scientific Publications</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore research conducted using iPhase technologies across industries and academic institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub, index) => (
              <a 
                key={index} 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2 h-12 text-gray-900 dark:text-white">
                  {pub.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{pub.authors}</p>
                <p className="text-xs text-gray-500 italic">{pub.journal}</p>
                <div className="mt-4 flex items-center text-primary text-sm font-medium">
                  <span>Read more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transform group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Company Timeline</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A visual journey through our evolution and technological advancements.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-800"></div>
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`mb-16 flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
              >
                <div className={`w-full md:w-5/12 p-6 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                  <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium mb-3">
                    {event.year}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-gray-900 shadow-md mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind iPhase’s innovative automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-56 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center">
                  <span className="text-gray-400 dark:text-gray-300 text-2xl font-medium">{member.name.split(' ')[0]}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 h-16">{member.bio}</p>
                  <div className="flex flex-col space-y-2 text-sm">
                    <a href={`mailto:${member.email}`} className="text-gray-500 dark:text-gray-300 hover:text-primary transition-colors">
                      {member.email}
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-300 hover:text-primary transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-lightBg dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary">Our Global Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <Stat end={50} label="Countries" />
            <Stat end={250} label="Clients" />
            <Stat end={18} label="Years Innovation" />
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-3xl font-bold mb-8 text-primary">Research Growth Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={researchData}>
                <XAxis dataKey="year" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0A2E5D', border: 'none', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="pubs" stroke="#C0392B" strokeWidth={3} dot={{ fill: '#C0392B' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-primary">See iControl Hub in Action</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
            <video 
              controls 
              className="w-full h-auto"
              poster="https://placehold.co/800x450?text=Product+Demo"
            >
              <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">In the Field</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
                <img 
                  src={`https://placehold.co/400x300?text=Factory+${i}&bg=1a3e6d&fg=ffffff`} 
                  alt={`Site ${i}`} 
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Have questions or need a custom solution? Our team is ready to help you transform your manufacturing process.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-4 mt-1 text-accent">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <p>123 Innovation Drive<br />Melbourne, Victoria<br />Australia</p>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-4 mt-1 text-accent">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <p>+61 3 8000 0000</p>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-4 mt-1 text-accent">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <p>info@iphase.com.au</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-green-500 mb-4">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-gray-300">Thank you for contacting us. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-primary outline-none focus:ring-1 focus:ring-primary transition"
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-primary outline-none focus:ring-1 focus:ring-primary transition"
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-primary outline-none focus:ring-1 focus:ring-primary transition"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-primary hover:bg-[#08244d] text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Help Button */}
      <button className="fixed bottom-8 left-8 bg-accent text-black p-3 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce z-40">
        💬 Need Help?
      </button>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#home" className="flex items-center">
                <img 
                  src="./src/assets/logow.png" 
                  alt="iPhase Logo" 
                  className="h-8 object-contain"
                />
              </a>
              <p className="mt-2 text-sm">© {new Date().getFullYear()} iPhase Technologies. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">Newsroom</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Stat Counter Component
function Stat({ end, label }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-primary">{count}+</div>
      <div className="text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  );
}