// resume
import resume from "../assets/KarthikMS_Resume.pdf"
import { Icon } from "@iconify/react"

const Links = () => {
  return (
    <div className="links">
      <a
        aria-label="View GitHub Profile"
        className="link"
        target="_blank"
        href="https://github.com/thekarthikms"
      >
        <Icon icon="bxl:github" height={24} className="link-icon" />
      </a>
      <a
        aria-label="View LinkedIn Profile"
        className="link"
        target="_blank"
        href="https://www.linkedin.com/in/thekarthikms/"
      >
        <Icon icon="bxl:linkedin" height={24} className="link-icon" />
      </a>
      {/* <a
        aria-label="View Resume PDF"
        className="link"
        target="_blank"
        href={resume}
      >
        <Icon icon="bx:note" height={24} className="link-icon" />
      </a>
      <a aria-label="Send E-mail" className="link" href="">
        <Icon icon="bx:envelope" height={24} className="link-icon" />
      </a> */}
    </div>
  )
}
export default Links
