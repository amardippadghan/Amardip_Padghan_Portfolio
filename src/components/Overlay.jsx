import React from 'react';

const Overlay = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-y-auto pointer-events-none">
      <div className="container mx-auto px-4 py-8 pointer-events-auto">
        <header className="flex justify-between items-center mb-20">
          <h1 className="text-4xl font-bold text-neon-cyan tracking-tighter">
            AMARDIP<span className="text-white">.DEV</span>
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#projects" className="text-white hover:text-neon-pink transition-colors">PROJECTS</a></li>
              <li><a href="#education" className="text-white hover:text-neon-pink transition-colors">EDUCATION</a></li>
              <li><a href="#experience" className="text-white hover:text-neon-pink transition-colors">EXPERIENCE</a></li>
              <li><a href="#skills" className="text-white hover:text-neon-pink transition-colors">SKILLS</a></li>
            </ul>
          </nav>
        </header>

        <section className="min-h-screen flex flex-col justify-center items-start mb-20">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">
            AMARDIP <br />
            <span className="text-neon-pink">PADGHAN</span>
          </h2>
          <div className="text-xl text-gray-300 max-w-2xl bg-glass p-6 rounded-lg border-l-4 border-neon-cyan">
             <h3 className="text-2xl font-bold text-neon-cyan mb-2">Full-Stack Developer</h3>
             <p>
              Dynamic full-stack developer with 2 years of experience, delivering scalable web applications and cross-platform mobile solutions that drive operational efficiency. Expertise in a diverse tech stack, including React.js, Node.js, and MongoDB, enhances the ability to innovate through cloud technologies such as Docker and AWS. Proven Leadership in projects that significantly improve user experience and backend performance, alongside a strong commitment to implementing DevOps practices that streamline deployment and automate workflows. Collaboration within development teams fosters impactful results in fast-paced environments, ensuring reliability and responsiveness in software solutions.
             </p>
          </div>
        </section>

        <section id="projects" className="mb-20">
          <h3 className="text-4xl font-bold text-neon-cyan mb-10">PROJECTS_</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Linguest */}
            <div className="bg-glass p-6 rounded-lg hover:border-neon-pink transition-all transform hover:-translate-y-2">
              <div className="h-40 bg-gray-800 mb-4 rounded flex items-center justify-center">
                 <span className="text-neon-cyan text-4xl">L</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Linguest</h4>
              <p className="text-gray-400 mb-4">Multilingual mobile app built with React Native, and designed an admin dashboard using Next.js.</p>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-neon-cyan">React Native</span>
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-neon-cyan">Next.js</span>
              </div>
            </div>

            {/* Home Inspection App */}
            <div className="bg-glass p-6 rounded-lg hover:border-neon-pink transition-all transform hover:-translate-y-2">
              <div className="h-40 bg-gray-800 mb-4 rounded flex items-center justify-center">
                 <span className="text-neon-cyan text-4xl">H</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Home Inspection App</h4>
              <p className="text-gray-400 mb-4">Desktop application using Electron JS, improving cross-platform accessibility.</p>
               <div className="flex space-x-2">
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-neon-cyan">Electron JS</span>
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-neon-cyan">Desktop</span>
              </div>
            </div>

            {/* Interbee */}
            <div className="bg-glass p-6 rounded-lg hover:border-neon-pink transition-all transform hover:-translate-y-2">
               <div className="h-40 bg-gray-800 mb-4 rounded flex items-center justify-center">
                 <span className="text-neon-cyan text-4xl">I</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Interbee</h4>
              <p className="text-gray-400 mb-4">Internship platform web application similar to Internshala, using React.js and Node.js.</p>
               <div className="flex space-x-2">
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-neon-cyan">React.js</span>
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-neon-cyan">Node.js</span>
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-neon-cyan">MongoDB</span>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="mb-20">
          <h3 className="text-4xl font-bold text-neon-cyan mb-10">EDUCATION_</h3>
           <div className="space-y-6">
            <div className="bg-glass p-6 rounded-lg border-l-4 border-neon-pink">
              <h4 className="text-2xl font-bold text-white">B.Tech in Information Technology</h4>
              <p className="text-neon-cyan">GH Raisoni College of Engineering And Management | 07/2020 - 06/2024</p>
              <p className="text-gray-400 mt-2">CGPA - 8.45</p>
            </div>
            <div className="bg-glass p-6 rounded-lg border-l-4 border-neon-pink">
              <h4 className="text-2xl font-bold text-white">HSC</h4>
              <p className="text-neon-cyan">Jankidevi Jr College | 06/2018 - 03/2019</p>
              <p className="text-gray-400 mt-2">Percentage - 84.46 %</p>
            </div>
            <div className="bg-glass p-6 rounded-lg border-l-4 border-neon-pink">
              <h4 className="text-2xl font-bold text-white">SSC</h4>
              <p className="text-neon-cyan">Radhabai Khedekar Vidhyalay | 07/2016 - 03/2017</p>
              <p className="text-gray-400 mt-2">Percentage - 93.20 %</p>
            </div>
          </div>
        </section>

         <section id="experience" className="mb-20">
          <h3 className="text-4xl font-bold text-neon-cyan mb-10">EXPERIENCE_</h3>
           <div className="space-y-6">
            <div className="bg-glass p-6 rounded-lg relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-1 h-full bg-neon-cyan group-hover:h-full transition-all duration-300"></div>
              <h4 className="text-2xl font-bold text-white pl-4">Full-Stack Developer</h4>
              <p className="text-neon-pink pl-4">Aariyatech Pvt Ltd | 06/2024 - Present</p>
              <p className="text-gray-400 mt-2 pl-4">
                Developed and deployed serverless applications using Node.js, Express.js, MongoDB, and NestJS. Led the development of Linguest, a multilingual mobile app built with React Native. Implemented cloud-based solutions and CI/CD pipelines.
              </p>
            </div>
             <div className="bg-glass p-6 rounded-lg relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-1 h-full bg-neon-cyan group-hover:h-full transition-all duration-300"></div>
              <h4 className="text-2xl font-bold text-white pl-4">MERN Stack Developer</h4>
              <p className="text-neon-pink pl-4">Virtuebyte Pvt Ltd | 03/2023 - 06/2024</p>
              <p className="text-gray-400 mt-2 pl-4">
                Developed a Home Inspection desktop application using Electron JS. Led the development of Interbee, an internship platform using React.js and Node.js. Collaborated with cross-functional teams to build scalable web solutions.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-20">
          <h3 className="text-4xl font-bold text-neon-cyan mb-10">SKILLS_</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-glass p-6 rounded-lg border-t-4 border-neon-pink">
              <h4 className="text-xl font-bold text-white mb-4">Frontend Development</h4>
              <p className="text-gray-300">React JS, Next JS, Redux, React Native, Electron JS, Ionic Framework, Svelte</p>
            </div>
            <div className="bg-glass p-6 rounded-lg border-t-4 border-neon-cyan">
              <h4 className="text-xl font-bold text-white mb-4">Backend Development</h4>
              <p className="text-gray-300">Node JS, Express JS, NestJS, Spring Boot</p>
            </div>
            <div className="bg-glass p-6 rounded-lg border-t-4 border-neon-pink">
              <h4 className="text-xl font-bold text-white mb-4">Databases</h4>
              <p className="text-gray-300">MongoDB, SQL, PostgreSQL</p>
            </div>
            <div className="bg-glass p-6 rounded-lg border-t-4 border-neon-cyan">
              <h4 className="text-xl font-bold text-white mb-4">DevOps & Cloud</h4>
              <p className="text-gray-300">Docker, AWS, Kubernetes, Terraform, Bitbucket, Pipeline, GitHub Actions</p>
            </div>
             <div className="bg-glass p-6 rounded-lg border-t-4 border-neon-pink">
              <h4 className="text-xl font-bold text-white mb-4">Languages</h4>
              <p className="text-gray-300">Java, JavaScript, C++, C, Python</p>
            </div>
            <div className="bg-glass p-6 rounded-lg border-t-4 border-neon-cyan">
              <h4 className="text-xl font-bold text-white mb-4">Other</h4>
              <p className="text-gray-300">Bitbucket, JIRA, GitHub, Postman, VS Code, Cursor</p>
            </div>
          </div>
        </section>

        <footer className="text-center pb-8 text-gray-500">
          <p className="mb-2">&copy; 2025 Amardip Padghan. All rights reserved. <span className="text-neon-cyan">System Online.</span></p>
          <div className="flex justify-center space-x-4">
             <a href="mailto:amardippadghan@gmail.com" className="hover:text-neon-pink transition-colors">Email</a>
             <a href="https://www.linkedin.com/in/amardippadghan" target="_blank" rel="noopener noreferrer" className="hover:text-neon-pink transition-colors">LinkedIn</a>
             <a href="https://github.com/amardippadghan" target="_blank" rel="noopener noreferrer" className="hover:text-neon-pink transition-colors">GitHub</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Overlay;
