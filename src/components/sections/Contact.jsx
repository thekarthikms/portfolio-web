import { Icon } from "@iconify/react"

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-screen w-full flex flex-col items-center gap-4 justify-center snap-center"
    >
      <div className="flex flex-col items-center max-w-[400px] w-full gap-4">
        <p className="font-bold">Find me at:</p>
        <div className="flex gap-2">
          <Icon icon="bxl:github" height={24} />
          <a
            aria-label="View GitHub Profile"
            className="font-bold hover:text-linkColor"
            target="_blank"
            href="https://github.com/thekarthikms"
          >
            @thekarthikms
          </a>
        </div>
        <div className="flex gap-2">
          <Icon icon="bxl:linkedin" height={24} />
          <a
            aria-label="View LinkedIn Profile"
            className="font-bold hover:text-linkColor"
            target="_blank"
            href="https://www.linkedin.com/in/thekarthikms/"
          >
            @thekarthikms
          </a>
        </div>
        <div className="flex gap-2">
          <Icon icon="bxl:dribbble" height={24} />
          <a
            aria-label="View GitHub Profile"
            className="font-bold hover:text-linkColor"
            target="_blank"
            href="https://dribbble.com/thekarthikms"
          >
            @thekarthikms
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
