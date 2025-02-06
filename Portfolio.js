import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaLink,FaDownload, FaEnvelope } from "react-icons/fa6";
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaGithub as FaGithubIcon } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiTailwindcss, SiTypescript, SiNextdotjs, SiExpress, SiMui, SiFramer } from "react-icons/si";

const skillIcons = {
  ReactJS: FaReact, NextJS: SiNextdotjs, TypeScript: SiTypescript, Tailwind: SiTailwindcss,
  MUI: SiMui, Framer: SiFramer, NodeJS: FaNodeJs, Express: SiExpress,
  PostgreSQL: SiPostgresql, MongoDB: SiMongodb, Git: FaGitAlt, GitHub: FaGithubIcon,
  Docker: FaDocker, AWS: FaAws
};

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit" };
      setTime(new Intl.DateTimeFormat("en-IN", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  

  const projects = [
    {
      title: "Car Rental Platform",
      desc: "A full-stack car rental system with real-time availability and secure payment integration.",
      tech: ["ReactJS", "NextJS", "NodeJS", "MongoDB"],
      live: "https://www.tanaykmr.com/",
      github: "https://github.com/your-repo"
    },
    {
      title: "Emotion Detection using CNN",
      desc: "AI-based emotion detection using a dataset of 10,000 images.",
      tech: ["Python", "TensorFlow", "PostgreSQL"],
      live: "https://emotion-detect.example.com",
      github: "https://github.com/your-repo"
    },
    {
      title: "Task Manager App",
      desc: "A full-stack task management application to track daily tasks.",
      tech: ["ReactJS", "NodeJS", "PostgreSQL"],
      live: "https://task-manager.example.com",
      github: "https://github.com/your-repo"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
      
       {/* Profile Section */}
<div className="flex justify-center">
  <motion.div 
    className="bg-gray-900 w-full max-w-4xl p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6 relative"
    initial={{ opacity: 0, y: 20 }}  // Starts lower
    animate={{ opacity: 1, y: 0 }}   // Moves up smoothly
    transition={{ duration: 0.5 }}   // Animation duration
  >
    {/* Profile Image */}
    <img
      src="/profile.jpg"
      alt="Profile"
      className="w-24 h-24 rounded-xl object-cover border-4 border-gray-700 shadow-md"
    />

    {/* Profile Info */}
    <div className="text-center md:text-left">
    <h2 className="text-3xl font-bold font-[calibri]">Mohammed Sami</h2>


      <p className="text-gray-400 font-[calibri] text-lg border-l-4 border-gray-600 pl-3 mt-2">
        Software Engineer
      </p>

      {/* Social Links */}
      <div className="flex gap-4 mt-3 justify-center md:justify-start">
        {[
          { icon: FaGithub, link: "https://github.com" },
          { icon: FaLinkedin, link: "https://linkedin.com" },
          { icon: FaXTwitter, link: "https://twitter.com" },
          { icon: FaDownload, link: "/resume.pdf", download: true }
        ].map(({ icon: Icon, link, download }, i) => (
          <motion.a 
            key={i} 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            download={download}
            whileHover={{ scale: 1.2 }}
            className="bg-gray-800 p-2 rounded-full border border-gray-700 hover:border-blue-400 transition-all"
          >
            <Icon size={20} className="text-gray-400 hover:text-blue-400 transition-all" />
          </motion.a>
        ))}
      </div>
    </div>

    {/* Fixed IST Time */}
    <div className="absolute top-2 right-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 text-gray-300 text-sm">
      IST: {time}
    </div>
  </motion.div>
</div>


        {/* About Me */}
        <section className="mt-10 text-center md:text-left">
        <motion.section 
          className="mt-10 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold">About Me.</h2>
          <p className="text-gray-300 mt-2">I'm Tanay Kumar, a Computer Science undergraduate passionate about full-stack development. I love building real-world solutions.</p>
          <p className="text-gray-300 mt-2">My main stack includes React.js, Next.js, Node.js, and TypeScript with MongoDB or PostgreSQL.</p>
        </motion.section>

        {/* Skills & Tools with Animation */}
        <motion.section 
          className="mt-10 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold">Skills & Tools.</h2>
          <motion.div 
            className="flex flex-wrap justify-center md:justify-start gap-3 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {Object.entries(skillIcons).map(([skill, Icon]) => (
              <motion.div 
                key={skill} 
                className="px-4 py-2 rounded-lg bg-gray-900 flex items-center gap-2 border border-gray-700 transition-all group"
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="text-gray-400 group-hover:text-blue-400 transition-all" size={20} /> {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        </section>

     {/* Projects with Staggered Animation */}
     <section className="mt-10 text-center md:text-left">
          <h2 className="text-xl font-bold">Projects.</h2>
          <motion.div 
            className="mt-4 flex flex-col gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {projects.slice(0, showMore ? projects.length : 2).map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-900 p-4 rounded-lg border border-gray-700 shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.desc}</p>
                <div className="flex gap-3 mt-3">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-400 flex items-center gap-1">
                    <FaLink /> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 flex items-center gap-1">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-6 text-center">
            <button 
              className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 hover:border-blue-400 transition-all"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </section>

        {/* Reach Out with Animation */}
        <motion.section 
          className="mt-10 text-center md:text-left"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold">Reach out to me.</h2>
          <p className="text-gray-300 mt-2">Feel free to contact me for collaborations or opportunities.</p>
          <div className="flex gap-3 mt-4 justify-center md:justify-start">
            {[{ icon: FaXTwitter, link: "https://twitter.com", label: "Twitter" },
              { icon: FaEnvelope, link: "mailto:example@example.com", label: "Mail" }
            ].map(({ icon: Icon, link, label }, i) => (
              <motion.a 
                key={i} 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 rounded-lg bg-gray-900 flex items-center gap-2 border border-gray-700 transition-all group"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Icon className="text-gray-400 group-hover:text-blue-400 transition-all" size={20} /> {label}
              </motion.a>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Portfolio;
