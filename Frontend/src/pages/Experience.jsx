import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <section
      id='experience'
      className='min-h-screen w-full relative bg-black text-white overflow-hidden py-20 px-4'
    >
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute -top-20 -left-14 w-[320px] h-[320px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse' />
        <div className='absolute bottom-0 right-0 w-[340px] h-[340px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500' />
      </div>

      <div className='relative z-10 max-w-5xl mx-auto'>
        <motion.h2
          className='text-4xl sm:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00b8f8] to-[#302b63]'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Experience
        </motion.h2>

        <motion.p
          className='text-center text-white/80 mt-3 mb-12'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          My professional experience and internships in the tech industry
        </motion.p>

        <div className='relative pl-12 sm:pl-16'>
          <div className='absolute left-3 sm:left-5 top-0 bottom-0 w-[2px] bg-white/20' />
          <span className='absolute left-3 sm:left-5 top-8 w-3 h-3 rounded-full bg-[#1cd8d2] shadow-[0_0_16px_rgba(28,216,210,0.9)] -translate-x-1/2' />

          <motion.article
            className='rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-xl'
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <h3 className='text-xl sm:text-2xl font-semibold text-white'>
              Full Stack Developer Intern - Java/J2EE
            </h3>
            <p className='text-[#1cd8d2] mt-2 font-medium'>
              Sasken Technologies Ltd.
            </p>

            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white'>
                June 2, 2025 - July 25, 2025
              </span>
              <span className='text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#1cd8d2]'>
                8-week Internship
              </span>
            </div>

            <ul className='mt-6 space-y-3 text-white/90 leading-relaxed'>
              <li>
                Participated in an 8-week structured summer internship program focused on enterprise application development using Java/J2EE.
              </li>
              <li>
                Developed the FlexiSpot project - a full-stack Seat and Meeting Room Booking System with RESTful APIs using Spring Boot and MySQL, and a responsive UI built in React.js.
              </li>
            </ul>

            <div className='mt-6'>
              <p className='text-sm uppercase tracking-wider text-white/70 mb-2'>Tech Stack</p>
              <div className='flex flex-wrap gap-2'>
                {['Java', 'Spring Boot', 'MySQL', 'React.js'].map((tech) => (
                  <span
                    key={tech}
                    className='text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#1cd8d2]'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export default Experience
