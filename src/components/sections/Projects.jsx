const projectsList = [
  {
    id: 1,
    name: "FireChat",
    desc: ` React based chat application with firebase as backend. Created as a
    part of learning React.`,
    link: "https://github.com/thekarthikms/react-firebase-chat-application",
  },
  {
    id: 2,
    name: "Portfolio Website",
    desc: "Portfolio website using React and Tailwind CSS.",
    link: "https://github.com/thekarthikms/portfolio-web",
  },
  {
    id: 3,
    name: "DeVote",
    desc: "Decentralised voting application with blockchain. Created as a part of final year project.",
    link: "",
  },
  {
    id: 4,
    name: "Firebase blogger app",
    desc: "A simple blogging application with webpack bundling.",
    link: "",
  },
]

const Projects = () => {
  return (
    <div
      id="projects"
      className="h-full w-full flex flex-col items-center gap-4 justify-center snap-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6  px-6 mt-10">
        {projectsList.map((item) => (
          <ProjectItem
            key={item.id}
            name={item.name}
            desc={item.desc}
            link={item.link}
          />
        ))}
      </div>
    </div>
  )
}

const ProjectItem = ({ name, desc, link }) => {
  return (
    <div className="flex flex-col justify-between gap-2 py-2 md:py-4 px-4 rounded-md border border-highlightColor  hover:bg-highlightColor cursor-pointer transition-all">
      {/* <div className="h-[200px]  w-[400px] bg-black/30 rounded-md"></div> */}
      <div>
        <p className="text-md md:text-2xl font-bold">{name}</p>
        <p className="font-medium  max-w-[350px] w-full text-sm md:text-base text-secondaryText">
          {desc}
        </p>
      </div>
      {link && (
        <a
          href={link}
          className="text-[#3881C3] font-bold text-sm md:text-base"
        >
          View on Github
        </a>
      )}
    </div>
  )
}

export default Projects
