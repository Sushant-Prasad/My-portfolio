import React from 'react'
import { motion } from 'framer-motion'
import ParticlesBackground from '../components/ParticlesBackground'

const Education = () => {
	const timeline = [
		{
			title: 'Bachelor of Technology in Computer Science Engineering',
			school: 'Abacus Institute of Engineering and Management',
			board: 'Maulana Abul Kalam Azad University of Technology, West Bengal',
			year: 'July 2022 - 2026',
			score: 'CGPA: 8.62',
		},
		{
			title: 'Higher Secondary (XII)',
			school: 'Shree Jain Vidyalaya',
			board: 'WBCHSE | Kolkata',
			year: '2021',
			score: '80%',
		},
		{
			title: 'Secondary (X)',
			school: 'Kushwaha Kshatriya Vidyalaya (High School)',
			board: 'WBBSE | Uttarpara',
			year: '2019',
			score: '83.3%',
		},
	]

	return (
		<section
			id='education'
			className='min-h-screen w-full relative bg-black text-white overflow-hidden py-20 px-4'
		>
      <ParticlesBackground />
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute -top-16 -left-12 w-[320px] h-[320px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse' />
				<div className='absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500' />
			</div>

			<div className='relative z-10 max-w-6xl mx-auto'>
				<motion.h2
					className='text-4xl sm:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00b8f8] to-[#302b63]'
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true, amount: 0.3 }}
				>
					Education
				</motion.h2>

				<p className='text-center text-white/80 mt-3 mb-14'>
					Academic journey in a branch timeline view
				</p>

				<div className='relative'>
					<div className='absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/20 md:-translate-x-1/2' />

					<div className='space-y-10'>
						{timeline.map((item, index) => (
							<motion.div
								key={item.title}
								className='relative'
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.45, delay: index * 0.08 }}
								viewport={{ once: true, amount: 0.25 }}
							>
								<span className='absolute left-5 md:left-1/2 top-7 w-3 h-3 rounded-full bg-[#1cd8d2] shadow-[0_0_18px_rgba(28,216,210,0.9)] -translate-x-1/2 z-10' />

								<div className='pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 items-start'>
									<div className={index % 2 === 0 ? 'md:col-start-1 md:pr-8' : 'md:col-start-2 md:pl-8'}>
										<div className='hidden md:block absolute top-8 w-10 h-[2px] bg-white/20'>
											<span className='sr-only'>branch</span>
										</div>

										<article className='rounded-xl border border-white/15 bg-white/5 backdrop-blur-md p-5 shadow-xl'>
											<h3 className='text-lg sm:text-xl font-semibold text-white'>{item.title}</h3>
											<p className='mt-3 text-white/90'>{item.school}</p>
											<p className='text-white/70 text-sm mt-1'>{item.board}</p>

											<div className='mt-4 flex flex-wrap gap-2'>
												<span className='text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#1cd8d2]'>
													{item.year}
												</span>
												<span className='text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white'>
													{item.score}
												</span>
											</div>
										</article>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Education
