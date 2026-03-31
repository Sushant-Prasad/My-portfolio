import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import avatar from '../assets/avatar2.png'

const Contact = () => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init({ publicKey: PUBLIC_KEY })
    }
  }, [PUBLIC_KEY])

  const onSubmit = async (e) => {
    e.preventDefault()

    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!form.email.trim()) nextErrors.email = 'Email is required.'
    else if (!emailRegex.test(form.email.trim())) nextErrors.email = 'Enter a valid email address.'
    if (!form.message.trim()) nextErrors.message = 'Message is required.'

    setErrors(nextErrors)
    setStatus('')

    if (Object.keys(nextErrors).length > 0) return

    try {
      setSubmitting(true)

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        setStatus('EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in Frontend .env file.')
        return
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim() || `Portfolio Contact from ${form.name.trim()}`,
        time: new Date().toLocaleString('en-IN', {
          dateStyle: 'medium',
          timeStyle: 'short',
        }),
        message: form.message.trim(),
      })

      setStatus('Message sent successfully. Check your inbox for the new contact email.')
      setForm({ name: '', email: '', subject: '', message: '' })
      setErrors({})
    } catch {
      setStatus('Unable to send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id='contact'
      className='min-h-screen w-full relative bg-black text-white overflow-hidden py-20 px-4'
    >
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute -top-24 -left-24 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2] opacity-25 blur-[130px] animate-pulse' />
        <div className='absolute -bottom-24 -right-24 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2] opacity-25 blur-[130px] animate-pulse delay-500' />
      </div>

      <div className='relative z-10 max-w-5xl mx-auto'>
        <motion.h2
          className='text-4xl sm:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00b8f8] to-[#302b63]'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className='text-center text-white/80 mt-3 mb-10'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Have a project or opportunity in mind? Send me a message.
        </motion.p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch'>
          <motion.div
            className='rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-5 sm:p-6 shadow-xl flex items-center justify-center min-h-[320px]'
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <img
              src={avatar}
              alt='Sushant Prasad'
              className='w-full max-w-[360px] object-contain select-none'
            />
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            className='rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-xl'
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label htmlFor='name' className='text-sm text-white/80'>
                  Your Name
                </label>
                <input
                  id='name'
                  name='name'
                  value={form.name}
                  onChange={onChange}
                  required
                  className='mt-2 w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#1cd8d2]'
                  placeholder='Enter your name'
                />
                {errors.name && <p className='mt-1 text-xs text-red-400'>{errors.name}</p>}
              </div>

              <div>
                <label htmlFor='email' className='text-sm text-white/80'>
                  Your Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={form.email}
                  onChange={onChange}
                  required
                  className='mt-2 w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#1cd8d2]'
                  placeholder='Enter your email'
                />
                {errors.email && <p className='mt-1 text-xs text-red-400'>{errors.email}</p>}
              </div>
            </div>

            <div className='mt-4'>
              <label htmlFor='subject' className='text-sm text-white/80'>
                Subject
              </label>
              <input
                id='subject'
                name='subject'
                value={form.subject}
                onChange={onChange}
                className='mt-2 w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#1cd8d2]'
                placeholder='Message subject'
              />
            </div>

            <div className='mt-4'>
              <label htmlFor='message' className='text-sm text-white/80'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={form.message}
                onChange={onChange}
                required
                rows={6}
                className='mt-2 w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#1cd8d2] resize-none'
                placeholder='Write your message...'
              />
              {errors.message && <p className='mt-1 text-xs text-red-400'>{errors.message}</p>}
            </div>

            <motion.button
              type='submit'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              disabled={submitting}
              className='mt-6 inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-white bg-gradient-to-r from-[#1cd8d2] via-[#00b8f8] to-[#302b63] shadow-lg'
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            
            {status && <p className='mt-2 text-sm text-white/80'>{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
