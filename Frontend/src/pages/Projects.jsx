import React from 'react'
import { motion } from 'framer-motion'
import donateDelightImg from '../assets/DonateDelight.png'
import FlexiSpot from '../assets/FlexiSpot.png'
import PrepMate from '../assets/PrepMate.png'
import todoImg from '../assets/todo.png'

const Projects = () => {
 const projects = [
  {
    title: 'PrepMate',
    desc: 'A full-stack learning platform for DSA and aptitude practice with user authentication, streak tracking, code execution integration, and personalized dashboard features.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'React Query'],
    image: PrepMate,
    live: '#',
    code: 'https://github.com/Sushant-Prasad/PrepMate-MERN',
  },
  {
    title: 'FlexiSpot',
    desc: 'A full-stack seat and meeting room booking system with real-time availability, booking, and cancellation features using scalable REST APIs and a responsive UI.',
    tech: ['React.js', 'Spring Boot', 'MySQL', 'Tailwind CSS'],
    image: FlexiSpot,
    live: 'https://flexispot.onrender.com',
    code: 'https://github.com/Sushant-Prasad/FlexiSpot',
  },
  {
    title: 'DonateDelight',
    desc: 'A web-based donation platform connecting donors with NGOs for food, clothes, and monetary contributions with a clean and user-friendly interface.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
    image: donateDelightImg,
    live: 'https://donatedelight.onrender.com',
    code: 'https://github.com/Sushant-Prasad/DonateDelight',
  },
  {
    title: 'Todo App',
    desc: 'A full-stack task management application with CRUD operations, real-time updates, and efficient state management for tracking daily activities.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'React Query'],
    image: todoImg,
    live: 'https://todo-frontend-lmer.onrender.com',
    code: 'https://github.com/Sushant-Prasad/TODO',
  },
];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  }

  return (
    <section
      id='projects'
      className='min-h-screen w-full relative bg-black text-white overflow-hidden py-20 px-4'
    >
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute -top-20 -left-16 w-[320px] h-[320px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse' />
        <div className='absolute bottom-0 right-0 w-[340px] h-[340px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500' />
      </div>

      <div className='relative z-10 max-w-6xl mx-auto'>
        <motion.h2
          className='text-4xl sm:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00b8f8] to-[#302b63]'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Projects
        </motion.h2>

        <motion.p
          className='text-center text-white/80 mt-3 mb-12'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Selected work built with performance, clean architecture, and scalable design in mind.
        </motion.p>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={item}
              whileHover={{ y: -6, scale: 1.01 }}
              className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-xl'
            >
              <div className='rounded-xl overflow-hidden border border-white/10 mb-5'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-44  transition-transform duration-500 hover:scale-105'
                  loading='lazy'
                />
              </div>
              <h3 className='text-xl font-semibold text-white'>{project.title}</h3>
              <p className='text-white/75 text-sm mt-3 leading-relaxed'>{project.desc}</p>

              <div className='flex flex-wrap gap-2 mt-4'>
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className='text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[#1cd8d2]'
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className='mt-6 flex items-center gap-3'>
                <a
                  href={project.live}
                  className='px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition'
                >
                  Live
                </a>
                <a
                  href={project.code}
                  className='px-4 py-2 rounded-lg border border-white/25 bg-white/10 hover:bg-white/20 transition'
                >
                  Code
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
