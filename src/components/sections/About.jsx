const About = () => {
	return (
		<div id='about' className='h-full w-full flex flex-col items-center gap-4 justify-center snap-center'>
			<div className='max-w-[700px] w-full flex flex-col items-left justify-center gap-4 px-6'>
				<p className='text-4xl sm:text-6xl font-bold'>Karthik M S</p>
				<p className='text-tertiaryText'>Software Engineer / Frontend Architect / Mobile Developer</p>

				<div className='font-medium text-secondaryText text-justify'>
					<p>
						Software Engineer specializing in frontend architecture, high-performance web systems, and cross-platform
						mobile apps using React and React Native. With 5+ years of experience across freelance, product, and
						client-facing environments, I focus on transforming complex UI/UX designs into scalable, clean-code
						applications. My self-taught background drives my adaptability and deep focus on performance optimization.
					</p>
					<p className='mt-4'>
						Currently at Epoq Zero, I engineer responsive architectures and deliver production-ready systems for a
						diverse client portfolio.
					</p>

					<div className='mt-6'>
						<p className='font-semibold mb-2'>🛠️ Core Expertise:</p>
						<ul className='list-disc list-inside space-y-2 ml-1'>
							<li>
								<span className='font-semibold'>Web & Mobile:</span> React.js, React Native, Expo, JavaScript (ES6+)
							</li>
							<li>
								<span className='font-semibold'>Architecture:</span> System Design, State Management, Cross-Platform
								UI/UX
							</li>
							<li>
								<span className='font-semibold'>Focus:</span> Web Performance, Scalability, Component Libraries, Agentic
								Coding (AI Workflows)
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
