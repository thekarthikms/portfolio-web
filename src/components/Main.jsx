import { Icon } from "@iconify/react"

const Main = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center gap-4 justify-center snap-center">
      <p className="text-4xl sm:text-6xl font-bold">Karthik M S</p>
      <div className="bg-black/5 px-4 sm:px-16 py-4 rounded-lg">
        <p className="font-medium text-sm sm:text-base">
          Hello, I&apos;m a frontend developer based in India{" "}
        </p>
      </div>
      <div className="flex gap-4 mt-4 items-center">
        <a
          aria-label="View GitHub Profile"
          className="link"
          target="_blank"
          href="https://github.com/thekarthikms"
        >
          <Icon icon="bxl:github" height={24} />
        </a>
        <a
          aria-label="View LinkedIn Profile"
          className="link"
          target="_blank"
          href="https://www.linkedin.com/in/thekarthikms/"
        >
          <Icon icon="bxl:linkedin" height={24} />
        </a>
        <a
          href="#"
          className="bg-textColor text-backgroundColor px-4 py-2 rounded-md font-medium"
        >
          View my work
        </a>
      </div>
    </div>
  )
}

export default Main
