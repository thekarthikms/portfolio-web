// icons
import {
  BiEnvelope,
  BiLogoGithub,
  BiLogoLinkedin,
  BiNote,
} from "react-icons/bi";
// resume
import resume from "../assets/KarthikMS_Resume.pdf";

const Links = () => {
  return (
    <div className="links">
      <a
        aria-label="View GitHub Profile"
        className="link"
        target="_blank"
        href="https://github.com/thekarthikms"
      >
        <BiLogoGithub className="link-icon" size={24} />
      </a>
      <a
        aria-label="View LinkedIn Profile"
        className="link"
        target="_blank"
        href="https://www.linkedin.com/in/thekarthikms/"
      >
        <BiLogoLinkedin className="link-icon" size={24} />
      </a>
      {/*<a
        aria-label="View Resume PDF"
        className="link"
        target="_blank"
        href={resume}
      >
        <BiNote className="link-icon" size={24} />
      </a> */}
      {/* <a aria-label="Send E-mail" className="link" href="">
        <BiEnvelope className="link-icon" size={24} />
      </a> */}
    </div>
  );
};
export default Links;
