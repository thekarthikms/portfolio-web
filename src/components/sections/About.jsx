const About = () => {
	return (
		<div id='about' className='h-full w-full flex flex-col items-center gap-4 justify-center snap-center'>
			<div className='max-w-[700px] w-full flex flex-col items-left justify-center gap-4 px-6'>
				<p className='text-4xl sm:text-6xl font-bold'>Karthik M S</p>
				<p className='text-tertiaryText'>Software Engineer / Frontend Architect / Mobile Developer</p>

				<div className='font-medium text-secondaryText text-justify'>
					<p>
						Software Engineer with 5+ years of experience specializing in high-performance web and mobile systems.
						Currently at Epoq Zero, I focus on building scalable React & React Native applications with a deep
						emphasis on performance and clean architecture.
					</p>

					<div className='mt-6'>
						<p className='font-semibold mb-2'>🛠️ Core Expertise:</p>
						<ul className='list-disc list-inside space-y-2 ml-1'>
							<li>
								<span className='font-semibold'>Tech:</span> React.js, React Native, Expo, JavaScript
							</li>
							<li>
								<span className='font-semibold'>Systems:</span> Frontend Architecture, System Design, UI/UX
							</li>
							<li>
								<span className='font-semibold'>Specialties:</span> Performance, Scalability, AI Workflows
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
