const About = () => {
  return (
    <div
      id="about"
      className="h-screen w-full flex flex-col items-center gap-4 justify-center snap-center"
    >
      <div className="max-w-[700px] w-full flex flex-col items-left justify-center gap-4 px-6">
        <p className="text-4xl sm:text-6xl font-bold">Karthik M S</p>
        <p className="text-[#696560]">
          Developer / Designer / Anime Enthusiast
        </p>
        <p className="font-medium text-[#575757]">
          I’m a front-end developer based in India. I’m a self-taught developer
          and my expertise is in developing web applications and websites using
          React, Javascript and other front-end technologies. I love using my
          creative and design skills to solve problems in the front-end.
          Currently, I work as a Software Engineer at Epoq Zero LLP, creating
          and implementing front-end applications for them and their clients.
        </p>
      </div>
    </div>
  )
}

export default About
