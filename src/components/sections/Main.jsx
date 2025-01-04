import { Icon } from '@iconify/react'
import resume from '@/assets/KarthikMS_Resume.pdf'

const Main = () => {
	return (
		<div className='h-full w-full flex flex-col items-center gap-4 justify-center snap-center px-4' id='main'>
			<p className='text-4xl sm:text-6xl font-bold'>Karthik M S</p>
			<div className='bg-highlightColor px-4 sm:px-16 py-4 rounded-lg'>
				<p className='font-medium text-sm sm:text-base text-center text-secondaryText'>
					Hello, I&apos;m a frontend developer based in India{' '}
				</p>
			</div>
			<div className='flex gap-4 mt-4 items-center'>
				<a
					aria-label='View GitHub Profile'
					className='hover:scale-125 duration-300'
					target='_blank'
					href='https://github.com/thekarthikms'>
					<Icon icon='bxl:github' height={24} />
				</a>
				<a
					aria-label='View LinkedIn Profile'
					className='hover:scale-125 duration-300'
					target='_blank'
					href='https://www.linkedin.com/in/thekarthikms/'>
					<Icon icon='bxl:linkedin' height={24} />
				</a>
				{/* <a
          aria-label="View Resume PDF"
          className="hover:scale-125 duration-300"
          target="_blank"
          href={resume}
        >
          <Icon icon="bx:note" height={24} className="link-icon" />
        </a> */}
			</div>
		</div>
	)
}

export default Main
