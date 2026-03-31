import React from 'react'
import { motion } from 'framer-motion'

const Error = () => {
  return (
    <section className='w-full min-h-screen relative bg-black overflow-hidden flex items-center justify-center px-4'>
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute -top-24 -left-24 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2] opacity-25 blur-[130px] animate-pulse' />
        <div className='absolute -bottom-24 -right-24 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2] opacity-25 blur-[130px] animate-pulse delay-500' />
      </div>

      <motion.div
        className='relative z-10 max-w-2xl text-center text-white'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className='text-[#1cd8d2] text-lg tracking-wide'>Oops! Something went wrong</p>
        <h1 className='mt-3 text-6xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00b8f8] to-[#302b63]'>
          404
        </h1>
        <h2 className='mt-3 text-2xl sm:text-3xl font-semibold'>Page Not Found</h2>
        <p className='mt-4 text-white/75'>
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className='mt-8 flex items-center justify-center gap-3'>
          <a
            href='#home'
            className='px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#1cd8d2] via-[#00b8f8] to-[#302b63] hover:opacity-90 transition'
          >
            Go Home
          </a>
          <button
            type='button'
            onClick={() => window.location.reload()}
            className='px-6 py-3 rounded-lg font-semibold text-white border border-white/20 bg-white/10 hover:bg-white/20 transition'
          >
            Refresh
          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default Error
