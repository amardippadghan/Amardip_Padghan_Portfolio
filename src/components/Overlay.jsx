import React from 'react';

const Overlay = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-y-auto pointer-events-none">
      <div className="container mx-auto px-4 py-8 pointer-events-auto">
        <header className="flex justify-between items-center mb-20">
          <h1 className="text-4xl font-bold text-neon-cyan tracking-tighter">
            JULES<span className="text-white">.DEV</span>
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#projects" className="text-white hover:text-neon-pink transition-colors">PROJECTS</a></li>
              <li><a href="#education" className="text-white hover:text-neon-pink transition-colors">EDUCATION</a></li>
              <li><a href="#experience" className="text-white hover:text-neon-pink transition-colors">EXPERIENCE</a></li>
            </ul>
          </nav>
        </header>

        <section className="min-h-screen flex flex-col justify-center items-start mb-20">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">
            FUTURE <br />
            <span className="text-neon-pink">IS NOW</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-lg bg-glass p-6 rounded-lg border-l-4 border-neon-cyan">
            Welcome to my interactive portfolio. I build immersive digital experiences using modern web technologies.
          </p>
        </section>

        <section id="projects" className="mb-20">
          <h3 className="text-4xl font-bold text-neon-cyan mb-10">PROJECTS_</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dummy Project 1 */}
            <div className="bg-glass p-6 rounded-lg hover:border-neon-pink transition-all transform hover:-translate-y-2">
              <div className="h-40 bg-gray-800 mb-4 rounded flex items-center justify-center">
                 <span className="text-neon-cyan text-4xl">P1</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Neon City</h4>
              <p className="text-gray-400 mb-4">A procedural city generator using Three.js and WebGL.</p>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-neon-cyan">Three.js</span>
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-neon-cyan">React</span>
              </div>
            </div>

            {/* Dummy Project 2 */}
            <div className="bg-glass p-6 rounded-lg hover:border-neon-pink transition-all transform hover:-translate-y-2">
              <div className="h-40 bg-gray-800 mb-4 rounded flex items-center justify-center">
                 <span className="text-neon-cyan text-4xl">P2</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Cyber eCommerce</h4>
              <p className="text-gray-400 mb-4">Next-gen shopping experience with AR product preview.</p>
               <div className="flex space-x-2">
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-neon-cyan">Next.js</span>
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-neon-cyan">Stripe</span>
              </div>
            </div>

            {/* Dummy Project 3 */}
            <div className="bg-glass p-6 rounded-lg hover:border-neon-pink transition-all transform hover:-translate-y-2">
               <div className="h-40 bg-gray-800 mb-4 rounded flex items-center justify-center">
                 <span className="text-neon-cyan text-4xl">P3</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">AI Dashboard</h4>
              <p className="text-gray-400 mb-4">Real-time data visualization for AI metrics.</p>
               <div className="flex space-x-2">
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-neon-cyan">D3.js</span>
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-neon-cyan">Python</span>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="mb-20">
          <h3 className="text-4xl font-bold text-neon-cyan mb-10">EDUCATION_</h3>
           <div className="space-y-6">
            <div className="bg-glass p-6 rounded-lg border-l-4 border-neon-pink">
              <h4 className="text-2xl font-bold text-white">Master of Computer Science</h4>
              <p className="text-neon-cyan">Tech University of Future | 2023 - 2025</p>
              <p className="text-gray-400 mt-2">Specialized in Artificial Intelligence and Computer Graphics.</p>
            </div>
            <div className="bg-glass p-6 rounded-lg border-l-4 border-neon-pink">
              <h4 className="text-2xl font-bold text-white">Bachelor of Engineering</h4>
              <p className="text-neon-cyan">Institute of Technology | 2019 - 2023</p>
              <p className="text-gray-400 mt-2">Major in Software Engineering. Graduated with Honors.</p>
            </div>
          </div>
        </section>

         <section id="experience" className="mb-20">
          <h3 className="text-4xl font-bold text-neon-cyan mb-10">EXPERIENCE_</h3>
           <div className="space-y-6">
            <div className="bg-glass p-6 rounded-lg relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-1 h-full bg-neon-cyan group-hover:h-full transition-all duration-300"></div>
              <h4 className="text-2xl font-bold text-white pl-4">Senior Frontend Developer</h4>
              <p className="text-neon-pink pl-4">CyberCorp Industries | 2025 - Present</p>
              <p className="text-gray-400 mt-2 pl-4">Leading a team of developers to build the next generation of web interfaces using WebGL and WebAssembly.</p>
            </div>
             <div className="bg-glass p-6 rounded-lg relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-1 h-full bg-neon-cyan group-hover:h-full transition-all duration-300"></div>
              <h4 className="text-2xl font-bold text-white pl-4">Full Stack Engineer</h4>
              <p className="text-neon-pink pl-4">StartupX | 2023 - 2025</p>
              <p className="text-gray-400 mt-2 pl-4">Developed scalable microservices and responsive frontends for a high-traffic e-commerce platform.</p>
            </div>
          </div>
        </section>

        <footer className="text-center pb-8 text-gray-500">
          <p>&copy; 2025 Jules. All rights reserved. <span className="text-neon-cyan">System Online.</span></p>
        </footer>
      </div>
    </div>
  );
};

export default Overlay;
