import React from 'react'
import { motion } from 'framer-motion'
import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa6'
import ParticlesBackground from '../components/ParticlesBackground'

const Footer = () => {
  const socials = [
    
    { Icon: FaXTwitter, href: 'https://x.com/i_sushant1', label: 'X' },
    { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/sushant-prasad/', label: 'LinkedIn' },
    { Icon: FaGithub, href: 'https://github.com/Sushant-Prasad', label: 'GitHub' },
  ]

  return (
    <footer className='relative w-full h-[26vh] min-h-[210px] overflow-hidden bg-black text-white px-4 flex items-center'>
      <ParticlesBackground />
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute -top-16 left-[8%] w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2] opacity-20 blur-[130px]' />
        <div className='absolute -bottom-20 right-[15%] w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#1cd8d2] via-[#00b8f8] to-[#302b63] opacity-15 blur-[140px]' />
      </div>

      <motion.div
        className='relative z-10 max-w-4xl mx-auto text-center'
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <h2 className='text-3xl md:text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600'>Sushant Prasad</h2>

        <div className='mx-auto mt-2 h-[2px] w-24 rounded-full bg-gradient-to-r from-[#00b8f8] to-[#1cd8d2]' />

        <div className='mt-4 flex justify-center items-center gap-4 text-xl text-white/80'>
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white hover:scale-110 transition-all duration-300'
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className='mt-5 text-sm md:text-base italic text-white/95'>
          "Success is when preparation meets opportunity."
        </p>

        <p className='mt-4 text-xs text-white/70'>
          &copy; 2026 Sushant Prasad. All rights reserved.
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer
